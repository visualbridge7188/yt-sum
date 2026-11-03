/* Native YouTube transcript access. Load before the extension UI.
 * window.YTS.transcript.extract({ language?, videoId?, timeoutMs? }) returns
 * { videoId, language, languages, segments: [{ timestamp, seconds, text }] }.
 * language is an exact native menu label; languages is [{ label, selected }].
 * Errors have a code: NOT_WATCH_PAGE, STALE_VIDEO, NO_TRANSCRIPT,
 * EMPTY_TRANSCRIPT, LANGUAGE_UNAVAILABLE, or TIMEOUT.
 * Language options depend on the controls YouTube exposes for the video.
 */
(() => {
  'use strict';
  const ns = window.YTS = window.YTS || {};
  const segmentSelector = 'ytd-transcript-segment-renderer, yt-transcript-segment-renderer, transcript-segment-view-model';
  const panelSelector = 'ytd-engagement-panel-section-list-renderer[target-id="engagement-panel-searchable-transcript"], ytd-engagement-panel-section-list-renderer[target-id="PAmodern_transcript_view"], ytd-transcript-renderer, yt-transcript-renderer';
  const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
  const error = (code, message) => Object.assign(new Error(message), { code });
  const videoId = () => {
    if (location.pathname === '/watch') return new URLSearchParams(location.search).get('v');
    if (location.pathname.startsWith('/shorts/')) return location.pathname.split('/shorts/')[1]?.split(/[?&#]/)[0] || null;
    return null;
  };
  function all(selector, root = document) {
    const result = [];
    function visit(node) {
      if (!node?.querySelectorAll) return;
      result.push(...node.querySelectorAll(selector));
      for (const el of node.querySelectorAll('*')) if (el.shadowRoot) visit(el.shadowRoot);
    }
    visit(root);
    return [...new Set(result)];
  }
  const one = (selector, root) => all(selector, root)[0] || null;
  const visible = el => !!el && el.isConnected && !el.closest('[hidden], [visibility="ENGAGEMENT_PANEL_VISIBILITY_HIDDEN"]') && el.getClientRects().length > 0;
  const label = el => (el.getAttribute('aria-label') || el.textContent || '').replace(/\s+/g, ' ').trim();
  const stampSeconds = stamp => {
    const parts = stamp.split(':').map(Number);
    return parts.reduce((total, part) => total * 60 + part, 0);
  };
  const activePanel = () => all(panelSelector).find(visible) || null;
  async function extractViaInnertube(id) {
    try {
      console.log("[YTS] extractViaInnertube start for id:", id);
      const res = await fetch('https://www.youtube.com/watch?v=' + encodeURIComponent(id), { credentials: 'include' });
      if (!res.ok) { console.log("[YTS] watch fetch failed:", res.status); return null; }
      const html = await res.text();
      const parts = html.split('"getTranscriptEndpoint":');
      if (parts.length < 2) { console.log("[YTS] no getTranscriptEndpoint in html"); return null; }
      const params = parts[1].split('"params":"')[1].split('"')[0];
      if (!params) { console.log("[YTS] no params in getTranscriptEndpoint"); return null; }
      console.log("[YTS] found params:", params.slice(0, 30));
      const days = Math.floor(Math.random() * 20);
      const d = new Date(Date.now() - days * 86400000);
      const ymd = d.toISOString().split('T')[0].replace(/-/g, '');
      const clientVersion = `2.${ymd}.00.00`;
      const apiRes = await fetch('https://www.youtube.com/youtubei/v1/get_transcript?prettyPrint=false', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ context: { client: { clientName: 'WEB', clientVersion: clientVersion } }, params: params })
      });
      console.log("[YTS] innertube apiRes status:", apiRes.status);
      if (!apiRes.ok) {
        const errText = await apiRes.text();
        console.log("[YTS] innertube error body:", errText.slice(0, 200));
        return null;
      }
      const data = await apiRes.json();
      const searchPanel = data?.actions?.[0]?.updateEngagementPanelAction?.content?.transcriptRenderer?.content?.transcriptSearchPanelRenderer;
      const initial = searchPanel?.body?.transcriptSegmentListRenderer?.initialSegments;
      if (!initial || !initial.length) return null;
      const segs = initial.map(item => {
        const r = item.transcriptSegmentRenderer;
        if (!r) return null;
        const startSec = Math.floor(Number(r.startMs || 0) / 1000);
        const m = Math.floor(startSec / 60);
        const s = Math.floor(startSec % 60);
        const timestamp = `${m}:${String(s).padStart(2, '0')}`;
        const text = (r.snippet?.runs || []).map(x => x.text).join('').replace(/\n/g, ' ').trim();
        return { timestamp, seconds: startSec, text };
      }).filter(Boolean).filter(s => s.text);
      if (!segs.length) return null;
      return { videoId: id, language: '한국어 (자막)', languages: [{ label: '한국어 (자막)', selected: true }], segments: segs };
    } catch (_) {
      return null;
    }
  }
  function getPerformanceTimedText(videoId) {
    try {
      const entries = performance.getEntriesByType('resource');
      for (let i = entries.length - 1; i >= 0; i--) {
        const name = entries[i].name;
        if (name && name.includes('/api/timedtext') && (!videoId || name.includes('v=' + videoId))) {
          return name;
        }
      }
    } catch (_) {}
    return null;
  }
  function parseTimedText(raw) {
    if (!raw || typeof raw !== 'string') return null;
    if (raw.trim().startsWith('{')) {
      try {
        const json = JSON.parse(raw);
        if (json.events && Array.isArray(json.events)) {
          const list = json.events.filter(e => e.segs).map(e => {
            const start = Math.floor((e.tStartMs || 0) / 1000);
            const m = Math.floor(start / 60);
            const s = Math.floor(start % 60);
            const timestamp = `${m}:${String(s).padStart(2, '0')}`;
            const text = e.segs.map(seg => seg.utf8).join('').replace(/\n/g, ' ').trim();
            return { timestamp, seconds: start, text };
          }).filter(e => e.text);
          if (list.length) return list;
        }
      } catch (_) {}
    }
    if (raw.includes('<text')) {
      try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(raw, 'text/xml');
        const nodes = Array.from(doc.querySelectorAll('text'));
        const list = nodes.map(node => {
          const start = parseFloat(node.getAttribute('start') || '0');
          const text = (node.textContent || '').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/\n/g, ' ').trim();
          const m = Math.floor(start / 60);
          const s = Math.floor(start % 60);
          const timestamp = `${m}:${String(s).padStart(2, '0')}`;
          return { timestamp, seconds: Math.floor(start), text };
        }).filter(s => s.text);
        if (list.length) return list;
      } catch (_) {}
    }
    return null;
  }
  function getSubtitlesFromTextTracks() {
    try {
      const video = document.querySelector('video');
      if (!video || !video.textTracks) return null;
      for (let i = 0; i < video.textTracks.length; i++) {
        const track = video.textTracks[i];
        if (track.cues && track.cues.length > 0) {
          const segs = Array.from(track.cues).map(c => {
            const start = Math.floor(c.startTime || 0);
            const m = Math.floor(start / 60);
            const s = Math.floor(start % 60);
            const timestamp = `${m}:${String(s).padStart(2, '0')}`;
            const text = (c.text || '').replace(/\n/g, ' ').trim();
            return { timestamp, seconds: start, text };
          }).filter(s => s.text);
          if (segs.length > 0) return segs;
        }
      }
    } catch (_) {}
    return null;
  }
  async function extractViaFetch(id, requestedLang) {
    try {
      const cueSegs = getSubtitlesFromTextTracks();
      if (cueSegs && cueSegs.length > 0) {
        return { videoId: id, language: '현재 자막 (CC)', languages: [{ label: '현재 자막 (CC)', selected: true }], segments: cueSegs };
      }
      let timedUrl = getPerformanceTimedText(id);
      if (!timedUrl) {
        const ccBtn = document.querySelector('#shorts-player button[aria-label*="자막"], .ytp-subtitles-button, button[aria-label*="Captions"]');
        if (ccBtn) {
          ccBtn.click();
          await pause(200);
          ccBtn.click();
          await pause(300);
          timedUrl = getPerformanceTimedText(id);
        }
      }
      if (timedUrl) {
        const r = await fetch(timedUrl);
        if (r.ok) {
          const body = await r.text();
          const segs = parseTimedText(body);
          if (segs && segs.length) {
            return { videoId: id, language: '현재 자막 (CC)', languages: [{ label: '현재 자막 (CC)', selected: true }], segments: segs };
          }
        }
      }
      const res = await fetch('https://www.youtube.com/watch?v=' + encodeURIComponent(id), {
        credentials: 'omit',
        headers: { 'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7' }
      });
      if (!res.ok) return null;
      const html = await res.text();
      const parts = html.split('"captions":');
      if (parts.length < 2) return null;
      const raw = parts[1].split(',"videoDetails')[0].replace(/\n/g, '');
      const data = JSON.parse(raw);
      const tracks = data?.playerCaptionsTracklistRenderer?.captionTracks || [];
      if (!tracks.length) return null;
      const languages = tracks.map(t => ({
        label: t.name?.simpleText || t.languageCode,
        code: t.languageCode,
        selected: false,
        baseUrl: t.baseUrl
      }));
      let chosen = null;
      if (requestedLang) {
        chosen = tracks.find(t => (t.name?.simpleText || t.languageCode) === requestedLang || t.languageCode === requestedLang);
      }
      if (!chosen) {
        chosen = tracks.find(t => /ko|korean|한국어/i.test(t.languageCode) || /한국어/i.test(t.name?.simpleText || ''));
      }
      if (!chosen) chosen = tracks[0];
      const selectedLabel = chosen.name?.simpleText || chosen.languageCode;
      languages.forEach(l => { if (l.label === selectedLabel) l.selected = true; });
      const subRes = await fetch(chosen.baseUrl);
      if (!subRes.ok) return null;
      const xml = await subRes.text();
      if (!xml || !xml.includes('<text')) return null;
      const parser = new DOMParser();
      const doc = parser.parseFromString(xml, 'text/xml');
      const nodes = Array.from(doc.querySelectorAll('text'));
      const segs = nodes.map(node => {
        const start = parseFloat(node.getAttribute('start') || '0');
        const text = (node.textContent || '').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/\n/g, ' ').trim();
        const m = Math.floor(start / 60);
        const s = Math.floor(start % 60);
        const timestamp = `${m}:${String(s).padStart(2, '0')}`;
        return { timestamp, seconds: Math.floor(start), text };
      }).filter(s => s.text);
      if (!segs.length) return null;
      return { videoId: id, language: selectedLabel, languages, segments: segs };
    } catch (_) {
      return null;
    }
  }
  function segments(panel) {
    return all(segmentSelector, panel).filter(visible).map(el => {
      const timestampEl = one('.segment-timestamp, .ytwTranscriptSegmentViewModelTimestamp, [class*="Timestamp"]', el);
      const textEl = one('.segment-text, .ytwTranscriptSegmentViewModelText, [class*="SegmentText"], span[role="text"]', el);
      const raw = (el.innerText || el.textContent || '').trim();
      const timestamp = (timestampEl?.textContent || raw.match(/^\s*(\d{1,3}:\d{2}(?::\d{2})?)/)?.[1] || '').trim();
      const text = (textEl?.innerText || textEl?.textContent || raw.replace(/^\s*\d{1,3}:\d{2}(?::\d{2})?\s*/, '')).replace(/\s+/g, ' ').trim();
      return { timestamp, seconds: /^\d{1,3}:\d{2}(?::\d{2})?$/.test(timestamp) ? stampSeconds(timestamp) : null, text };
    }).filter(item => item.text && item.seconds !== null);
  }
  async function extract({ language, videoId: expectedId, timeoutMs = 15000 } = {}) {
    const id = videoId();
    if (!id) throw error('NOT_WATCH_PAGE', 'YouTube 영상 페이지에서 실행해 주세요.');
    if (expectedId && expectedId !== id) throw error('STALE_VIDEO', '영상이 변경됐어요. 다시 시도해 주세요.');
    if (location.pathname.startsWith('/shorts/')) {
      const data = (await extractViaInnertube(id)) || (await extractViaFetch(id, language));
      if (data) return data;
      throw error('NO_TRANSCRIPT', '이 영상에는 등록된 자막(스크립트)이 없어요.');
    }
    const deadline = Date.now() + Math.max(1000, timeoutMs);
    const check = () => { if (videoId() !== id) throw error('STALE_VIDEO', '영상이 변경됐어요. 다시 시도해 주세요.'); };
    async function waitFor(fn, limit = deadline) {
      while (Date.now() < limit) { check(); const value = fn(); if (value) return value; await pause(200); }
      check(); return null;
    }
    // 1. Silent network extract first (never touches DOM, never expands description or comments)
    const silentData = (await extractViaInnertube(id)) || (await extractViaFetch(id, language));
    if (silentData) return silentData;

    let panel = activePanel();
    if (!panel) {
      throw error('NO_TRANSCRIPT', '이 영상에는 등록된 자막(스크립트)이 없어요.');
    }
    const search = one('input#search-input, input[placeholder*="스크립트 검색"], input[placeholder*="Search transcript"]', panel);
    if (search && search.value.trim()) throw error('FILTERED_TRANSCRIPT', 'YouTube 스크립트 검색을 지우고 다시 시도해 주세요.');
    let rows = await waitFor(() => { const p = activePanel(); const s = p && segments(p); return s?.length ? s : null; });
   if (!rows) throw error('EMPTY_TRANSCRIPT', '이 영상에는 등록된 자막(스크립트)이 없어요.');
    panel = activePanel();
    // YouTube typically exposes language choices in the transcript footer menu.
    const menuButton = one('yt-dropdown-menu #label', panel) || all('button', panel).find(el => visible(el) && /language|언어/i.test(label(el)));
    let languages = [];
    let selected = null;
    if (menuButton) {
      menuButton.click();
      const options = await waitFor(() => {
        const menu = menuButton.closest('yt-dropdown-menu') || panel;
        const items = all('tp-yt-paper-item, [role="menuitemradio"], [role="option"]', menu).filter(visible).filter(el => label(el));
        return items.length ? items : null;
      }, Math.min(deadline, Date.now() + 2000));
      if (options) {
        const currentLabel = label(menuButton);
        languages = options.map(el => ({ label: label(el), selected: el.getAttribute('aria-checked') === 'true' || el.getAttribute('aria-selected') === 'true' || el.parentElement?.getAttribute('aria-selected') === 'true' || label(el) === currentLabel }));
        selected = languages.find(item => item.selected)?.label || currentLabel || null;
        if (language && language !== selected) {
          const index = languages.findIndex(item => item.label === language);
          if (index < 0) { menuButton.click(); throw error('LANGUAGE_UNAVAILABLE', '요청한 자막 언어를 찾지 못했어요.'); }
          const before = rows.map(row => `${row.timestamp}\u0000${row.text}`).join('\n');
          options[index].click();
          const selectedAt = Date.now();
          rows = await waitFor(() => {
            const p = activePanel(); const current = p && segments(p);
            if (!current?.length) return null;
            const after = current.map(row => `${row.timestamp}\u0000${row.text}`).join('\n');
            const selectedLabel = label(menuButton);
            return after !== before || (selectedLabel === language && Date.now() - selectedAt > 1000) ? current : null;
          });
          if (!rows) throw error('TIMEOUT', '선택한 언어의 자막이 갱신되지 않았어요.');
          selected = language;
          languages = languages.map(item => ({ ...item, selected: item.label === language }));
        } else {
          menuButton.click();
        }
      } else if (language) {
        throw error('LANGUAGE_UNAVAILABLE', '자막 언어 선택 목록을 읽지 못했어요.');
      }
    } else if (language) {
      throw error('LANGUAGE_UNAVAILABLE', '이 영상에서 자막 언어 선택 메뉴를 찾지 못했어요.');
    }
    check();
    return { videoId: id, language: selected, languages, segments: rows };
  }
  ns.transcript = Object.freeze({ extract });
})();

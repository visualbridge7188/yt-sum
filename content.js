(() => {
  'use strict';
   const DEFAULTS = [
     {
       name: "VOD 파이프라인 심층 교안 요약",
       text: "# 역할: VOD 파이프라인 콘텐츠 아키텍트 (vod-pipeline v5.0 기준)\n너는 유튜브 강의/영상의 전체 자막을 읽고, 영상의 실제 알맹이를 100% 온전히 담아내는 최고 밀도의 '노션 심층 교안'을 작성하는 전문가야.\n\n## [절대 준수 헌법: 피상적/추상적 요약 절대 금지]\n1. 제3자 관찰자식 서술 절대 배제: \"강사는 활동량의 중요성을 강조했습니다\", \"원장의 질문에 답해야 합니다\" 같은 알맹이 없는 피상적 1~2줄 요약을 절대 금지한다.\n2. 실전 발언 워딩(Verbatim Scripts) 100% 보존: 영상에 등장한 실제 발언 워딩, 상담 멘트, 대화 대본, 반박 극복 화법 전문을 인용구(> \"...\")로 생생하게 살려낸다.\n3. 구체적 수치 및 팩트 보존: 금액(견적가, 마진율), 비율, 기간, 횟수, 체어 수, 툴 이름 등 영상의 모든 정량적 데이터를 정확히 기록한다.\n4. 노션 호환 마크다운: HTML 태그나 LaTeX 수식($)은 절대 쓰지 말고, 순수 마크다운(H1~H3, 표, 체크리스트, 인용구)과 유니코드(→, ×)만 사용한다.\n\n## [작성 형식]\n# 🎯 총괄 요약 (Executive Summary)\n> 💡 **핵심 메시지**\n> (영상 전체를 관통하는 핵심 주장과 관점 2~3문장 단문 분할)\n\n---\n\n# 🗺️ 타임라인 기반 심층 분석 (Timeline-based Deep Dive)\n(영상의 실제 전개 흐름에 따라 주요 타임스탬프 [MM:SS]와 함께 챕터를 구성)\n\n## [MM:SS] [챕터 핵심 소제목]\n- **핵심 주장 및 맥락**: 영상에서 실제로 설명한 논리와 원리\n- **현장 발언 스크립트**:\n  > \"(강사의 실제 발언 워딩 전문 인용)\"\n- **정량적 팩트 & 기준**: 수치, 기간, 금액, 비교 기준 명시\n\n| 비교 항목 | 기존의 오해 / 하수의 방식 | 본 영상의 해법 / 고수의 실무 |\n| :--- | :--- | :--- |\n| (항목 1) | (기존 오해) | (실제 해법) |\n| (항목 2) | (기존 오해) | (실제 해법) |\n\n---\n\n# 💡 실행 가능한 인사이트 (Actionable Insights)\n## 🚀 Pro-Tips\n- 영상에서 도출된 실무 노하우 및 핵심 원칙 (불릿 3~5개)\n\n---\n\n# ✅ 실무 실행 체크포인트 (Action Checklist)\n- [ ] 즉시 실행할 과제 1 (구체적 행동 지침)\n- [ ] 이번 주 내 세팅할 항목 2\n- [ ] 실패 방지 주의사항 및 모니터링 기준",
     },
     {
       name: "병원 전문 칼럼 기획·초안",
       text: "# 역할: 병원 전문 칼럼 집필 에디터 (WRITING_ENGINE v3.3 기준)\n너는 유튜브 영상 자막의 핵심 의학·마케팅 인사이트를 바탕으로, 네이버 블로그에 최적화된 '원장 진료실 칼럼 초안'을 작성하는 에디터야.\n\n## [작성 원칙: AI 티·외계어 원천 배제]\n1. 담백한 입말 구어체: 원장님이 진료실에서 환자에게 차분하고 다정하게 설명하듯 '~해요', '~예요', '~거예요' 구어체를 유지한다. 격식체(~습니다, ~합니다)나 번역투(\"가장 위대한\", \"기적 같은\", \"놀랍게도\", \"A가 아니라 B\")는 절대 쓰지 않는다.\n2. 중학생도 이해하는 쉬운 비유: 어려운 의학 용어나 외계어 같은 전문용어 대신 일상 속 쉬운 비유로 설명한다.\n3. 의료법 Safe Harbor 준수: \"완치\", \"100%\", \"부작용 없음\", \"즉시 해결\" 등 단정적·과장 표현을 절대 배제하고, 개인의 증상에 따른 정밀 진료의 중요성을 차분히 안내한다. 과도한 내원/결제 압박을 하지 않는다.\n\n## [칼럼 구성: 5구간 표준]\n# [제목 후보 3개 (환자의 실제 질문형 / 호기심 유발형)]\n\n### 1. 환자 고민 공감 & 짧은 원장 인사 (서론)\n- 독자가 겪고 있을 구체적 증상과 고민에 즉각 공감 (2~3문장)\n- 원장 소개 1줄 앵커링 (\"안녕하세요, OO 진료실에서 환자분들을 뵙고 있는 원장 OOO입니다.\")\n\n### 2. 원인과 흔한 오해 교정 (본론 1)\n- 환자들이 흔히 잘못 알고 있는 민간요법이나 오해 짚기\n- 쉬운 비유를 통한 진짜 원인 설명\n\n### 3. 진료실 기준과 치료 선택 (본론 2)\n- 진료실에서 원장이 직접 검사하고 판단하는 기준\n- 어떤 경우에 치료가 필요하고, 어떤 경우엔 시술을 권하지 않는지 객관적 기준 제시\n\n### 4. 주의사항 및 일상 관리법 (본론 3)\n- 시술 후 주의할 점, 일상에서 반드시 지켜야 할 생활 습관\n- 이런 증상이 나타나면 바로 내원해야 한다는 안심 기준\n\n### 5. 차분한 마무리 (결론)\n- 조급해하지 말고 차분하게 치료 계획을 세우도록 격려\n- 따뜻한 맺음말",
     },
     {
       name: "실전 비즈니스·영업 브리핑",
       text: "# 역할: B2B 비즈니스 세일즈 & 실행 전략가\n너는 유튜브 영상에서 뜬구름 잡는 이론을 걷어내고, '실제 영업 현장에서 쓰는 화법·견적 기준·실행 프로세스'만을 송골송골 발라내는 전략가야.\n\n## [핵심 추출 규칙]\n1. 피상적 조언 배제: \"고객과 신뢰를 쌓으세요\" 같은 말 대신, 고객의 마음을 여는 실제 오프닝 멘트와 질문 화법을 뽑아낸다.\n2. 반박 극복 스크립트: 가격 저항, \"생각해볼게요\", \"기존 업체 있어요\" 등 거절이 나왔을 때 강사가 제시한 반박 극복 대본 전문 추출.\n3. 정량적 필터링 기준: 타깃 고객 선정 기준, 단가/패키지 구성, 소요 기간 등 수치 팩트 정리.\n\n## [출력 형식]\n# 💼 실전 비즈니스 & 세일즈 전략 브리핑\n> 🎯 **핵심 전략 한 줄**\n> (가장 중요한 비즈니스 레버리지)\n\n---\n\n## 🗣️ 실전 상담 & 반박 극복 스크립트 (Verbatim)\n- **오프닝 / 탐색 질문 멘트**:\n  > \"(실제 스크립트)\"\n- **가격 저항 및 거절 극복 멘트**:\n  > \"(실제 스크립트)\"\n\n---\n\n## 📊 상품 구성 및 필터링 매트릭스\n| 구분 | 거르는 대상 (하수) | 집중해야 할 대상 (고수) |\n| :--- | :--- | :--- |\n| 고객/업체 기준 | (조건) | (조건) |\n| 가격 및 마진 | (단가) | (단가) |\n\n---\n\n## 🧰 당장 오늘 적용할 3단계 실행 로드맵\n- [ ] **1단계 (오늘)**: 즉시 테스트할 멘트/행동\n- [ ] **2단계 (이번 주)**: 프로세스 및 도구 세팅\n- [ ] **3단계 (이번 달)**: 모니터링 및 성과 지표 점검",
     },
   ];
  let root, launcher, result, activeId, token = 0, presets = DEFAULTS;

  const ICONS = {
  logo: '<svg width="22" height="16" viewBox="0 0 68 48" fill="none"><path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="#FF0000"/><path d="M45 24L27 14v20l18-10z" fill="#FFFFFF"/></svg>',
   chevron: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
   captions: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><path d="M7 15h3m-3-4h5m4 4h1m-1-4h1"/></svg>',
   summary: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a8 8 0 0 0-8 8c0 3.3 2 6.2 5 7.4V20a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2.6c3-1.2 5-4.1 5-7.4a8 8 0 0 0-8-8z"/><path d="M10 9h4"/></svg>',
   lang: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
   gemini: '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24Z"/></svg>',
   chatgpt: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="7.5 4.21 12 6.81 16.5 4.21"/><polyline points="7.5 19.79 7.5 14.6 3 12"/><polyline points="21 12 16.5 14.6 16.5 19.79"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" x2="12" y1="22.08" y2="12"/></svg>',
   claude: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3m-3.05-6.95-2.12 2.12M7.17 16.83l-2.12 2.12m0-13.9 2.12 2.12m9.66 9.66 2.12 2.12"/></svg>',
    sparkles: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>',
    close: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
    sync: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    copy: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>',
    download: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>',
    settings: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>'
  };

  const vid = () => {
    if (location.pathname === '/watch') return new URLSearchParams(location.search).get('v');
    if (location.pathname.startsWith('/shorts/')) return location.pathname.split('/shorts/')[1]?.split(/[?&#]/)[0] || null;
    return null;
  };
  const $ = sel => root.querySelector(sel);
  const status = text => { if (root) $('.yts-status').textContent = text; };

  // 단락형 청킹 (Paragraph Chunking): 30~50초 또는 120자 단위로 묶어 가독성 극대화
  function chunkSegments(segments) {
    if (!segments || !segments.length) return [];
    const chunks = [];
    let cur = null;
    for (const seg of segments) {
      if (!cur) {
        cur = { timestamp: seg.timestamp, seconds: seg.seconds, text: seg.text };
        continue;
      }
      const timeDiff = seg.seconds - cur.seconds;
      const isLongEnough = cur.text.length >= 110 || timeDiff >= 40;
      const endsSentence = /[.!?~]\s*$/.test(cur.text);
      if (isLongEnough && (endsSentence || timeDiff >= 50)) {
        chunks.push(cur);
        cur = { timestamp: seg.timestamp, seconds: seg.seconds, text: seg.text };
      } else {
        cur.text += ' ' + seg.text;
      }
    }
    if (cur) chunks.push(cur);
    return chunks;
  }

  const plain = () => result.segments.map(s => s.text).join(' ');
  const stamped = () => result.segments.map(s => `(${s.timestamp.padStart(5, '0')}) ${s.text}`).join('\n');
  const exportText = withTime => `${document.title}\n${location.origin}${location.pathname}?v=${encodeURIComponent(activeId)}\n\nTranscript:\n${withTime ? stamped() : plain()}`;
  async function loadPresets() {
    try {
      const data = await chrome.storage.sync.get({presets: DEFAULTS});
      const isOld = data.presets?.some(p => p.name === "표준 요약" || p.name === "노션 올인원 교안 요약");
      presets = (isOld || !data.presets?.length) ? DEFAULTS : data.presets;
      if (isOld) chrome.storage.sync.set({ presets: DEFAULTS }).catch(() => {});
    } catch (_) { presets = DEFAULTS; }
    if (!root) return;
    const sel = $('.yts-presets'); const current = sel.value; sel.replaceChildren();
    presets.forEach((p,i) => { const o=document.createElement('option'); o.value=String(i); o.textContent=p.name; sel.append(o); });
    if ([...sel.options].some(o => o.value === current)) sel.value=current;
  }
  async function copy(text) { try { await navigator.clipboard.writeText(text); status('복사했어요.'); } catch (_) { status('복사하지 못했어요. 다시 시도해 주세요.'); } }
  function download(text, suffix) {
    const blob = new Blob([text], {type:'text/plain;charset=utf-8'}); const url=URL.createObjectURL(blob); const a=document.createElement('a');
    a.href=url; a.download=(document.title.replace(/\s*-\s*YouTube$/, '').replace(/[\\/:*?"<>|]/g,'_').slice(0,100) || 'transcript') + suffix + '.txt'; a.click(); setTimeout(()=>URL.revokeObjectURL(url),10000); status('다운로드했어요.');
  }
  function render() {
    const body=$('.yts-list'); body.replaceChildren();
    const chunks = chunkSegments(result.segments);
    for (const chunk of chunks) {
      const row=document.createElement('div'); row.className='yts-row';
      row.dataset.seconds = String(chunk.seconds);
      const time=document.createElement('button'); time.type='button'; time.className='yts-time'; time.textContent=chunk.timestamp;
      time.title = `${chunk.timestamp} 지점으로 이동`;
      time.addEventListener('click',()=>{ const video=document.querySelector('video'); if (video) video.currentTime=chunk.seconds; });
      const text=document.createElement('p'); text.className='yts-text'; text.textContent=chunk.text;
      row.append(time,text);
      body.append(row);
    }
    const lang=$('.yts-language'); lang.replaceChildren();
    if (!result.languages.length) { const option=document.createElement('option'); option.textContent=result.language || '현재 자막'; option.value=''; lang.append(option); lang.disabled=true; }
    else { result.languages.forEach(item=>{const o=document.createElement('option');o.textContent=item.label;o.value=item.label;lang.append(o)}); lang.disabled=false; if(result.language)lang.value=result.language; }
    status(`자막 준비 완료 (${chunks.length}개 단락)`);
  }
  async function extract(language) {
    const id=vid(); if (!id) return;
    const request=++token; activeId=id; result=null; $('.yts-list').replaceChildren(); status('자막을 불러오는 중…');
    try {
      let data=await window.YTS.transcript.extract({videoId:id, language});
      if (!language && data.languages?.length) {
        const korean=data.languages.find(x=>/한국어|korean/i.test(x.label));
        if (korean && !korean.selected && data.language !== korean.label) data=await window.YTS.transcript.extract({videoId:id,language:korean.label});
      }
      if(request!==token || vid()!==id) return; result=data; render(); status('자막을 불러왔어요.');
      } catch(e) {
        if(request!==token || vid()!==id) return;
        const isShorts = location.pathname.startsWith('/shorts/');
        const isNoCaptions = !e.code || e.code === 'NO_TRANSCRIPT' || e.code === 'EMPTY_TRANSCRIPT' || e.code === 'TIMEOUT';
        if (isNoCaptions) {
          $('.yts-list').innerHTML = `
            <div class="yts-empty-state">
            <svg class="yts-empty-icon" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="22" y2="2"/><path d="M7 15h3m-3-4h1m8 4h1m-1-4h1"/></svg>
            <strong class="yts-empty-title">이 영상에는 등록된 자막(CC)이 없어요</strong>
            <p class="yts-empty-desc">${isShorts ? '크리에이터가 별도 자막을 등록하지 않았거나, 화면에 글자를 직접 합성(하드섭)한 쇼츠 영상이에요.' : '이 영상에는 YouTube 자막 트랙이 등록되어 있지 않아요.'}</p>
            ${isShorts ? `<a class="yts-switch-cta-btn" href="/watch?v=${id}">🎬 일반 동영상으로 전환해서 자막·요약 보기 ↗</a>` : ''}
            </div>
          `;
          status('이 영상에는 등록된 자막이 없어요.');
        } else {
          status(e.message || '자막을 불러오지 못했어요.');
        }
      }
   }
   function create() {
     root=document.createElement('section'); root.className='yts-widget'; root.setAttribute('aria-label','YouTube 자막 요약');
     root.innerHTML=`
       <div class="yts-header">
         <div class="yts-brand">
           <span class="yts-logo">${ICONS.logo}</span>
           <strong class="yts-title">yt-sum</strong>
         </div>
         <div class="yts-head-actions">
           <button class="yts-icon-btn yts-ai-trigger" data-tooltip-pos="bottom" data-tooltip="AI 요약 패널 열기 (프롬프트 선택 및 즉시 전송)" aria-label="AI 요약">${ICONS.sparkles}</button>
           <button class="yts-icon-btn yts-close" data-tooltip-pos="bottom" data-tooltip-align="right" data-tooltip="패널 닫기" aria-label="패널 닫기">${ICONS.close}</button>
         </div>
       </div>
       <div class="yts-tabbar">
         <button class="yts-tab active" data-tab="transcript" data-tooltip-pos="bottom" data-tooltip="영상 타임스탬프 자막 보기">${ICONS.captions} 자막</button>
         <button class="yts-tab" data-tab="summary" data-tooltip-pos="bottom" data-tooltip="원클릭 AI 요약 프롬프트 실행">${ICONS.summary} AI 요약</button>
       </div>
       <div class="yts-ai-panel" hidden>
         <div class="yts-ai-box">
           <label class="yts-ai-label">요약 프롬프트 선택</label>
           <select id="yts-presets" class="yts-presets"></select>
           <div class="yts-ai-buttons">
             <button class="yts-ai-btn" data-ai="gemini" data-tooltip="Gemini 웹으로 자막과 프롬프트 자동 전송">${ICONS.gemini} Gemini</button>
             <button class="yts-ai-btn" data-ai="chatgpt" data-tooltip="ChatGPT 웹으로 자막과 프롬프트 자동 전송">${ICONS.chatgpt} ChatGPT</button>
             <button class="yts-ai-btn" data-ai="claude" data-tooltip="Claude 웹으로 자막과 프롬프트 자동 전송">${ICONS.claude} Claude</button>
           </div>
         </div>
       </div>
       <div class="yts-toolbar">
         <div class="yts-lang-pill" data-tooltip-pos="bottom" data-tooltip="자막 언어 선택">
           <span class="yts-lang-icon">${ICONS.lang}</span>
           <select class="yts-language" aria-label="자막 언어"></select>
         </div>
         <div class="yts-tool-actions">
           <button class="yts-icon-btn yts-sync" data-tooltip-pos="bottom" data-tooltip="현재 재생 위치로 자막 자동 스크롤" aria-label="현재 재생 싱크">${ICONS.sync}</button>
           <button class="yts-icon-btn yts-copy" data-tooltip-pos="bottom" data-tooltip="전체 자막 복사 (영상 제목, URL, 타임스탬프 포함)" aria-label="전체 복사">${ICONS.copy}</button>
           <button class="yts-icon-btn yts-download" data-tooltip-pos="bottom" data-tooltip-align="right" data-tooltip="시간 포함 자막 TXT 파일 다운로드" aria-label="TXT 저장">${ICONS.download}</button>
         </div>
       </div>
       <div class="yts-status" role="status"></div>
       <div class="yts-list"></div>
       <div class="yts-footer">
         <span class="yts-foot-note">Made with 💜 for YouTube</span>
         <button class="yts-settings-btn" data-tooltip="프롬프트 템플릿 커스텀 설정 열기" aria-label="프롬프트 설정">${ICONS.settings} 설정</button>
       </div>
     `;
    const close = () => {
      root.setAttribute('hidden', '');
      if (launcher) launcher.setAttribute('aria-expanded', 'false');
    };
    $('.yts-close').onclick = close;
    const tabs = root.querySelectorAll('.yts-tab');
    tabs.forEach(t => t.onclick = () => {
      tabs.forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      const isSummary = t.dataset.tab === 'summary';
      if (isSummary) $('.yts-ai-panel').removeAttribute('hidden');
      else $('.yts-ai-panel').setAttribute('hidden', '');
    });
    $('.yts-ai-trigger').onclick = () => {
      const summaryTab = root.querySelector('.yts-tab[data-tab="summary"]');
      if (summaryTab) summaryTab.click();
    };
    $('.yts-settings-btn').onclick = () => chrome.runtime.sendMessage({type:'openOptions'});
    $('.yts-language').onchange = e => extract(e.target.value);
    $('.yts-copy').onclick = () => result && copy(exportText(true));
    $('.yts-download').onclick = () => result && download(exportText(true),'-시간포함');
    $('.yts-sync').onclick = () => {
      const video = document.querySelector('video');
      if (!video) return;
      const curTime = video.currentTime;
      const rows = Array.from(root.querySelectorAll('.yts-row'));
      if (!rows.length) return;
      let closest = rows[0];
      let minDiff = Infinity;
      for (const row of rows) {
        const sec = Number(row.dataset.seconds || 0);
        const diff = Math.abs(curTime - sec);
        if (diff < minDiff) { minDiff = diff; closest = row; }
      }
      rows.forEach(r => r.classList.remove('active'));
      closest.classList.add('active');
      closest.scrollIntoView({ behavior: 'smooth', block: 'center' });
      status(`${closest.querySelector('.yts-time')?.textContent || ''} 구간으로 동기화했어요.`);
    };
    root.querySelectorAll('[data-ai]').forEach(b=>b.onclick=async()=>{
      if (!result) {status('자막을 먼저 불러와 주세요.'); return;}
      const prompt=presets[Number($('.yts-presets').value)]?.text || '';
      const payload=`${prompt}\n\n${exportText(true)}`;
      try { await navigator.clipboard.writeText(payload); status('AI 입력창을 여는 중이에요.'); const reply = await chrome.runtime.sendMessage({type:'openAI',provider:b.dataset.ai,payload}); status(reply?.ok ? 'AI 입력창에 자막과 프롬프트를 넣었어요.' : (reply?.error || '자동 입력에 실패했어요. 복사한 내용을 붙여넣어 주세요.')); }
      catch (_) {status('자막을 복사하지 못했어요. 다시 시도해 주세요.');}
    });
    loadPresets();
  }
  function makeDraggable(wrap, onClick) {
    let startX = 0, startY = 0, initX = 0, initY = 0, isDragging = false;
    try {
      const saved = JSON.parse(localStorage.getItem('yts_fab_coords') || 'null');
      if (saved && typeof saved.x === 'number' && typeof saved.y === 'number') {
        const maxX = Math.max(10, window.innerWidth - 65);
        const maxY = Math.max(10, window.innerHeight - 65);
        wrap.style.left = Math.min(maxX, Math.max(10, saved.x)) + 'px';
        wrap.style.top = Math.min(maxY, Math.max(60, saved.y)) + 'px';
        wrap.style.right = 'auto';
        wrap.style.bottom = 'auto';
      }
    } catch (_) {}
    function onPointerDown(e) {
      if (e.target.closest('.yts-fab-close')) return;
      isDragging = false;
      startX = e.clientX;
      startY = e.clientY;
      const rect = wrap.getBoundingClientRect();
      initX = rect.left;
      initY = rect.top;
      wrap.setPointerCapture(e.pointerId);
      wrap.style.cursor = 'grabbing';
      wrap.addEventListener('pointermove', onPointerMove);
      wrap.addEventListener('pointerup', onPointerUp);
      wrap.addEventListener('pointercancel', onPointerUp);
    }
    function onPointerMove(e) {
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      if (!isDragging && Math.hypot(dx, dy) > 5) isDragging = true;
      if (isDragging) {
        const maxX = Math.max(10, window.innerWidth - 65);
        const maxY = Math.max(10, window.innerHeight - 65);
        wrap.style.left = Math.min(maxX, Math.max(10, initX + dx)) + 'px';
        wrap.style.top = Math.min(maxY, Math.max(60, initY + dy)) + 'px';
        wrap.style.right = 'auto';
        wrap.style.bottom = 'auto';
      }
    }
    function onPointerUp(e) {
      wrap.removeEventListener('pointermove', onPointerMove);
      wrap.removeEventListener('pointerup', onPointerUp);
      wrap.removeEventListener('pointercancel', onPointerUp);
      try { wrap.releasePointerCapture(e.pointerId); } catch (_) {}
      wrap.style.cursor = '';
      if (isDragging) {
        const rect = wrap.getBoundingClientRect();
        try { localStorage.setItem('yts_fab_coords', JSON.stringify({ x: Math.round(rect.left), y: Math.round(rect.top) })); } catch (_) {}
      } else {
        onClick();
      }
    }
    wrap.addEventListener('pointerdown', onPointerDown);
  }
  function mount() {
    const id = vid();
    if (!id) {
      if (root) root.remove();
      if (launcher) launcher.remove();
      root = null; launcher = null; activeId = null; token++;
      return;
    }
    const isShorts = location.pathname.startsWith('/shorts/');
    const rail = isShorts ? document.body : (document.querySelector('#secondary-inner') || document.querySelector('#secondary'));
    if (!rail) return;
    if (!root || !root.isConnected) {
      create();
     if (isShorts) root.classList.add('yts-shorts-widget');
     if (isShorts) {
       root.style.setProperty('top', '76px', 'important');
       root.style.setProperty('right', '24px', 'important');
       root.style.setProperty('height', 'min(740px, calc(100vh - 96px))', 'important');
     }
      root.hidden = true;
      document.body.append(root);
       launcher = document.createElement('div');
       launcher.className = 'yts-fab-wrap';
       launcher.id = 'yts-fab-wrap';
       launcher.innerHTML = `
         <button class="yts-fab-btn" type="button" aria-label="yt-sum 자막 & AI 요약" data-tooltip="yt-sum 자막 요약 (드래그하여 이동)">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
             <rect width="20" height="14" x="2" y="5" rx="3"/>
             <path d="M7 15h4M15 15h2M7 11h2M13 11h4"/>
           </svg>
           <span class="yts-fab-dot"></span>
         </button>
         <button class="yts-fab-close" type="button" title="버튼 숨기기" aria-label="숨기기">✕</button>
       `;
       makeDraggable(launcher, () => {
         if (root.hasAttribute('hidden')) {
           root.removeAttribute('hidden');
           if (!result) extract();
         } else {
           root.setAttribute('hidden', '');
         }
       });
       const hideBtn = launcher.querySelector('.yts-fab-close');
       if (hideBtn) {
        const hideAction = (e) => {
           e.stopPropagation();
          e.preventDefault();
          launcher.classList.add('hidden');
          launcher.style.setProperty('display', 'none', 'important');
          try { sessionStorage.setItem('yts_fab_hidden', 'true'); } catch (_) {}
         };
        hideBtn.addEventListener('pointerdown', (e) => e.stopPropagation());
        hideBtn.addEventListener('click', hideAction);
       }
      if (sessionStorage.getItem('yts_fab_hidden') === 'true') {
        launcher.classList.add('hidden');
        launcher.style.setProperty('display', 'none', 'important');
      }
       document.body.appendChild(launcher);
       activeId = id;
     } else if (launcher && !launcher.isConnected) {
       document.body.appendChild(launcher);
     }
     if (id !== activeId) {
       activeId = id;
       result = null;
       if (root && !root.hasAttribute('hidden')) extract();
     }
  }
  chrome.storage.onChanged.addListener((changes,area)=>{if(area==='sync' && changes.presets)loadPresets();});
  chrome.runtime.onMessage.addListener(msg => {
    if (msg?.type === 'togglePanel') {
      try { sessionStorage.removeItem('yts_fab_hidden'); } catch (_) {}
      if (launcher) {
        launcher.classList.remove('hidden');
        launcher.style.removeProperty('display');
      }
      if (root) {
        if (root.hasAttribute('hidden')) {
          root.removeAttribute('hidden');
          if (!result) extract();
        } else {
          root.setAttribute('hidden', '');
        }
      }
    }
  });
  let lastMonitoredId = null;
  function trackNavigation() {
    const currentId = vid();
    if (currentId && currentId !== lastMonitoredId) {
      lastMonitoredId = currentId;
      mount();
      if (root && !root.hidden) {
        extract();
      }
    }
  }
  window.addEventListener('scroll', trackNavigation, { passive: true });
  document.addEventListener('yt-page-data-updated', trackNavigation);
  document.addEventListener('yt-navigate-finish', trackNavigation);
  setInterval(trackNavigation, 500);
  mount();
})();

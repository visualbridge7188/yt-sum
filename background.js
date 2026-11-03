"use strict";

const AI_TARGETS = {
  gemini: { url: "https://gemini.google.com/app", origin: "https://gemini.google.com" },
  chatgpt: { url: "https://chatgpt.com/", origin: "https://chatgpt.com" },
  claude: { url: "https://claude.ai/new", origin: "https://claude.ai" },
};
const pending = new Map();
const claiming = new Set();
const keyFor = (id) => `ai-fill:${id}`;

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (!msg || typeof msg !== "object") return;
  if (msg.type === "openOptions") { chrome.runtime.openOptionsPage(); return; }
  if (msg.type === "openTab" && typeof msg.url === "string" && /^https:\/\//.test(msg.url)) {
    chrome.tabs.create({ url: msg.url }); return;
  }
  if (msg.type === "openAI") {
    const target = AI_TARGETS[msg.provider];
    if (!target || typeof msg.payload !== "string" || !msg.payload.trim()) {
      sendResponse({ ok: false, error: "AI 서비스 또는 입력 내용이 올바르지 않아요." }); return;
    }
    (async () => {
      let tab;
      try {
        tab = await chrome.tabs.create({ url: target.url });
        if (!tab.id) throw new Error("AI 탭을 열지 못했어요.");
        const timeout = setTimeout(() => finish(tab.id, { ok: false, error: "AI 입력창을 찾지 못했어요. 로그인 상태를 확인하고 다시 시도해 주세요." }), 45000);
        pending.set(tab.id, { sendResponse, timeout });
        await chrome.storage.session.set({ [keyFor(tab.id)]: { provider: msg.provider, payload: msg.payload, createdAt: Date.now(), claimed: false } });
      } catch (error) {
        const result = { ok: false, error: error.message || "AI 탭을 열지 못했어요." };
        if (tab?.id && pending.has(tab.id)) finish(tab.id, result);
        else sendResponse(result);
      }
    })();
    return true;
  }
  if (msg.type === "aiFillClaim" && sender.tab?.id && sender.frameId === 0) {
    const id = sender.tab.id;
    if (claiming.has(id)) { sendResponse({ ok: false }); return; }
    claiming.add(id);
    (async () => {
      const key = keyFor(id);
      const data = (await chrome.storage.session.get(key))[key];
      const target = data && AI_TARGETS[data.provider];
      if (!data || !target || Date.now() - data.createdAt > 45000 || new URL(sender.url).origin !== target.origin || data.claimed) {
        sendResponse({ ok: false }); return;
      }
      // Mark before replying so reloads and repeated handshakes cannot reuse the payload.
      data.claimed = true;
      await chrome.storage.session.set({ [key]: data });
      sendResponse({ ok: true, provider: data.provider, payload: data.payload });
    })().catch(() => sendResponse({ ok: false })).finally(() => claiming.delete(id));
    return true;
  }
  if (msg.type === "aiFillResult" && sender.tab?.id && sender.frameId === 0) {
    const id = sender.tab.id;
    (async () => {
      const data = (await chrome.storage.session.get(keyFor(id)))[keyFor(id)];
      if (!data || !data.claimed || new URL(sender.url).origin !== AI_TARGETS[data.provider]?.origin) return;
      finish(id, msg.ok ? { ok: true } : { ok: false, error: msg.error || "AI 입력창에 내용을 넣지 못했어요." });
    })().catch(() => {});
  }
});

function finish(id, result) {
  const request = pending.get(id);
  if (request) {
    clearTimeout(request.timeout);
    pending.delete(id);
    request.sendResponse(result);
  }
  chrome.storage.session.remove(keyFor(id)).catch(() => {});
}
chrome.tabs.onRemoved.addListener((id) => finish(id, { ok: false, error: "AI 탭이 닫혔어요." }));
chrome.action.onClicked.addListener((tab) => {
  if (tab && tab.id && tab.url && /youtube\.com\/watch/.test(tab.url)) {
    chrome.tabs.sendMessage(tab.id, { type: "togglePanel" }).catch(() => {});
  }
});

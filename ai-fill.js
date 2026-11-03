"use strict";

(async () => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const started = Date.now();
  let task;
  while (Date.now() - started < 10000) {
    try { task = await chrome.runtime.sendMessage({ type: "aiFillClaim" }); } catch { return; }
    if (task?.ok) break;
    await sleep(300);
  }
  if (!task?.ok) return;

  const selectors = {
    gemini: ['rich-textarea [contenteditable="true"]', '[contenteditable="true"][role="textbox"]'],
    chatgpt: ['#prompt-textarea', '[contenteditable="true"][data-id="root"]', '[contenteditable="true"][role="textbox"]'],
    claude: ['[contenteditable="true"][data-testid="chat-input"]', 'div.ProseMirror[contenteditable="true"]'],
  };
  try {
    let input;
    while (Date.now() - started < 40000) {
      input = (selectors[task.provider] || []).map((s) => document.querySelector(s)).find((el) => el && el.getClientRects().length && !el.closest('[inert]'));
      if (input) break;
      await sleep(300);
    }
    if (!input) throw new Error("AI 입력창을 찾지 못했어요. 로그인 상태를 확인해 주세요.");
    const existing = "value" in input ? input.value : input.innerText;
    if (existing && existing.trim()) throw new Error("기존 입력 내용을 보존했어요. 복사한 내용을 직접 붙여넣어 주세요.");
    input.focus();
    if (input instanceof HTMLTextAreaElement || input instanceof HTMLInputElement) {
      const prototype = input instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
      Object.getOwnPropertyDescriptor(prototype, "value").set.call(input, task.payload);
      input.dispatchEvent(new Event("input", { bubbles: true }));
    } else {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(input);
      selection.removeAllRanges();
      selection.addRange(range);
      if (!document.execCommand("insertText", false, task.payload)) throw new Error("AI 입력창에 텍스트를 넣지 못했어요.");
    }
    const value = "value" in input ? input.value : input.innerText;
    const normalize = (text) => text.replace(/\s+/g, " ").trim();
    if (normalize(value) !== normalize(task.payload)) throw new Error("전체 내용이 입력되지 않았어요. 복사한 내용을 직접 붙여넣어 주세요.");
    await chrome.runtime.sendMessage({ type: "aiFillResult", ok: true });
  } catch (error) {
    const notice = document.createElement('div');
    notice.setAttribute('role', 'alert');
    notice.textContent = 'yt-sum: 자막 전체가 입력되지 않았어요. 클립보드의 내용을 확인해 직접 붙여넣거나 TXT 파일을 첨부해 주세요.';
    Object.assign(notice.style, { position:'fixed', top:'12px', right:'12px', zIndex:'2147483647', maxWidth:'360px', padding:'12px 16px', borderRadius:'8px', background:'#fff4d6', color:'#4a3100', boxShadow:'0 2px 12px #0004', fontSize:'14px' });
    document.body.appendChild(notice);
    await chrome.runtime.sendMessage({ type: "aiFillResult", ok: false, error: error.message }).catch(() => {});
  }
})();

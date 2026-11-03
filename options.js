 "use strict";
 
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

const rows = document.getElementById("rows");
const message = document.getElementById("msg");
let nextId = 0;

function notify(text, isError = false) {
  message.textContent = text;
  message.classList.toggle("error", isError);
}

function updateNumbers() {
  rows.querySelectorAll(".preset").forEach((row, index) => {
    row.querySelector(".number").textContent = `프롬프트 ${index + 1}`;
  });
}

function addRow(preset = { name: "", text: "" }) {
  const id = ++nextId;
  const row = document.createElement("section");
  row.className = "preset";
  const head = document.createElement("div");
  head.className = "preset-head";
  const number = document.createElement("span");
  number.className = "number";
  const remove = document.createElement("button");
  remove.type = "button";
  remove.className = "remove";
  remove.textContent = "삭제";
  remove.addEventListener("click", () => {
    row.remove();
    updateNumbers();
    notify("삭제했어요. 저장하면 적용돼요.");
  });
  head.append(number, remove);
  const nameLabel = document.createElement("label");
  nameLabel.htmlFor = `name-${id}`;
  nameLabel.textContent = "이름";
  const name = document.createElement("input");
  name.id = `name-${id}`;
  name.className = "pname";
  name.placeholder = "예: 핵심 요약";
  name.value = typeof preset.name === "string" ? preset.name : "";
  const textLabel = document.createElement("label");
  textLabel.htmlFor = `text-${id}`;
  textLabel.textContent = "프롬프트";
  const text = document.createElement("textarea");
  text.id = `text-${id}`;
  text.className = "ptext";
  text.placeholder = "AI에게 요청할 내용을 입력하세요.";
  text.value = typeof preset.text === "string" ? preset.text : "";
  row.append(head, nameLabel, name, textLabel, text);
  rows.appendChild(row);
  updateNumbers();
  return name;
}

function render(presets) {
  rows.replaceChildren();
  presets.forEach((preset) => addRow(preset || {}));
}

async function load() {
  try {
    const stored = await chrome.storage.sync.get({ presets: DEFAULTS });
    const isOld = stored.presets?.some(p => p.name === "표준 요약" || p.name === "노션 올인원 교안 요약");
    const active = (isOld || !Array.isArray(stored.presets) || !stored.presets.length) ? DEFAULTS : stored.presets;
    if (isOld) await chrome.storage.sync.set({ presets: DEFAULTS });
    render(active);
  } catch (error) {
    notify(`설정을 불러오지 못했어요: ${error.message}`, true);
    document.getElementById("save").disabled = true;
  }
}

document.getElementById("add").addEventListener("click", () => {
  addRow().focus();
  notify("추가한 내용을 입력하고 저장해 주세요.");
});

rows.addEventListener("input", () => notify("변경사항을 저장해 주세요."));

document.getElementById("save").addEventListener("click", async () => {
  const entries = Array.from(rows.querySelectorAll(".preset"));
  if (!entries.length) {
    notify("프롬프트를 하나 이상 추가해 주세요.", true);
    return;
  }
  const presets = [];
  for (const row of entries) {
    const name = row.querySelector(".pname");
    const text = row.querySelector(".ptext");
    if (!name.value.trim() || !text.value.trim()) {
      notify("모든 프롬프트의 이름과 내용을 입력해 주세요.", true);
      (name.value.trim() ? text : name).focus();
      return;
    }
    presets.push({ name: name.value.trim(), text: text.value });
  }
  try {
    await chrome.storage.sync.set({ presets });
    notify("저장했어요. YouTube 탭을 새로고침하면 적용돼요.");
  } catch (error) {
    notify(`저장하지 못했어요: ${error.message}`, true);
  }
});

document.getElementById("reset").addEventListener("click", () => {
  render(DEFAULTS);
  notify("기본값을 불러왔어요. 저장하면 적용돼요.");
});

const reloadBtn = document.getElementById("reload-ext");
if (reloadBtn) {
  reloadBtn.addEventListener("click", () => {
    notify("확장 프로그램을 새로고침하고 있어요...");
    setTimeout(() => chrome.runtime.reload(), 200);
  });
}

load();

(() => {
  const root = document.querySelector("[data-finder-app]");
  const DATA = window.HUE_TEA_FINDER_DATA;
  if (!root || !DATA) return;

  const views = Object.fromEntries([...root.querySelectorAll("[data-finder-view]")].map((view) => [view.dataset.finderView, view]));
  const answerState = {};
  let recipientName = "";
  let resultKey = "";
  let shareBlob = null;
  let shareObjectUrl = "";
  let shareBusy = false;

  const stepLabel = root.querySelector("[data-finder-step]");
  const categoryLabel = root.querySelector("[data-finder-category]");
  const questionTitle = root.querySelector("[data-finder-question]");
  const optionsWrap = root.querySelector("[data-finder-options]");
  const progress = root.querySelector("[data-finder-progress]");
  const progressWrap = root.querySelector("[role='progressbar']");
  const gateForm = root.querySelector("[data-finder-gate-form]");
  const formStatus = root.querySelector("[data-finder-form-status]");
  const shareStatus = root.querySelector("[data-share-status]");
  const sharePreview = root.querySelector("[data-share-preview]");

  const cloneAnswers = () => ({ ...answerState });

  function getOption(question, optionId) {
    return question.options.find((option) => option.id === optionId);
  }

  function scoreAnswers(answers) {
    const totals = Object.fromEntries(DATA.teaOrder.map((key) => [key, 0]));
    const taste = Object.fromEntries(DATA.teaOrder.map((key) => [key, 0]));
    const mood = Object.fromEntries(DATA.teaOrder.map((key) => [key, 0]));

    DATA.questions.forEach((question) => {
      const option = getOption(question, answers[question.id]);
      if (!option) return;
      Object.entries(option.scores).forEach(([key, value]) => {
        totals[key] += value;
        if (question.id === "taste") taste[key] += value;
        if (question.id === "mood") mood[key] += value;
      });
    });

    const ranking = [...DATA.teaOrder].sort((a, b) => (
      totals[b] - totals[a] ||
      taste[b] - taste[a] ||
      mood[b] - mood[a] ||
      DATA.teaOrder.indexOf(a) - DATA.teaOrder.indexOf(b)
    ));
    return { key: ranking[0], totals, taste, mood, ranking };
  }

  function showView(name) {
    Object.entries(views).forEach(([key, view]) => {
      const active = key === name;
      view.hidden = !active;
      view.classList.toggle("is-active", active);
    });
    root.dataset.currentView = name;
  }

  function setHistory(view, step, replace = false) {
    const payload = { hueFinder: true, view, step, answers: cloneAnswers(), resultKey, recipientName };
    const method = replace ? "replaceState" : "pushState";
    history[method](payload, "", window.location.href);
  }

  function restoreAnswers(answers = {}) {
    Object.keys(answerState).forEach((key) => delete answerState[key]);
    Object.assign(answerState, answers);
  }

  function renderQuestion(step, focus = true) {
    const question = DATA.questions[step];
    if (!question) return;
    showView("question");
    stepLabel.textContent = String(step + 1).padStart(2, "0");
    categoryLabel.textContent = question.category;
    questionTitle.textContent = question.prompt;
    progress.style.width = `${((step + 1) / DATA.questions.length) * 100}%`;
    progressWrap.setAttribute("aria-valuenow", String(step + 1));
    optionsWrap.textContent = "";

    question.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "finder-option";
      button.dataset.optionId = option.id;
      button.setAttribute("aria-pressed", String(answerState[question.id] === option.id));
      button.innerHTML = `<span>${String(index + 1).padStart(2, "0")}</span><strong>${option.label}</strong><small>${option.note}</small><i aria-hidden="true">↗</i>`;
      button.addEventListener("click", () => {
        answerState[question.id] = option.id;
        if (step < DATA.questions.length - 1) {
          renderQuestion(step + 1);
          setHistory("question", step + 1);
        } else {
          showView("gate");
          setHistory("gate", DATA.questions.length);
          requestAnimationFrame(() => views.gate.querySelector("h2").focus());
        }
      });
      optionsWrap.append(button);
    });

    if (focus) requestAnimationFrame(() => questionTitle.focus());
  }

  function buildReason() {
    const mood = getOption(DATA.questions[0], answerState.mood);
    const taste = getOption(DATA.questions[3], answerState.taste);
    const moment = getOption(DATA.questions[4], answerState.moment);
    const tea = DATA.teas[resultKey];
    return `오늘은 ${mood.reason}이 답에서 먼저 보였어요. ${taste.reason}에 끌렸고, ${moment.reason}을 남기고 싶다는 선택이 ${tea.location}의 ${tea.name} 한 잔으로 자연스럽게 이어졌습니다.`;
  }

  function setAllText(selector, value) {
    root.querySelectorAll(selector).forEach((element) => { element.textContent = value; });
  }

  function revokeShareUrl() {
    if (shareObjectUrl) URL.revokeObjectURL(shareObjectUrl);
    shareObjectUrl = "";
    shareBlob = null;
    sharePreview.hidden = true;
    sharePreview.removeAttribute("src");
  }

  function renderResult(key, focus = true) {
    const tea = DATA.teas[key];
    if (!tea) return;
    resultKey = key;
    revokeShareUrl();
    showView("result");
    const card = root.querySelector("[data-result-card]");
    card.style.setProperty("--result-bg", tea.color);
    card.style.setProperty("--result-ink", tea.ink);
    setAllText("[data-result-location]", tea.location);
    setAllText("[data-result-name]", recipientName || "오늘의 당신");
    setAllText("[data-result-type]", tea.type);
    setAllText("[data-result-line]", tea.line);
    setAllText("[data-result-tea]", tea.name);
    setAllText("[data-result-letter]", tea.letter);
    setAllText("[data-result-reason]", buildReason());
    setAllText("[data-result-action]", tea.action);
    setAllText("[data-result-flavor]", tea.flavor);
    setAllText("[data-result-caffeine]", tea.caffeine);
    setAllText("[data-result-brew]", tea.brew);

    const image = root.querySelector("[data-result-image]");
    image.src = tea.image;
    image.alt = `${tea.location} ${tea.name} 패키지`;
    root.querySelector("[data-result-detail]").href = tea.detailUrl;
    const keywordList = root.querySelector("[data-result-keywords]");
    keywordList.innerHTML = tea.keywords.map((keyword) => `<li># ${keyword}</li>`).join("");
    shareStatus.textContent = "이미지를 저장해서 인스타그램 스토리에 올려보세요.";
    if (focus) requestAnimationFrame(() => root.querySelector("[data-result-type]").focus());
  }

  function startFinder() {
    restoreAnswers();
    recipientName = "";
    resultKey = "";
    gateForm.reset();
    formStatus.textContent = "";
    renderQuestion(0);
    setHistory("question", 0);
  }

  root.querySelector("[data-finder-start]").addEventListener("click", startFinder);
  document.querySelectorAll("[data-finder-start-link]").forEach((link) => link.addEventListener("click", (event) => {
    event.preventDefault();
    root.scrollIntoView({ behavior: "smooth", block: "start" });
    startFinder();
  }));

  root.querySelectorAll("[data-finder-back]").forEach((button) => button.addEventListener("click", () => history.back()));
  root.querySelector("[data-finder-restart]").addEventListener("click", () => {
    restoreAnswers();
    recipientName = "";
    resultKey = "";
    gateForm.reset();
    revokeShareUrl();
    showView("intro");
    setHistory("intro", -1);
    root.scrollIntoView({ behavior: "smooth", block: "start" });
    requestAnimationFrame(() => root.querySelector("[data-finder-start]").focus());
  });

  gateForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const nameField = gateForm.elements.name;
    const emailField = gateForm.elements.email;
    nameField.value = nameField.value.trim();
    emailField.value = emailField.value.trim();
    if (!gateForm.checkValidity() || !nameField.value) {
      formStatus.textContent = "이름과 올바른 이메일을 입력해 주세요.";
      gateForm.reportValidity();
      return;
    }
    recipientName = nameField.value;
    resultKey = scoreAnswers(answerState).key;
    gateForm.reset();
    formStatus.textContent = "";
    renderResult(resultKey);
    setHistory("result", DATA.questions.length + 1);
  });

  window.addEventListener("popstate", (event) => {
    const state = event.state;
    if (!state?.hueFinder) {
      restoreAnswers();
      showView("intro");
      return;
    }
    restoreAnswers(state.answers);
    recipientName = state.recipientName || "";
    resultKey = state.resultKey || "";
    if (state.view === "question") renderQuestion(Math.max(0, state.step), false);
    else if (state.view === "gate") {
      showView("gate");
      requestAnimationFrame(() => views.gate.querySelector("h2").focus());
    } else if (state.view === "result" && resultKey) renderResult(resultKey, false);
    else showView("intro");
  });

  function loadImage(src) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = src;
    });
  }

  function wrapText(context, text, x, y, maxWidth, lineHeight, maxLines = 20) {
    const characters = [...text];
    const lines = [];
    let line = "";
    characters.forEach((character) => {
      const test = line + character;
      if (context.measureText(test).width > maxWidth && line) {
        lines.push(line);
        line = character;
      } else line = test;
    });
    if (line) lines.push(line);
    lines.slice(0, maxLines).forEach((item, index) => context.fillText(item, x, y + index * lineHeight));
    return y + Math.min(lines.length, maxLines) * lineHeight;
  }

  function roundedRect(context, x, y, width, height, radius) {
    const r = Math.min(radius, width / 2, height / 2);
    context.beginPath();
    context.moveTo(x + r, y);
    context.arcTo(x + width, y, x + width, y + height, r);
    context.arcTo(x + width, y + height, x, y + height, r);
    context.arcTo(x, y + height, x, y, r);
    context.arcTo(x, y, x + width, y, r);
    context.closePath();
  }

  function isConfirmedServiceUrl(url) {
    return /^https?:$/.test(url.protocol) && !["localhost", "127.0.0.1", "0.0.0.0"].includes(url.hostname);
  }

  function getStartUrl() {
    const url = new URL("tea-finder.html", window.location.href);
    url.search = "";
    url.hash = "";
    return url;
  }

  async function createShareCard() {
    if (shareBlob) return shareBlob;
    const tea = DATA.teas[resultKey];
    if (!tea) throw new Error("결과가 없습니다.");
    const canvas = document.createElement("canvas");
    canvas.width = 1080;
    canvas.height = 1920;
    const context = canvas.getContext("2d");
    const [productImage, logo] = await Promise.all([
      loadImage(tea.image),
      loadImage(tea.ink === "#eee9dc" || tea.ink === "#f4e7d4" ? "assets/images/hue-logo-white.png" : "assets/images/hue-logo-dark.png")
    ]);

    context.fillStyle = tea.color;
    context.fillRect(0, 0, canvas.width, canvas.height);
    const gradient = context.createRadialGradient(780, 1180, 60, 780, 1180, 900);
    gradient.addColorStop(0, "rgba(255,255,255,.28)");
    gradient.addColorStop(1, "rgba(255,255,255,0)");
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.globalAlpha = 0.98;
    const logoRatio = logo.naturalWidth / logo.naturalHeight;
    context.drawImage(logo, 74, 68, 176, 176 / logoRatio);
    context.globalAlpha = 1;
    context.fillStyle = tea.ink;
    context.textBaseline = "top";
    context.font = "500 22px Arial, sans-serif";
    context.letterSpacing = "4px";
    context.fillText("TODAY'S HUE · " + tea.location.toUpperCase(), 76, 178);

    context.font = "400 78px Arial, Apple SD Gothic Neo, sans-serif";
    let y = wrapText(context, tea.type, 74, 250, 890, 92, 3);
    context.font = "400 33px Arial, Apple SD Gothic Neo, sans-serif";
    y = wrapText(context, tea.line, 76, y + 34, 850, 50, 3);

    let chipX = 76;
    context.font = "600 22px Arial, Apple SD Gothic Neo, sans-serif";
    tea.keywords.forEach((keyword) => {
      const width = context.measureText(keyword).width + 56;
      roundedRect(context, chipX, y + 36, width, 54, 27);
      context.strokeStyle = tea.ink;
      context.lineWidth = 1.5;
      context.stroke();
      context.fillText(keyword, chipX + 28, y + 51);
      chipX += width + 14;
    });

    const maxW = 760;
    const maxH = 930;
    const ratio = Math.min(maxW / productImage.naturalWidth, maxH / productImage.naturalHeight);
    const imageWidth = productImage.naturalWidth * ratio;
    const imageHeight = productImage.naturalHeight * ratio;
    context.save();
    context.shadowColor = "rgba(24,20,15,.22)";
    context.shadowBlur = 42;
    context.shadowOffsetY = 24;
    context.drawImage(productImage, (canvas.width - imageWidth) / 2, 790, imageWidth, imageHeight);
    context.restore();

    context.fillStyle = tea.ink;
    context.font = "500 26px Arial, sans-serif";
    context.fillText(tea.location.toUpperCase(), 76, 1690);
    context.font = "400 64px Arial, sans-serif";
    context.fillText(tea.name.toUpperCase(), 76, 1742);
    const startUrl = getStartUrl();
    if (isConfirmedServiceUrl(startUrl)) {
      context.font = "400 20px Arial, sans-serif";
      context.fillText(startUrl.href.replace(/^https?:\/\//, ""), 76, 1845);
    } else {
      context.font = "400 20px Arial, Apple SD Gothic Neo, sans-serif";
      context.fillText("HUE · 오늘의 차 찾기", 76, 1845);
    }

    shareBlob = await new Promise((resolve, reject) => canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error("이미지를 만들 수 없습니다.")), "image/png"));
    shareObjectUrl = URL.createObjectURL(shareBlob);
    sharePreview.src = shareObjectUrl;
    sharePreview.hidden = false;
    return shareBlob;
  }

  function setShareBusy(busy, message) {
    shareBusy = busy;
    root.classList.toggle("is-share-busy", busy);
    root.querySelectorAll("[data-result-share], [data-result-download]").forEach((button) => { button.disabled = busy; });
    if (message) shareStatus.textContent = message;
  }

  async function withShareCard(callback) {
    if (shareBusy) return;
    setShareBusy(true, "공유 카드를 만드는 중이에요…");
    try {
      const blob = await createShareCard();
      await callback(blob);
    } catch (error) {
      shareStatus.textContent = "카드를 만들지 못했어요. 잠시 후 다시 시도해 주세요.";
    } finally {
      setShareBusy(false);
    }
  }

  root.querySelector("[data-result-share]").addEventListener("click", () => withShareCard(async (blob) => {
    const tea = DATA.teas[resultKey];
    const file = new File([blob], `hue-${resultKey}-today.png`, { type: "image/png" });
    if (isConfirmedServiceUrl(getStartUrl()) && navigator.share && navigator.canShare?.({ files: [file] })) {
      try {
        await navigator.share({ files: [file], title: `오늘의 HUE · ${tea.name}`, text: "이미지를 저장해서 인스타그램 스토리에 올려보세요." });
        shareStatus.textContent = "공유 메뉴를 열었어요. 인스타그램 스토리에는 저장한 이미지를 직접 올려주세요.";
      } catch (error) {
        shareStatus.textContent = error.name === "AbortError" ? "공유가 취소되었어요. 이미지 저장이나 링크 복사를 이용할 수 있어요." : "기본 공유를 열지 못했어요. 이미지 저장이나 링크 복사를 이용해 주세요.";
      }
    } else {
      shareStatus.textContent = "이 브라우저에서는 파일 공유를 지원하지 않아요. 아래 이미지 저장과 링크 복사를 이용해 주세요.";
    }
  }));

  root.querySelector("[data-result-download]").addEventListener("click", () => withShareCard(async () => {
    const anchor = document.createElement("a");
    anchor.href = shareObjectUrl;
    anchor.download = `hue-${resultKey}-today.png`;
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    shareStatus.textContent = "9:16 결과 이미지를 저장했어요. 인스타그램 스토리에 직접 올려보세요.";
  }));

  root.querySelector("[data-result-copy]").addEventListener("click", async () => {
    const text = getStartUrl().href;
    try {
      await navigator.clipboard.writeText(text);
      shareStatus.textContent = "테스트 시작 링크를 복사했어요.";
    } catch (_) {
      const input = document.createElement("textarea");
      input.value = text;
      input.setAttribute("readonly", "");
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.append(input);
      input.select();
      document.execCommand("copy");
      input.remove();
      shareStatus.textContent = "테스트 시작 링크를 복사했어요.";
    }
  });

  function renderGuide() {
    const examples = document.querySelector("[data-finder-examples]");
    const table = document.querySelector("[data-finder-score-table]");
    if (!examples || !table) return;
    examples.innerHTML = DATA.examples.map((example, index) => {
      const answers = Object.fromEntries(DATA.questions.map((question, questionIndex) => [question.id, example.answers[questionIndex]]));
      const scored = scoreAnswers(answers);
      const tea = DATA.teas[example.tea];
      return `<article><span>${String(index + 1).padStart(2, "0")}</span><strong>${tea.type}</strong><p>${tea.location} · ${tea.name}</p><small>예시 총점 ${scored.totals[example.tea]}점</small></article>`;
    }).join("");

    const shortNames = { bukchon: "북촌", seochon: "서촌", seongsu: "성수", yeonnam: "연남", haebangchon: "해방촌" };
    const rows = DATA.questions.flatMap((question) => question.options.map((option) => `
      <tr><th scope="row"><span>${question.category}</span>${option.label}</th>${DATA.teaOrder.map((key) => `<td>${option.scores[key] || 0}</td>`).join("")}</tr>`)).join("");
    table.innerHTML = `<thead><tr><th>질문 · 선택지</th>${DATA.teaOrder.map((key) => `<th>${shortNames[key]}</th>`).join("")}</tr></thead><tbody>${rows}</tbody>`;
  }

  renderGuide();
  history.replaceState({ hueFinder: true, view: "intro", step: -1, answers: {}, resultKey: "", recipientName: "" }, "", window.location.href);
  window.HUE_FINDER_DEBUG = { data: DATA, scoreAnswers };
})();

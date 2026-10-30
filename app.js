const HUE_PRODUCTS = {
  bukchon: {
    location: "BUKCHON 8:00",
    locationKo: "북촌 8:00",
    name: "Earl Grey",
    flavor: "EARL GREY",
    kicker: "아침 햇살이 비치는 북촌의 골목.",
    kickerDisplay: "아침 햇살이 비치는\n북촌의 골목.",
    description: "홍차의 깊고 깔끔한 맛에 베르가못의 산뜻한 시트러스 향이 더해진 블렌드. 콘플라워의 은은한 꽃향이 어우러져 가볍고 상쾌하게 하루를 시작하기 좋습니다.",
    blend: "Black tea blend",
    ingredients: "블랙티, 베르가못 필, 콘플라워",
    hour: "북촌의 지붕 위로 아침 햇살이 번지는 8시. 하루의 시작을 맑게 여는 시간입니다.",
    notes: "홍차의 깊은 풍미, 베르가못의 산뜻한 시트러스 향, 콘플라워의 은은한 꽃향이 어우러진 깔끔한 맛.",
    quote: "“하루가 시작되기 전, 나를 위한 첫 번째 한 잔.”",
    moment: "assets/images/ingredient-moment-bukchon.webp",
    ingredientSlides: [
      { name: "블랙티", en: "BLACK TEA", copy: "또렷한 바디와 깊은 향으로 블렌드의 중심을 단정하게 잡습니다.", focus: "22% 72%" },
      { name: "베르가못 필", en: "BERGAMOT PEEL", copy: "맑은 시트러스 향이 첫 모금의 윤곽을 선명하게 밝혀줍니다.", focus: "50% 72%" },
      { name: "콘플라워", en: "CORNFLOWER", copy: "푸른 꽃잎이 블렌드에 고요한 색과 은은한 여운을 더합니다.", focus: "78% 72%" }
    ],
    pack: "assets/images/pack-bukchon.png",
    detail: "assets/images/detail-bukchon.jpg",
    ritual: "assets/images/ritual-bukchon.jpg",
    open: "assets/images/open-bukchon.webp",
    place: "assets/images/place-bukchon.jpg",
    bg: "#a8afb0",
    ink: "#17272e"
  },
  seochon: {
    location: "SEOCHON 11:00",
    locationKo: "서촌 11:00",
    name: "Pear White Tea",
    flavor: "PEAR WHITE TEA",
    kicker: "바쁜 오전, 잠시 쉬어가는 한 잔.",
    kickerDisplay: "바쁜 오전,\n잠시 쉬어가는 한 잔.",
    description: "화이트티의 은은한 풍미에 말린 배의 부드러운 단맛과 볶은 현미의 고소한 향을 더한 블렌드. 자극적이지 않고 담백한 맛으로 바쁜 오전에도 부담 없이 즐기기 좋습니다.",
    blend: "White tea blend",
    ingredients: "화이트티, 말린 배, 볶은 현미",
    hour: "오전 11시, 하루가 본격적으로 바빠지는 시간. 서촌의 조용한 골목에서 영감을 받아, 잠시 하던 일을 멈추고 차 한 잔을 즐길 수 있도록 만들었습니다.",
    notes: "화이트티의 섬세한 풍미, 말린 배의 은은한 단맛, 볶은 현미의 고소한 향이 어우러진 부드럽고 깔끔한 맛.",
    quote: "“바쁜 하루에도 잠깐의 쉼은 필요하니까.”",
    moment: "assets/images/ingredient-moment-seochon.webp",
    ingredientSlides: [
      { name: "화이트티", en: "WHITE TEA", copy: "섬세하고 투명한 차의 결이 서촌의 느린 오전을 닮았습니다.", focus: "22% 72%" },
      { name: "말린 배", en: "DRIED PEAR", copy: "말린 배의 둥근 단맛이 잔 안에서 부드럽고 길게 이어집니다.", focus: "50% 72%" },
      { name: "볶은 현미", en: "ROASTED BROWN RICE", copy: "담백하게 볶은 곡물 향이 편안하고 고소한 마무리를 만듭니다.", focus: "78% 72%" }
    ],
    pack: "assets/images/pack-seochon.png",
    detail: "assets/images/detail-seochon.jpg",
    ritual: "assets/images/ritual-seochon.jpg",
    open: "assets/images/open-seochon.webp",
    place: "assets/images/place-seochon.jpg",
    bg: "#ded9c8",
    ink: "#474638"
  },
  seongsu: {
    location: "SEONGSU 4:00",
    locationKo: "성수 4:00",
    name: "Roasted Cacao",
    flavor: "ROASTED CACAO",
    kicker: "오후 4시, 기분을 전환하는 한 잔",
    kickerDisplay: "오후 4시,\n기분을 전환하는 한 잔",
    description: "블랙티에 로스티드 카카오닙스의 깊고 고소한 풍미와 오렌지필의 산뜻한 향을 더한 블렌드. 커피처럼 진하고 쌉쌀한 맛을 즐기면서도 한결 가볍게 마실 수 있는 오후의 티입니다.",
    blend: "Black Tea Blend",
    ingredients: "블랙티, 로스티드 카카오닙스, 오렌지필",
    hour: "오후 4시, 집중력이 떨어지고 잠시 쉬어가고 싶은 시간. 성수의 활기찬 작업실과 거리에서 영감을 받아, 익숙한 커피 대신 새로운 맛으로 기분을 전환할 수 있는 블렌드를 만들었습니다.",
    notes: "블랙티의 진한 풍미, 카카오닙스의 고소하고 쌉쌀한 맛, 오렌지필의 상큼한 향이 어우러진 깔끔한 마무리.",
    quote: "“오후 4시, 잠깐의 기분 전환이 필요한 순간.”",
    moment: "assets/images/ingredient-moment-seongsu.webp",
    ingredientSlides: [
      { name: "블랙티", en: "BLACK TEA", copy: "힘 있는 차의 구조감이 오후의 흐트러진 리듬을 다시 세웁니다.", focus: "22% 72%" },
      { name: "로스티드 카카오", en: "ROASTED CACAO", copy: "구운 카카오의 깊고 따뜻한 향이 블렌드의 밀도를 높입니다.", focus: "50% 72%" },
      { name: "오렌지 필", en: "ORANGE PEEL", copy: "산뜻한 오렌지 끝향이 묵직한 풍미 사이에 가벼운 전환을 만듭니다.", focus: "78% 72%" }
    ],
    pack: "assets/images/pack-seongsu.png",
    detail: "assets/images/detail-seongsu.jpg",
    ritual: "assets/images/ritual-seongsu.jpg",
    open: "assets/images/open-seongsu.webp",
    place: "assets/images/place-seongsu.jpg",
    bg: "#8a4939",
    ink: "#f4e7d4"
  },
  yeonnam: {
    location: "YEONNAM 6:42",
    locationKo: "연남 6:42",
    name: "Rose Hibiscus",
    flavor: "ROSE HIBISCUS",
    kicker: "노을이 물드는 저녁 6시 42분, 바쁜 하루를 내려놓는 한 잔.",
    kickerDisplay: "노을이 물드는 저녁 6시 42분,\n바쁜 하루를 내려놓는 한 잔.",
    description: "히비스커스의 산뜻한 산미에 루이보스의 부드러운 풍미와 장미 꽃잎의 은은한 향을 더한 블렌드. 상큼하면서도 향긋한 맛으로 하루의 피로를 잠시 잊고 기분을 전환하기 좋습니다.",
    blend: "Herbal Infusion",
    ingredients: "히비스커스, 루이보스, 장미 꽃잎",
    hour: "오후 6시 42분, 퇴근길의 연남동 골목이 노을빛으로 물드는 시간. 분주했던 하루를 뒤로하고, 좋아하는 사람과 이야기를 나누거나 혼자만의 시간을 즐기기 좋은 저녁입니다.",
    notes: "히비스커스의 선명한 산미, 루이보스의 부드러운 풍미, 장미 꽃잎의 은은한 향이 어우러진 산뜻한 맛.",
    quote: "“노을이 지는 시간, 잠시 멈춰 하루를 돌아보는 한 잔.”",
    moment: "assets/images/ingredient-moment-yeonnam.webp",
    ingredientSlides: [
      { name: "히비스커스", en: "HIBISCUS", copy: "루비빛 색과 선명한 산미가 블렌드의 첫인상을 생기 있게 엽니다.", focus: "22% 72%" },
      { name: "루이보스", en: "ROOIBOS", copy: "매끄럽고 부드러운 바디가 꽃과 과실의 향을 편안하게 받쳐줍니다.", focus: "50% 72%" },
      { name: "장미 꽃잎", en: "ROSE PETAL", copy: "장미 꽃잎의 향긋한 여운이 해 질 무렵의 공기처럼 길게 남습니다.", focus: "78% 72%" }
    ],
    pack: "assets/images/pack-yeonnam.png",
    detail: "assets/images/detail-yeonnam.jpg",
    ritual: "assets/images/ritual-yeonnam.jpg",
    open: "assets/images/open-yeonnam.webp",
    place: "assets/images/place-yeonnam.jpg",
    bg: "#d18e78",
    ink: "#472d28"
  },
  haebangchon: {
    location: "HAEBANGCHON 0:00",
    locationKo: "해방촌 0:00",
    name: "Blue Hour Chamomile",
    flavor: "BLUE HOUR CHAMOMILE",
    kicker: "잠들기 전, 편안한 밤을 위한 3분.",
    kickerDisplay: "잠들기 전,\n편안한 밤을 위한 3분.",
    description: "캐모마일의 부드러운 꽃향에 말린 사과의 은은한 단맛을 더한 블렌드. 카페인 부담 없이 즐길 수 있어 잠들기 전 따뜻하게 마시기 좋은 허브티입니다.",
    blend: "Herbal Infusion",
    ingredients: "캐모마일, 말린 사과, 콘플라워",
    hour: "자정, 해방촌 언덕 위로 내려다보이는 서울의 밤. 바쁘게 보낸 하루를 마치고 온전히 나에게 집중할 수 있는 시간입니다. 잠들기 전 따뜻한 차 한 잔으로 하루를 마무리해 보세요.",
    notes: "캐모마일의 부드러운 꽃향, 말린 사과의 은은한 단맛이 어우러진 편안하고 깔끔한 맛.",
    quote: "“잠들기 전 3분, 오늘 밤도 편안하게.”",
    moment: "assets/images/ingredient-moment-haebangchon.webp",
    ingredientSlides: [
      { name: "캐모마일", en: "CHAMOMILE", copy: "포근한 꽃 향이 하루의 끝을 부드럽고 고요하게 감쌉니다.", focus: "22% 72%" },
      { name: "말린 사과", en: "DRIED APPLE", copy: "말린 사과의 은은한 단맛이 잔 안에 편안한 온도를 더합니다.", focus: "50% 72%" },
      { name: "콘플라워", en: "CORNFLOWER", copy: "푸른 꽃잎이 자정의 색을 닮은 조용한 여운을 남깁니다.", focus: "78% 72%" }
    ],
    pack: "assets/images/pack-haebangchon.png",
    detail: "assets/images/detail-haebangchon.jpg",
    ritual: "assets/images/ritual-haebangchon.jpg",
    open: "assets/images/open-haebangchon.webp",
    place: "assets/images/place-haebangchon.jpg",
    bg: "#22283b",
    ink: "#eee9dc"
  }
};

function initHeader() {
  const header = document.querySelector("[data-header]");
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");

  if (header) {
    const updateHeader = () => header.classList.toggle("scrolled", window.scrollY > 12);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
  }

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("open", !open);
    });
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      nav.classList.remove("open");
    }));
  }
}

function initReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12, rootMargin: "0px 0px -40px" });
  elements.forEach((element) => observer.observe(element));
}

function initHueCursor() {
  if (!window.matchMedia("(pointer: fine)").matches) return;

  const cursor = document.createElement("div");
  cursor.className = "hue-cursor";
  cursor.setAttribute("aria-hidden", "true");
  cursor.innerHTML = `
    <svg viewBox="0 0 96 96" role="presentation">
      <path class="knot-loop" d="M48 47c-9 0-16-3-21-9-6-8-1-18 8-18 8 0 13 7 13 16 0-9 5-16 13-16 9 0 14 10 8 18-5 6-12 9-21 9 9 0 16 3 21 9 6 8 1 18-8 18-8 0-13-7-13-16 0 9-5 16-13 16-9 0-14-10-8-18 5-6 12-9 21-9Z"/>
      <path class="knot-weave" d="M35 37 59 61M59 37 35 61M39 48h18M48 39v18"/>
      <circle cx="48" cy="48" r="5"/>
    </svg>`;
  document.body.append(cursor);

  let x = -100;
  let y = -100;
  let frame = 0;

  const paint = () => {
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
    frame = 0;
  };

  window.addEventListener("pointermove", (event) => {
    x = event.clientX;
    y = event.clientY;
    cursor.classList.add("visible");
    if (!frame) frame = requestAnimationFrame(paint);
  }, { passive: true });

  document.addEventListener("pointerover", (event) => {
    const target = event.target.closest("[data-cursor], a, button, summary");
    cursor.classList.toggle("active", Boolean(target));
  });
  document.addEventListener("pointerout", (event) => {
    if (!event.relatedTarget) cursor.classList.remove("visible");
  });
  document.addEventListener("pointerdown", () => cursor.classList.add("pressed"));
  document.addEventListener("pointerup", () => cursor.classList.remove("pressed"));
}

function initApplyNavigation() {
  const target = document.querySelector("#apply-form");
  if (!target) return;

  const scrollToApply = (smooth = true) => {
    target.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
  };

  const settleOnApply = () => {
    scrollToApply(false);
    requestAnimationFrame(() => scrollToApply(false));
    [180, 520, 1100].forEach((delay) => setTimeout(() => scrollToApply(false), delay));
  };

  document.querySelectorAll("[data-apply-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      const destination = new URL(link.href, window.location.href);
      if (destination.pathname !== window.location.pathname || destination.hash !== "#apply-form") return;
      event.preventDefault();
      if (window.location.hash !== "#apply-form") history.pushState(null, "", "#apply-form");
      settleOnApply();
    });
  });

  if (window.location.hash === "#apply-form") {
    requestAnimationFrame(settleOnApply);
    window.addEventListener("load", settleOnApply, { once: true });
  }
}

function initOfferModal() {
  const modal = document.querySelector("#launch-offer");
  if (!modal) return;

  const form = modal.querySelector("#offer-form");
  const openers = document.querySelectorAll("[data-offer-open]");
  const closers = modal.querySelectorAll("[data-offer-close]");
  let previousFocus = null;

  const openModal = (event) => {
    if (event) event.preventDefault();
    previousFocus = document.activeElement;
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    requestAnimationFrame(() => modal.querySelector("input").focus());
  };

  const closeModal = () => {
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    if (previousFocus) previousFocus.focus();
  };

  openers.forEach((opener) => opener.addEventListener("click", openModal));
  closers.forEach((closer) => closer.addEventListener("click", closeModal));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.getAttribute("aria-hidden") === "false") closeModal();
  });

  if (form) {
    const fields = [...form.querySelectorAll("input[required]")];
    fields.forEach((field) => field.addEventListener("input", () => field.classList.remove("invalid")));
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const invalid = fields.filter((field) => !field.checkValidity());
      fields.forEach((field) => field.classList.toggle("invalid", invalid.includes(field)));
      if (invalid.length) {
        invalid[0].focus();
        return;
      }
      form.reset();
      window.location.assign("result.html?offer=15");
    });
  }
}

function initPrivacyForm() {
  const modal = document.querySelector("#privacy-modal");
  if (!modal) return;

  const form = document.querySelector("#lead-form");
  const agree = document.querySelector("#privacy-agree");
  const ok = document.querySelector("#privacy-ok");
  const openers = document.querySelectorAll("[data-privacy-open]");
  const closers = document.querySelectorAll("[data-privacy-close]");
  let pendingSubmit = false;
  let previousFocus = null;

  const openModal = (fromSubmit = false) => {
    pendingSubmit = fromSubmit;
    previousFocus = document.activeElement;
    agree.checked = false;
    ok.disabled = true;
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    setTimeout(() => modal.querySelector(".modal-close").focus(), 0);
  };

  const closeModal = () => {
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    pendingSubmit = false;
    if (previousFocus) previousFocus.focus();
  };

  openers.forEach((opener) => opener.addEventListener("click", () => openModal(false)));
  closers.forEach((closer) => closer.addEventListener("click", closeModal));
  agree.addEventListener("change", () => { ok.disabled = !agree.checked; });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.getAttribute("aria-hidden") === "false") closeModal();
  });

  if (form) {
    const fields = [...form.querySelectorAll("input[required]")];
    fields.forEach((field) => field.addEventListener("input", () => field.classList.remove("invalid")));
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const invalid = fields.filter((field) => !field.checkValidity());
      fields.forEach((field) => field.classList.toggle("invalid", invalid.includes(field)));
      if (invalid.length) {
        invalid[0].focus();
        return;
      }
      openModal(true);
    });
  }

  ok.addEventListener("click", () => {
    if (!agree.checked) return;
    if (pendingSubmit && form) {
      form.reset();
      window.location.assign("result.html");
      return;
    }
    closeModal();
  });
}

function setText(selector, value) {
  document.querySelectorAll(selector).forEach((element) => { element.textContent = value; });
}

function initProductPage() {
  if (!document.body.hasAttribute("data-product-page")) return;

  const requested = new URLSearchParams(window.location.search).get("blend") || "bukchon";
  const key = Object.prototype.hasOwnProperty.call(HUE_PRODUCTS, requested) ? requested : "bukchon";
  const product = HUE_PRODUCTS[key];

  document.title = `${product.name} · ${product.locationKo} | HUE`;
  setText("[data-product-location]", product.location);
  setText("[data-product-name]", product.name);
  setText("[data-review-product]", product.name);
  setText("[data-product-kicker]", product.kicker);
  setText("[data-product-kicker-large]", product.kickerDisplay || product.kicker);
  setText("[data-product-description]", product.description);
  setText("[data-product-blend]", product.blend);
  setText("[data-product-ingredients]", product.ingredients);
  setText("[data-product-hour]", product.hour);
  setText("[data-product-notes]", product.notes);

  document.querySelectorAll("[data-product-tone]").forEach((element) => {
    element.style.setProperty("--tone-bg", product.bg);
    element.style.setProperty("--tone-ink", product.ink);
  });

  const quote = document.querySelector("[data-product-quote]");
  if (quote) {
    quote.textContent = "";
    product.quote.split("\n").forEach((line, index) => {
      if (index) quote.append(document.createElement("br"));
      quote.append(document.createTextNode(line));
    });
  }

  const images = [
    ["[data-product-pack-door]", product.pack, ""],
    ["[data-product-detail]", product.detail, `${product.name} 블렌드의 재료와 티백`],
    ["[data-product-ritual]", product.ritual, `${product.name}의 재료, 우린 차와 전통 문양 티백`],
    ["[data-product-open]", product.open, `${product.locationKo} ${product.name} 문이 열린 패키지와 내부 티백`],
    ["[data-product-moment]", product.moment, `${product.locationKo} ${product.name}의 재료와 우린 차`],
    ["[data-product-place]", product.place, `${product.locationKo}의 시간과 ${product.name}`]
  ];
  images.forEach(([selector, src, alt]) => {
    document.querySelectorAll(selector).forEach((image) => {
      image.src = src;
      image.alt = alt;
    });
  });

  const revealButton = document.querySelector("[data-package-reveal]");
  if (revealButton) {
    revealButton.setAttribute("aria-label", `${product.locationKo} ${product.name} 패키지 펼쳐보기`);
  }

  const related = document.querySelector("[data-related-products]");
  if (related) {
    related.innerHTML = Object.entries(HUE_PRODUCTS)
      .filter(([productKey]) => productKey !== key)
      .map(([productKey, item]) => `
        <a class="related-card" href="product.html?blend=${productKey}">
          <span class="related-image">
            <img src="${item.detail}" alt="${item.locationKo} ${item.name} 재료와 티백" loading="lazy">
          </span>
          <div><h3>${item.locationKo}</h3><p>${item.flavor}</p></div>
        </a>`).join("");
  }
}

function initIngredientExperience() {
  const section = document.querySelector("[data-ingredient-experience]");
  if (!section || !document.body.hasAttribute("data-product-page")) return;

  const requested = new URLSearchParams(window.location.search).get("blend") || "bukchon";
  const key = Object.prototype.hasOwnProperty.call(HUE_PRODUCTS, requested) ? requested : "bukchon";
  const product = HUE_PRODUCTS[key];
  const ingredients = product.ingredientSlides || [];
  const viewport = section.querySelector("[data-ingredient-viewport]");
  const track = section.querySelector("[data-ingredient-track]");
  const pagination = section.querySelector("[data-ingredient-pagination]");
  const previous = section.querySelector("[data-ingredient-prev]");
  const next = section.querySelector("[data-ingredient-next]");
  if (!viewport || !track || !pagination || !ingredients.length) return;

  track.innerHTML = ingredients.map((ingredient, index) => `
    <article class="ingredient-slide" aria-hidden="${index !== 0}">
      <div class="ingredient-focus" style="--ingredient-image:url('${product.detail}');--ingredient-focus:${ingredient.focus}" aria-hidden="true"></div>
      <div class="ingredient-slide-copy">
        <span>${String(index + 1).padStart(2, "0")} / ${String(ingredients.length).padStart(2, "0")}</span>
        <p>${ingredient.en}</p>
        <h3>${ingredient.name}</h3>
        <p>${ingredient.copy}</p>
      </div>
    </article>`).join("");

  pagination.innerHTML = ingredients.map((ingredient, index) => `
    <button type="button" data-ingredient-index="${index}" aria-label="${ingredient.name} 보기" aria-pressed="${index === 0}">${String(index + 1).padStart(2, "0")}</button>`).join("");

  const slides = [...track.querySelectorAll(".ingredient-slide")];
  const dots = [...pagination.querySelectorAll("button")];
  let activeIndex = 0;
  let pointerStart = null;

  const showIngredient = (nextIndex) => {
    activeIndex = (nextIndex + ingredients.length) % ingredients.length;
    track.style.transform = `translate3d(-${activeIndex * 100}%,0,0)`;
    slides.forEach((slide, index) => {
      const active = index === activeIndex;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", String(!active));
    });
    dots.forEach((dot, index) => {
      const active = index === activeIndex;
      dot.classList.toggle("is-active", active);
      dot.setAttribute("aria-pressed", String(active));
    });
  };

  previous?.addEventListener("click", () => showIngredient(activeIndex - 1));
  next?.addEventListener("click", () => showIngredient(activeIndex + 1));
  dots.forEach((dot) => dot.addEventListener("click", () => showIngredient(Number(dot.dataset.ingredientIndex))));

  viewport.addEventListener("pointerdown", (event) => {
    pointerStart = event.clientX;
    viewport.setPointerCapture?.(event.pointerId);
  });
  viewport.addEventListener("pointerup", (event) => {
    if (pointerStart === null) return;
    const distance = event.clientX - pointerStart;
    pointerStart = null;
    if (Math.abs(distance) > 42) showIngredient(activeIndex + (distance < 0 ? 1 : -1));
  });
  viewport.addEventListener("pointercancel", () => { pointerStart = null; });
  viewport.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      showIngredient(activeIndex + 1);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showIngredient(activeIndex - 1);
    }
  });

  showIngredient(0);
}

function initPackageReveal() {
  const button = document.querySelector("[data-package-reveal]");
  if (!button) return;

  const action = button.querySelector("[data-pack-action]");
  const previous = document.querySelector("[data-pack-prev]");
  const next = document.querySelector("[data-pack-next]");
  const current = document.querySelector("[data-pack-current]");
  const dots = [...document.querySelectorAll("[data-pack-index]")];
  let pointerStart = null;
  let swiped = false;

  const setOpen = (open) => {
    button.classList.toggle("is-open", open);
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute("aria-label", open ? "펼친 패키지 닫기" : "패키지 펼쳐보기");
    if (action) action.textContent = open ? "CLICK TO CLOSE" : "CLICK TO OPEN";
    if (current) current.textContent = open ? "02" : "01";
    if (previous) previous.disabled = !open;
    if (next) next.disabled = open;
    dots.forEach((dot, index) => {
      const active = index === (open ? 1 : 0);
      dot.classList.toggle("is-active", active);
      dot.setAttribute("aria-pressed", String(active));
    });
  };

  button.addEventListener("pointerdown", (event) => {
    pointerStart = event.clientX;
    swiped = false;
  });
  button.addEventListener("pointerup", (event) => {
    if (pointerStart === null) return;
    const distance = event.clientX - pointerStart;
    pointerStart = null;
    if (Math.abs(distance) < 42) return;
    swiped = true;
    setOpen(distance < 0);
    setTimeout(() => { swiped = false; }, 0);
  });
  button.addEventListener("click", () => {
    if (swiped) return;
    setOpen(!button.classList.contains("is-open"));
  });
  button.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setOpen(true);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setOpen(false);
    }
  });

  previous?.addEventListener("click", () => setOpen(false));
  next?.addEventListener("click", () => setOpen(true));
  dots.forEach((dot) => dot.addEventListener("click", () => setOpen(dot.dataset.packIndex === "1")));
}

function initReviewForm() {
  const form = document.querySelector("#review-form");
  const list = document.querySelector("[data-review-list]");
  if (!form || !list) return;

  const requested = new URLSearchParams(window.location.search).get("blend") || "bukchon";
  const key = Object.prototype.hasOwnProperty.call(HUE_PRODUCTS, requested) ? requested : "bukchon";
  const storageKey = `hue-reviews-v2-${key}`;
  const count = document.querySelector("[data-review-count]");
  const score = document.querySelector("[data-review-score]");
  const starsLabel = document.querySelector("[data-review-stars]");
  const status = document.querySelector("[data-review-status]");
  let saved = [];

  try {
    saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
    if (!Array.isArray(saved)) saved = [];
  } catch (_) {
    saved = [];
  }

  const createReview = (review) => {
    const article = document.createElement("article");
    article.className = "review-card is-user-review";

    const meta = document.createElement("div");
    const stars = document.createElement("span");
    stars.textContent = `${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}`;
    stars.setAttribute("aria-label", `별점 ${review.rating}점`);
    const time = document.createElement("time");
    time.dateTime = review.iso;
    time.textContent = review.date;
    meta.append(stars, time);

    const title = document.createElement("h3");
    title.textContent = `${review.rating}점 · ${HUE_PRODUCTS[key].name}`;
    const content = document.createElement("p");
    content.textContent = review.content;
    const reviewer = document.createElement("small");
    reviewer.textContent = review.reviewer.toUpperCase();
    article.append(meta, title, content, reviewer);
    return article;
  };

  const updateSummary = () => {
    const total = saved.reduce((sum, item) => sum + Number(item.rating || 0), 9);
    const totalCount = saved.length + 2;
    const average = (total / totalCount).toFixed(1);
    if (count) count.textContent = String(totalCount);
    if (score) score.textContent = average;
    if (starsLabel) starsLabel.setAttribute("aria-label", `별점 5점 중 ${average}점`);
  };

  saved.forEach((review) => list.prepend(createReview(review)));
  updateSummary();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const now = new Date();
    const review = {
      reviewer: String(data.get("reviewer") || "HUE GUEST").trim(),
      rating: Math.min(5, Math.max(1, Number(data.get("rating")) || 5)),
      content: String(data.get("content") || "").trim(),
      iso: now.toISOString().slice(0, 10),
      date: new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit" }).format(now).replace(/\. /g, ".").replace(/\.$/, "")
    };

    if (!review.reviewer || !review.content) return;
    saved.push(review);
    saved = saved.slice(-20);
    try { localStorage.setItem(storageKey, JSON.stringify(saved)); } catch (_) {}
    list.prepend(createReview(review));
    updateSummary();
    form.reset();
    if (status) status.textContent = "후기가 등록되었습니다. 이 브라우저에서 바로 확인할 수 있어요.";
  });
}

initHeader();
initReveal();
initHueCursor();
initApplyNavigation();
initOfferModal();
initPrivacyForm();
initProductPage();
initIngredientExperience();
initPackageReveal();
initReviewForm();

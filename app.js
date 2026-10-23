const HUE_PRODUCTS = {
  bukchon: {
    location: "BUKCHON 8:00",
    locationKo: "북촌 8:00",
    name: "Earl Grey",
    flavor: "EARL GREY",
    kicker: "골목에 첫 빛이 드는 아침.",
    description: "또렷한 블랙티 위로 베르가못의 맑은 향과 콘플라워의 푸른 잔향이 이어집니다.",
    blend: "Black tea blend",
    ingredients: "블랙티, 베르가못 필, 콘플라워",
    hour: "북촌의 지붕 위로 아침빛이 번지는 8시. 하루의 첫 장면을 맑게 여는 시간입니다.",
    notes: "또렷한 블랙티, 시트러스 계열의 베르가못, 푸른 콘플라워가 만드는 단정한 균형.",
    quote: "“아침의 골목은 아직 조용하고,\n찻잔의 향이 먼저 하루를 엽니다.”",
    pack: "assets/images/pack-bukchon.png",
    detail: "assets/images/detail-bukchon.jpg",
    ritual: "assets/images/ritual-bukchon.jpg",
    open: "assets/images/open-bukchon.jpg",
    place: "assets/images/place-bukchon.jpg",
    bg: "#a8afb0",
    ink: "#17272e"
  },
  seochon: {
    location: "SEOCHON 11:00",
    locationKo: "서촌 11:00",
    name: "Pear White Tea",
    flavor: "PEAR WHITE TEA",
    kicker: "느린 오전을 위한 맑은 한 잔.",
    description: "화이트티의 섬세함에 말린 배의 부드러운 단맛과 볶은 현미의 고소함을 겹쳤습니다.",
    blend: "White tea blend",
    ingredients: "화이트티, 말린 배, 볶은 현미",
    hour: "햇빛이 서촌의 낮은 담을 천천히 넘는 오전 11시. 서두르지 않아도 좋은 시간입니다.",
    notes: "은은한 화이트티, 말린 배의 둥근 단맛, 볶은 현미의 담백하고 고소한 마무리.",
    quote: "“느리게 밝아진 오전은,\n맑고 부드러운 맛으로 남습니다.”",
    pack: "assets/images/pack-seochon.png",
    detail: "assets/images/detail-seochon.jpg",
    ritual: "assets/images/ritual-seochon.jpg",
    open: "assets/images/open-seochon.jpg",
    place: "assets/images/place-seochon.jpg",
    bg: "#ded9c8",
    ink: "#474638"
  },
  seongsu: {
    location: "SEONGSU 4:00",
    locationKo: "성수 4:00",
    name: "Roasted Cacao",
    flavor: "ROASTED CACAO",
    kicker: "오후의 속도를 낮추는 시간.",
    description: "블랙티에 구운 카카오의 깊이와 오렌지 필의 맑은 끝맛을 더했습니다.",
    blend: "Black tea blend",
    ingredients: "블랙티, 로스티드 카카오 닙스, 오렌지 필",
    hour: "작업실의 빛이 길어지고 커피 한 잔을 더 고민하게 되는 오후 4시. 다른 리듬을 고르는 시간입니다.",
    notes: "구운 카카오의 고소하고 깊은 향, 블랙티의 구조감, 오렌지 필의 산뜻한 끝맛.",
    quote: "“익숙한 오후 사이,\n조금 다른 향으로 속도를 바꿉니다.”",
    pack: "assets/images/pack-seongsu.png",
    detail: "assets/images/detail-seongsu.jpg",
    ritual: "assets/images/ritual-seongsu.jpg",
    open: "assets/images/open-seongsu.jpg",
    place: "assets/images/place-seongsu.jpg",
    bg: "#8a4939",
    ink: "#f4e7d4"
  },
  yeonnam: {
    location: "YEONNAM 6:42",
    locationKo: "연남 6:42",
    name: "Rose Hibiscus",
    flavor: "ROSE HIBISCUS",
    kicker: "해 질 무렵의 붉은 빛.",
    description: "히비스커스의 산뜻함, 루이보스의 매끈함, 장미 꽃잎의 긴 여운을 담았습니다.",
    blend: "Herbal infusion",
    ingredients: "히비스커스, 루이보스, 장미 꽃잎",
    hour: "연남의 골목과 창문이 붉게 물드는 오후 6시 42분. 낮과 밤 사이 잠깐 머무는 빛입니다.",
    notes: "루비빛 히비스커스의 선명한 산미, 루이보스의 부드러운 바디, 장미 꽃잎의 향긋한 마무리.",
    quote: "“해가 지기 직전의 색은,\n잠시 머물다 향으로 남습니다.”",
    pack: "assets/images/pack-yeonnam.png",
    detail: "assets/images/detail-yeonnam.jpg",
    ritual: "assets/images/ritual-yeonnam.jpg",
    open: "assets/images/open-yeonnam.jpg",
    place: "assets/images/place-yeonnam.jpg",
    bg: "#d18e78",
    ink: "#472d28"
  },
  haebangchon: {
    location: "HAEBANGCHON 0:00",
    locationKo: "해방촌 0:00",
    name: "Blue Hour Chamomile",
    flavor: "BLUE HOUR CHAMOMILE",
    kicker: "하루의 불을 끄기 전.",
    description: "캐모마일의 포근함에 말린 사과의 은은한 단맛과 콘플라워의 푸른 잔향을 더했습니다.",
    blend: "Herbal infusion",
    ingredients: "캐모마일, 말린 사과, 콘플라워",
    hour: "도시의 불빛이 멀어지고 방 안이 조용해지는 자정. 하루를 천천히 내려놓는 시간입니다.",
    notes: "포근한 캐모마일, 말린 사과의 은은한 단맛, 콘플라워가 남기는 고요한 여운.",
    quote: "“자정의 푸른 고요 속에서,\n오늘을 천천히 내려놓습니다.”",
    pack: "assets/images/pack-haebangchon.png",
    detail: "assets/images/detail-haebangchon.jpg",
    ritual: "assets/images/ritual-haebangchon.jpg",
    open: "assets/images/open-haebangchon.jpg",
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
  setText("[data-product-kicker]", product.kicker);
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
    ["[data-product-pack]", product.pack, `${product.locationKo} ${product.name} 패키지`],
    ["[data-product-detail]", product.detail, `${product.name} 블렌드의 재료와 티백`],
    ["[data-product-ritual]", product.ritual, `${product.name}의 재료, 우린 차와 전통 문양 티백`],
    ["[data-product-open]", product.open, `${product.locationKo} ${product.name} 패키지를 펼친 모습`],
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

function initPackageReveal() {
  const button = document.querySelector("[data-package-reveal]");
  if (!button) return;

  const action = button.querySelector("[data-pack-action]");
  button.addEventListener("click", () => {
    const open = !button.classList.contains("is-open");
    button.classList.toggle("is-open", open);
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute("aria-label", open ? "펼친 패키지 닫기" : "패키지 펼쳐보기");
    if (action) action.textContent = open ? "CLICK TO CLOSE" : "CLICK TO UNFOLD";
  });
}

initHeader();
initReveal();
initHueCursor();
initPrivacyForm();
initProductPage();
initPackageReveal();

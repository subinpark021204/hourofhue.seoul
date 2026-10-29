(() => {
  "use strict";

  const EVENT_VERSION = "2026-10-29";
  const path = window.location.pathname;
  const pageType = path.endsWith("/product.html")
    ? "product"
    : path.endsWith("/shop.html")
      ? "shop"
      : path.endsWith("/tea-finder.html")
        ? "tea_finder"
        : path.endsWith("/result.html")
          ? "lead_result"
          : "home";
  const productId = new URLSearchParams(window.location.search).get("blend") || "";
  const firedSections = new Set();
  const firedScrollDepths = new Set();
  const startedForms = new Set();
  let pendingHomeLead = false;
  let scrollQueued = false;

  const clean = (value, max = 100) => String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);

  const elementLabel = (element) => clean(
    element.getAttribute("aria-label")
      || element.querySelector("strong")?.textContent
      || element.textContent
      || element.getAttribute("title")
      || "",
    100
  );

  const clickLocation = (element) => {
    if (element.closest(".announcement")) return "announcement";
    if (element.closest("header")) return "header";
    if (element.closest("footer")) return "footer";
    if (element.closest(".brand-hero")) return "home_hero";
    if (element.closest(".finder-callout")) return "finder_callout";
    if (element.closest(".pack-chapters")) return "packaging";
    if (element.closest(".apply")) return "lead_section";
    if (element.closest("[data-product-page]")) return "product_page";
    if (element.closest("[data-finder-app]")) return "tea_finder";
    return "main";
  };

  const safeDestination = (element) => {
    const href = element.getAttribute("href");
    if (!href) return "";
    try {
      const url = new URL(href, window.location.href);
      return url.origin === window.location.origin
        ? clean(url.pathname + url.search + url.hash, 150)
        : clean(url.origin + url.pathname, 150);
    } catch (_) {
      return clean(href, 150);
    }
  };

  const productFromLink = (element) => {
    const href = element.getAttribute("href");
    if (!href) return "";
    try {
      return new URL(href, window.location.href).searchParams.get("blend") || "";
    } catch (_) {
      return "";
    }
  };

  const track = (eventName, parameters = {}) => {
    const payload = {
      event_version: EVENT_VERSION,
      page_type: pageType,
      ...parameters
    };

    Object.keys(payload).forEach((key) => {
      const value = payload[key];
      if (value === undefined || value === null || value === "") {
        delete payload[key];
      } else if (typeof value === "string") {
        payload[key] = clean(value, 150);
      }
    });

    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, payload);
      if (window.fbq && eventName !== "page_view" && !eventName.includes("scroll")) {
        const metaEventName = {
          generate_lead: "Lead",
          sign_up: "CompleteRegistration",
          contact_click: "Contact",
          view_item: "ViewContent",
          add_to_cart: "AddToCart",
          begin_checkout: "InitiateCheckout",
          search: "Search"
        }[eventName];

        if (eventName === "purchase") {
          fbq("track", "Purchase", {
            value: Number(payload.value) || 0,
            currency: "KRW"
          });
        } else if (metaEventName) {
          fbq("track", metaEventName);
        } else {
          fbq("trackCustom", eventName);
        }
      }
    } else {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(["event", eventName, payload]);
    }
  };

  window.HUE_ANALYTICS = Object.freeze({ track });

  const trackPageContext = () => {
    if (pageType === "product") {
      track("product_view", {
        product_id: productId || "bukchon",
        product_name: clean(document.querySelector("[data-product-name]")?.textContent, 80)
      });
    }

    if (pageType === "lead_result") {
      track("lead_result_view", {
        form_name: new URLSearchParams(window.location.search).has("offer")
          ? "product_launch_offer"
          : "home_launch_notice"
      });
    }
  };

  const trackSections = () => {
    if (!("IntersectionObserver" in window)) return;

    const sections = [...document.querySelectorAll("main section")];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.4) return;

        const section = entry.target;
        const index = sections.indexOf(section) + 1;
        const sectionId = section.id
          || section.getAttribute("aria-label")
          || [...section.classList].find((name) => !["reveal", "is-visible"].includes(name))
          || "section_" + index;

        if (firedSections.has(sectionId)) return;
        firedSections.add(sectionId);

        track("section_view", {
          section_id: clean(sectionId, 80),
          section_title: clean(section.querySelector("h1, h2, h3")?.textContent || sectionId, 100),
          section_index: index
        });
        observer.unobserve(section);
      });
    }, { threshold: [0.4] });

    sections.forEach((section) => observer.observe(section));
  };

  const checkScrollDepth = () => {
    scrollQueued = false;
    const root = document.documentElement;
    const scrollable = root.scrollHeight - window.innerHeight;
    if (scrollable <= 0) return;

    const percent = Math.round((window.scrollY / scrollable) * 100);
    [25, 50, 75, 90].forEach((threshold) => {
      if (percent < threshold || firedScrollDepths.has(threshold)) return;
      firedScrollDepths.add(threshold);
      track("scroll_depth", { scroll_percent: threshold });
    });
  };

  const queueScrollCheck = () => {
    if (scrollQueued) return;
    scrollQueued = true;
    window.requestAnimationFrame(checkScrollDepth);
  };

  const formName = (form) => {
    if (form.matches("#lead-form")) return "home_launch_notice";
    if (form.matches("#offer-form")) return "product_launch_offer";
    if (form.matches("[data-finder-gate-form]")) return "tea_finder_gate";
    if (form.matches("#review-form")) return "product_review";
    return clean(form.id || "form", 80);
  };

  document.addEventListener("focusin", (event) => {
    const form = event.target.closest("form");
    if (!form || form.matches("#review-form")) return;

    const name = formName(form);
    if (startedForms.has(name)) return;
    startedForms.add(name);

    track("lead_form_start", {
      form_name: name,
      product_id: pageType === "product" ? productId || "bukchon" : undefined
    });
  });

  document.addEventListener("submit", (event) => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement)) return;

    const valid = form.checkValidity();
    const name = formName(form);

    if (form.matches("#lead-form")) {
      pendingHomeLead = valid;
      if (!valid) track("lead_form_error", { form_name: name, error_type: "validation" });
      return;
    }

    if (form.matches("#offer-form")) {
      track(valid ? "lead_form_complete" : "lead_form_error", {
        form_name: name,
        product_id: productId || "bukchon",
        error_type: valid ? undefined : "validation"
      });
      return;
    }

    if (form.matches("[data-finder-gate-form]")) {
      if (!valid) {
        track("lead_form_error", { form_name: name, error_type: "validation" });
        return;
      }

      window.setTimeout(() => {
        const root = document.querySelector("[data-finder-app]");
        if (root?.dataset.currentView !== "result") return;

        const detailHref = root.querySelector("[data-result-detail]")?.getAttribute("href") || "";
        track("finder_complete", {
          result_blend: productFromLink({ getAttribute: () => detailHref }) || "unknown",
          question_count: Number(root.querySelector("[role='progressbar']")?.getAttribute("aria-valuemax")) || 0
        });
      }, 0);
      return;
    }

    if (form.matches("#review-form") && valid) {
      const rating = Number(new FormData(form).get("rating")) || 5;
      window.setTimeout(() => {
        const status = document.querySelector("[data-review-status]");
        if (!status?.textContent.includes("후기가 등록되었습니다")) return;
        track("review_submit", {
          product_id: productId || "bukchon",
          rating
        });
      }, 0);
    }
  }, true);

  document.addEventListener("click", (event) => {
    const element = event.target.closest("a, button");
    if (!element) return;

    if (element.matches("#privacy-ok")) {
      const agreed = document.querySelector("#privacy-agree")?.checked;
      if (pendingHomeLead && agreed) {
        track("lead_form_complete", { form_name: "home_launch_notice" });
        pendingHomeLead = false;
      }
      return;
    }

    if (element.matches("[data-finder-start], [data-finder-start-link]")) {
      track("finder_start", {
        click_location: clickLocation(element)
      });
      return;
    }

    if (element.matches(".finder-option")) {
      const root = element.closest("[data-finder-app]");
      track("finder_answer", {
        question_step: Number(root?.querySelector("[data-finder-step]")?.textContent) || 0,
        question_category: clean(root?.querySelector("[data-finder-category]")?.textContent, 80),
        option_id: clean(element.dataset.optionId, 80)
      });
      return;
    }

    if (element.matches("[data-finder-restart]")) {
      track("finder_restart");
      return;
    }

    const finderAction = element.matches("[data-result-share]")
      ? "share"
      : element.matches("[data-result-download]")
        ? "download"
        : element.matches("[data-result-copy]")
          ? "copy_link"
          : element.matches("[data-result-detail]")
            ? "view_product"
            : "";

    if (finderAction) {
      track("finder_result_action", {
        action_name: finderAction,
        result_blend: productFromLink(element) || undefined
      });
      return;
    }

    if (element.matches("[data-package-reveal], [data-pack-prev], [data-pack-next], [data-pack-index]")) {
      const actionName = element.matches("[data-pack-prev]")
        ? "previous"
        : element.matches("[data-pack-next]")
          ? "next"
          : element.matches("[data-pack-index]")
            ? "slide_" + (Number(element.dataset.packIndex) + 1)
            : element.classList.contains("is-open")
              ? "close"
              : "open";

      track("product_package_interaction", {
        product_id: productId || "bukchon",
        action_name: actionName
      });
      return;
    }

    if (element.matches("[data-ingredient-prev], [data-ingredient-next], [data-ingredient-index]")) {
      const actionName = element.matches("[data-ingredient-prev]")
        ? "previous"
        : element.matches("[data-ingredient-next]")
          ? "next"
          : "ingredient_" + (Number(element.dataset.ingredientIndex) + 1);

      track("ingredient_carousel_interaction", {
        product_id: productId || "bukchon",
        action_name: actionName
      });
      return;
    }

    if (element.matches("[data-privacy-open]")) {
      track("privacy_notice_open", {
        click_location: clickLocation(element)
      });
      return;
    }

    if (element.matches("[data-offer-open]")) {
      track("lead_cta_click", {
        form_name: "product_launch_offer",
        product_id: productId || "bukchon",
        click_location: clickLocation(element)
      });
      return;
    }

    if (element.matches(".menu-toggle")) {
      track("menu_toggle", {
        action_name: element.getAttribute("aria-expanded") === "true" ? "close" : "open"
      });
      return;
    }

    const selectedProduct = productFromLink(element);
    if (selectedProduct) {
      track("product_select", {
        product_id: selectedProduct,
        link_text: elementLabel(element),
        click_location: clickLocation(element),
        destination: safeDestination(element)
      });
      return;
    }

    const href = element.getAttribute("href");
    if (href) {
      try {
        const url = new URL(href, window.location.href);
        if (url.origin !== window.location.origin) {
          track("outbound_click", {
            link_text: elementLabel(element),
            link_domain: url.hostname,
            destination: safeDestination(element),
            click_location: clickLocation(element)
          });
          return;
        }
      } catch (_) {}
    }

    if (element.closest(".site-nav, .header-tools, .brand, .site-footer")) {
      track("navigation_click", {
        link_text: elementLabel(element),
        destination: safeDestination(element),
        click_location: clickLocation(element)
      });
      return;
    }

    if (element.matches(".button, .text-link, [data-apply-link], [data-cursor]")) {
      track("cta_click", {
        link_text: elementLabel(element),
        destination: safeDestination(element),
        click_location: clickLocation(element)
      });
    }
  }, true);

  window.addEventListener("scroll", queueScrollCheck, { passive: true });
  trackPageContext();
  trackSections();
  queueScrollCheck();
})();

/* ==========================================================================
   Coffee Store
   File: scroll-reveal.js
   Description: Scroll Reveal Animation
   Version: 2.0.0
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* ==========================
     Elements To Reveal
  ========================== */

  const selectors = [
    ".hero-content",
    ".section-heading",
    ".feature-card",
    ".product-card",
    ".step-card",
    ".testimonial-card",
    ".faq-item",
    ".contact-wrapper",
    ".footer-content",
  ];

  const revealElements = document.querySelectorAll(selectors.join(","));

  /* ==========================
     Safety Check
  ========================== */

  if (!revealElements.length) return;

  /* ==========================
     Add Reveal Class
  ========================== */

  revealElements.forEach((element) => {
    element.classList.add("reveal");
  });

  /* ==========================
     Respect Reduced Motion
  ========================== */

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealElements.forEach((element) => {
      element.classList.add("revealed");
    });

    return;
  }

  /* ==========================
     Intersection Observer
  ========================== */

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -60px 0px",
    },
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });
});

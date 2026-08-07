/* ==========================================================================
   Coffee Store
   File: analytics-events.js
   Description: Analytics Events
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* ==========================
     Visit Tracking
  ========================== */

  const params = new URLSearchParams(window.location.search);

  const source = params.get("src") || "direct";

  Analytics.send({
    event: "visit",

    source,

    page: window.location.pathname,

    language: navigator.language,

    userAgent: navigator.userAgent,

    timestamp: new Date().toISOString(),
  });

  /* ==========================
     Product Tracking
  ========================== */

  const productButtons = document.querySelectorAll(".product-btn");

  productButtons.forEach((button) => {
    button.addEventListener("click", () => {
      Analytics.send({
        event: "product_click",

        source,

        product: button.dataset.product || "",

        weight: button.dataset.weight || "",

        code: button.dataset.code || "",

        page: window.location.pathname,

        timestamp: new Date().toISOString(),
      });
    });
  });
});

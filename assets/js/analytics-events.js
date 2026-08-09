/* ==========================================================================
   Coffee Store
   File: analytics-events.js
   Description: Analytics Events
   Version: 2.0.0
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

  const productButtons =
    document.querySelectorAll(".product-btn");

  productButtons.forEach((button) => {

    button.addEventListener("click", () => {

      Analytics.send({
        event: "product_click",

        source,

        target: "product",

        product: button.dataset.product || "",

        weight: button.dataset.weight || "",

        code: button.dataset.code || "",

        page: window.location.pathname,

        timestamp: new Date().toISOString(),
      });

    });

  });


  /* ==========================
     WhatsApp Tracking
  ========================== */

  const whatsappButtons =
    document.querySelectorAll('[data-analytics^="whatsapp-"]');

  whatsappButtons.forEach((button) => {

    button.addEventListener("click", () => {

      const target =
        button.dataset.analytics.replace("whatsapp-", "");

      Analytics.send({
        event: "whatsapp_click",

        source,

        target,

        page: window.location.pathname,

        timestamp: new Date().toISOString(),
      });

    });

  });

});

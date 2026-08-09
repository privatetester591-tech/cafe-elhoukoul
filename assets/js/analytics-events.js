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

  const productButtons = document.querySelectorAll(".product-btn");

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
   Social & WhatsApp Tracking
========================== */

const trackedButtons =
  document.querySelectorAll("[data-analytics]");

trackedButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const analyticsTarget = button.dataset.analytics;

    if (!analyticsTarget) {
      return;
    }

    const separatorIndex = analyticsTarget.indexOf("-");

    if (separatorIndex === -1) {
      return;
    }

    const eventType =
      analyticsTarget.substring(0, separatorIndex);

    const target =
      analyticsTarget.substring(separatorIndex + 1);

    let eventName = "";

    if (eventType === "whatsapp") {
      eventName = "whatsapp_click";
    }

    if (eventType === "facebook") {
      eventName = "facebook_click";
    }

    if (!eventName) {
      return;
    }

    Analytics.send({
      event: eventName,

      source,

      target,

      page: window.location.pathname,

      timestamp: new Date().toISOString(),
    });
  });
});

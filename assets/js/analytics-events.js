/* ==========================================================================
   Coffee Store
   File: analytics-events.js
   Description: Analytics Events
   Version: 3.0.0
   ========================================================================== */

/* ==========================
   Device Detection
========================== */

function getDevice() {
  const ua = navigator.userAgent;

  let browser = "Other";
  let platform = "Desktop";
  let model = "";

  /* Browser */

  if (/Edg\//i.test(ua)) {
    browser = "Edge";
  } else if (/Chrome\//i.test(ua)) {
    browser = "Chrome";
  } else if (/Firefox\//i.test(ua)) {
    browser = "Firefox";
  } else if (/Safari\//i.test(ua)) {
    browser = "Safari";
  }

  /* Android */

  const androidMatch = ua.match(/Android/i);

  if (androidMatch) {
    platform = "Android";

    const modelMatch = ua.match(/Android[^;)]*;\s*(?:[^;]+;\s*)?([^;)]+?)(?:\s+Build\/.*)?\)/i);

    if (modelMatch) {
      model = modelMatch[1].trim();
    }

  } else if (/iPhone/i.test(ua)) {
    platform = "iPhone";

  } else if (/iPad/i.test(ua)) {
    platform = "iPad";

  } else if (/Windows/i.test(ua)) {
    platform = "Windows";

  } else if (/Macintosh/i.test(ua)) {
    platform = "Mac";

  } else if (/Linux/i.test(ua)) {
    platform = "Linux";
  }

  /* Known Model Names */

  const modelNames = {
    "SM-M205F": "Samsung M20",
  };

  model = modelNames[model] || model;

  return model
    ? `${browser} / ${platform} / ${model}`
    : `${browser} / ${platform}`;
}


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

    device: getDevice(),

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

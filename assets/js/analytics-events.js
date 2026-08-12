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
  let version = "";
  let model = "";

  /* ==========================
     Browser
  ========================== */

  if (/Edg\//i.test(ua)) {
    browser = "Edge";
  } else if (/Firefox\//i.test(ua)) {
    browser = "Firefox";
  } else if (/Chrome\//i.test(ua)) {
    browser = "Chrome";
  } else if (/Safari\//i.test(ua)) {
    browser = "Safari";
  }

  /* ==========================
     Android
  ========================== */

  const androidMatch = ua.match(/Android\s+([\d.]+)/i);

  if (androidMatch) {
    platform = "Android";
    version = androidMatch[1];

    const modelMatch = ua.match(
      /Android[^;)]*;\s*(?:[^;]+;\s*)?([^;)]+?)(?:\s+Build\/.*)?\)/i
    );

    if (modelMatch) {
      model = modelMatch[1].trim();
    }
  }

  /* ==========================
     iOS
  ========================== */

  else if (/iPhone/i.test(ua)) {
    platform = "iOS";

    const iosMatch = ua.match(/OS\s+([\d_]+)/i);

    if (iosMatch) {
      version = iosMatch[1].replace(/_/g, ".");
    }

    model = "iPhone";
  }

  else if (/iPad/i.test(ua)) {
    platform = "iOS";

    const iosMatch = ua.match(/OS\s+([\d_]+)/i);

    if (iosMatch) {
      version = iosMatch[1].replace(/_/g, ".");
    }

    model = "iPad";
  }

  /* ==========================
     Windows
  ========================== */

  else if (/Windows/i.test(ua)) {
    platform = "Windows";

    if (/Windows NT 10\.0/i.test(ua)) {
      version = "10/11";
    } else if (/Windows NT 6\.3/i.test(ua)) {
      version = "8.1";
    } else if (/Windows NT 6\.2/i.test(ua)) {
      version = "8";
    } else if (/Windows NT 6\.1/i.test(ua)) {
      version = "7";
    }
  }

  /* ==========================
     macOS
  ========================== */

  else if (/Macintosh/i.test(ua)) {
    platform = "macOS";

    const macMatch = ua.match(/Mac OS X\s+([\d_]+)/i);

    if (macMatch) {
      version = macMatch[1].replace(/_/g, ".");
    }
  }

  /* ==========================
     Linux
  ========================== */

  else if (/Linux/i.test(ua)) {
    platform = "Linux";
  }

  /* ==========================
     In-App Browser Detection
  ========================== */

  if (/FBAN|FBAV|FB_IAB/i.test(ua)) {
    browser = "Facebook";
  } else if (/Messenger/i.test(ua)) {
    browser = "Messenger";
  }

  /* ==========================
     Result
  ========================== */

  const parts = [browser, platform];

  if (version) {
    parts.push(version);
  }

  if (model) {
    parts.push(model);
  }

  return parts.join(" / ");
}
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

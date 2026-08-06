/* ==========================================================================
   Coffee Store
   File: analytics-events.js
   Description: Visit Tracking
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
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
});

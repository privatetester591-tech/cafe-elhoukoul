/* ==========================================================================
   Coffee Store
   File: analytics-social.js
   Description: Social Analytics
   Version: 2.0.0
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  const source = params.get("src") || "direct";

  const socialButtons = document.querySelectorAll(
    '[data-analytics="facebook-footer"],' +
    '[data-analytics="instagram-footer"],' +
    '[data-analytics="tiktok-footer"]'
  );

  socialButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const analyticsTarget = button.dataset.analytics;

      let eventName = "";

      if (analyticsTarget === "facebook-footer") {
        eventName = "facebook_click";
      }

      if (analyticsTarget === "instagram-footer") {
        eventName = "instagram_click";
      }

      if (analyticsTarget === "tiktok-footer") {
        eventName = "tiktok_click";
      }

      if (!eventName) {
        return;
      }

      Analytics.send({
        event: eventName,

        source,

        target: "footer",

        page: window.location.pathname,

        timestamp: new Date().toISOString(),
      });
    });
  });
});

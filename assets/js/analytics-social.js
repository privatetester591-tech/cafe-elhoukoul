/* ==========================================================================
   Coffee Store
   File: analytics-social.js
   Description: Social & Interaction Analytics
   Version: 3.0.0
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {

  const params = new URLSearchParams(window.location.search);

  const source = params.get("src") || "direct";

  const trackedElements = document.querySelectorAll(
    '[data-analytics="facebook-footer"],' +
    '[data-analytics="instagram-footer"],' +
    '[data-analytics="tiktok-footer"],' +
    '[data-analytics="map-contact"]'
  );

  trackedElements.forEach((element) => {

    element.addEventListener("click", () => {

      const analyticsTarget = element.dataset.analytics;

      let eventName = "";
      let target = "";

      if (analyticsTarget === "facebook-footer") {
        eventName = "facebook_click";
        target = "footer";
      }

      if (analyticsTarget === "instagram-footer") {
        eventName = "instagram_click";
        target = "footer";
      }

      if (analyticsTarget === "tiktok-footer") {
        eventName = "tiktok_click";
        target = "footer";
      }

      if (analyticsTarget === "map-contact") {
        eventName = "map_click";
        target = "contact";
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

});

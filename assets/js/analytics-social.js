/* ==========================================================================
   Coffee Store
   File: analytics-social.js
   Description: Social Analytics
   Version: 1.0.0
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  const source = params.get("src") || "direct";

  const facebookButtons =
    document.querySelectorAll('[data-analytics="facebook-footer"]');

  facebookButtons.forEach((button) => {
    button.addEventListener("click", () => {
      Analytics.send({
        event: "facebook_click",

        source,

        target: "footer",

        page: window.location.pathname,

        timestamp: new Date().toISOString(),
      });
    });
  });
});

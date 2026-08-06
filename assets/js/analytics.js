/* ==========================================================================
   Coffee Store
   File: analytics.js
   Description: Analytics Core
   ========================================================================== */

const Analytics = {
  send(data) {
    if (!AnalyticsConfig.endpoint) return;

    fetch(AnalyticsConfig.endpoint, {
      method: "POST",
      mode: "no-cors",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    });
  },
};

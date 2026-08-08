/* ==========================================================================
   Coffee Store
   File: analytics.js
   Description: Analytics Core
   Version: 2.0.0
   ========================================================================== */

const Analytics = {
  send(data) {
    if (!AnalyticsConfig.endpoint) return;

    fetch(AnalyticsConfig.endpoint, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(data),
    }).catch(() => {
      // تجاهل أخطاء التحليلات حتى لا تؤثر على عمل الموقع
    });
  },
};

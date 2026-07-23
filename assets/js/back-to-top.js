/* ==========================================================================
   Coffee Store
   File: back-to-top.js
   Description: Back To Top Button
   Version: 2.0.0
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.getElementById("backToTop");

  /* ==========================
     Safety Check
  ========================== */

  if (!backToTop) return;

  /* ==========================
     Show / Hide Button
  ========================== */

  window.addEventListener(
    "scroll",
    () => {
      backToTop.classList.toggle("show", window.scrollY > 300);
    },
    { passive: true },
  );

  /* ==========================
     Scroll To Top
  ========================== */

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

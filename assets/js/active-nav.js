/* ==========================================================================
   Coffee Store
   File: active-nav.js
   Description: Active Navigation Links
   Version: 5.0.0
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav a[href^='#']");

  if (!sections.length || !navLinks.length) return;

  function updateActiveLink() {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSection = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${currentSection}`,
      );
    });
  }

  window.addEventListener("scroll", updateActiveLink);

  window.addEventListener("load", updateActiveLink);

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setTimeout(updateActiveLink, 300);
    });
  });
});

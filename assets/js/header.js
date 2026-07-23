/* ==========================================================================
   Coffee Store
   File: header.js
   Description: Header & Mobile Navigation
   Version: 5.0.0
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  /* ==========================
     Safety Check
  ========================== */

  if (!header || !menuToggle || !navMenu) return;

  const navLinks = navMenu.querySelectorAll("a");

  const MOBILE_BREAKPOINT = 768;

  /* ==========================
     Sticky Header
  ========================== */

  window.addEventListener(
    "scroll",
    () => {
      header.classList.toggle("scrolled", window.scrollY > 20);
    },
    { passive: true },
  );

  /* ==========================
     Mobile Menu
  ========================== */

  function openMenu() {
    navMenu.classList.add("active");

    menuToggle.textContent = "✕";
    menuToggle.setAttribute("aria-expanded", "true");

    document.body.classList.add("menu-open");
  }

  function closeMenu() {
    navMenu.classList.remove("active");

    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-expanded", "false");

    document.body.classList.remove("menu-open");
  }

  menuToggle.addEventListener("click", () => {
    if (navMenu.classList.contains("active")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  /* ==========================
     Close Menu On Link Click
  ========================== */

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  /* ==========================
     Close Menu Outside Click
  ========================== */

  document.addEventListener("click", (event) => {
    if (
      navMenu.classList.contains("active") &&
      !navMenu.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      closeMenu();
    }
  });

  /* ==========================
     Reset On Desktop
  ========================== */

  window.addEventListener("resize", () => {
    if (window.innerWidth > MOBILE_BREAKPOINT) {
      closeMenu();
    }
  });
});

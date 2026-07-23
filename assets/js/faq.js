/* ==========================================================================
   Coffee Store
   File: faq.js
   Description: FAQ Accordion
   Version: 4.0.0
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  if (!faqItems.length) return;

  faqItems.forEach((item) => {
    const button = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    button.setAttribute("aria-expanded", "false");

    answer.style.maxHeight = "0px";

    button.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      /* إغلاق جميع العناصر */

      faqItems.forEach((otherItem) => {
        otherItem.classList.remove("active");

        otherItem
          .querySelector(".faq-question")
          .setAttribute("aria-expanded", "false");

        otherItem.querySelector(".faq-answer").style.maxHeight = "0px";
      });

      /* إذا كان مغلقًا افتحه */

      if (!isActive) {
        item.classList.add("active");

        button.setAttribute("aria-expanded", "true");

        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
});

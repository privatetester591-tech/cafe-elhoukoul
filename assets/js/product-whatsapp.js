/* ==========================================================================
   Coffee Store
   File: product-whatsapp.js
   Description: Product WhatsApp Messages
   Version: 1.0.0
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const PHONE = "213669691167";

  const buttons = document.querySelectorAll(".product-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      const product = button.dataset.product;
      const weight = button.dataset.weight;
      const code = button.dataset.code;

      const message = `السلام عليكم.

رأيت هذا المنتج في موقعكم وأرغب في معرفة:

☕ المنتج: ${product}

📦 الوزن: ${weight}

🏷️ المرجع: ${code}

هل هو متوفر حاليًا؟ وإذا كان متوفرًا، هل يمكنني الحضور إلى المحل لشرائه؟

شكراً لكم.`;

      const url = `https://wa.me/${PHONE}?text=` + encodeURIComponent(message);

      window.open(url, "_blank", "noopener");
    });
  });
});

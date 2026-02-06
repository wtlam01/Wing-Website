document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.querySelector(".lightbox");
  if (!lightbox) return;

  const imgEl = lightbox.querySelector(".lightbox__img");
  const closeEls = lightbox.querySelectorAll("[data-close]");

  // ✅ ONLY clickable items
  const clickableItems = document.querySelectorAll(".gallery-item.is-clickable");

  clickableItems.forEach((item) => {
    item.addEventListener("click", () => {
      const full = item.getAttribute("data-full");
      if (!full) return;

      imgEl.src = full;
      imgEl.alt = item.querySelector("img")?.alt || "Image";
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
    });
  });

  function closeLightbox() {
    lightbox.hidden = true;
    imgEl.src = "";
    document.body.style.overflow = "";
  }

  closeEls.forEach((el) => el.addEventListener("click", closeLightbox));

  document.addEventListener("keydown", (e) => {
    if (!lightbox.hidden && e.key === "Escape") closeLightbox();
  });
});

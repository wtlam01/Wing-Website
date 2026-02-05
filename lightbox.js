document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".gallery-item");
  const lightbox = document.querySelector(".lightbox");
  const img = document.querySelector(".lightbox__img");
  const closeTargets = document.querySelectorAll("[data-close]");

  if (!items.length || !lightbox || !img) return;

  items.forEach((btn) => {
    btn.addEventListener("click", () => {
      const full = btn.getAttribute("data-full");
      const alt = btn.querySelector("img")?.getAttribute("alt") || "";
      img.src = full;
      img.alt = alt;
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
    });
  });

  function close() {
    lightbox.hidden = true;
    img.src = "";
    document.body.style.overflow = "";
  }

  closeTargets.forEach((el) => el.addEventListener("click", close));

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lightbox.hidden) close();
  });
});

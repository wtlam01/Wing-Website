if (key === 'all' || bag.includes(key)) {
  item.classList.remove('is-hidden');
} else {
  item.classList.add('is-hidden');
}


<script>
  // target section to scroll to
  const targetSelector = "#projects"; // 改成你下一節的 id
  const scrollHint = document.querySelector(".scroll-hint");

  if (scrollHint) {
    // click -> smooth scroll
    scrollHint.addEventListener("click", () => {
      const target = document.querySelector(targetSelector);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      else window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    });

    // mobile tap/press -> toggle “arrow mode”
    const activate = () => scrollHint.classList.add("is-active");
    const deactivate = () => scrollHint.classList.remove("is-active");

    scrollHint.addEventListener("touchstart", activate, { passive: true });
    scrollHint.addEventListener("touchend", () => {
      // keep it active briefly so user sees the change
      setTimeout(deactivate, 900);
    });

    // also support mouse down (optional)
    scrollHint.addEventListener("mousedown", activate);
    scrollHint.addEventListener("mouseup", () => setTimeout(deactivate, 400));
    scrollHint.addEventListener("mouseleave", deactivate);
  }
</script>

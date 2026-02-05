// if (key === 'all' || bag.includes(key)) {
//   item.classList.remove('is-hidden');
// } else {
//   item.classList.add('is-hidden');
// }


// target section to scroll to
document.addEventListener("DOMContentLoaded", () => {
  const scrollHint = document.querySelector(".scroll-hint");
  const target = document.querySelector("#home-main");

  if (scrollHint && target) {
    scrollHint.addEventListener("click", () => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
});



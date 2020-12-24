// make navbar fixed
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  nav.classList.toggle("fixed", window.scrollY > 0);
});

// reveal projects when scrolling down
window.addEventListener("scroll", () => {
  const reveal = document.querySelector(".reveal");

  const windowHeight = window.innerHeight;
  const revealTop = reveal.getBoundingClientRect().top;
  const revealPoint = 150;

  if (revealTop < windowHeight - revealPoint) {
    reveal.classList.add("active");
  }
});

// hamburger-menu
const navSlider = () => {
  const burgerMenu = document.querySelector(".hamburger-menu");
  const nav = document.querySelector(".links");
  const links = document.querySelectorAll(".links li");

  burgerMenu.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    links.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `linkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    burgerMenu.classList.toggle("toggle");
  });
};
navSlider();

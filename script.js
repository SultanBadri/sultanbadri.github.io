const backToTopButton = document.getElementById("back-to-top");
const colorToggle = document.getElementById("color-toggle-input");

// Typing effect with typed.js
const typed = new Typed(".animate", {
  strings: ["student.", "coder.", "game lover.", "MMA fan."],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

// Make navbar fixed
function stickyNav() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("fixed", window.scrollY > 0);
}

// Lazy load background images
document.addEventListener("DOMContentLoaded", function () {
  const lazyBackgrounds = [].slice.call(
    document.querySelectorAll(".lazy-background")
  );

  if ("IntersectionObserver" in window) {
    let lazyBackgroundObserver = new IntersectionObserver(function (
      entries,
      _
    ) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          lazyBackgroundObserver.unobserve(entry.target);
        }
      });
    });

    lazyBackgrounds.forEach(function (lazyBackground) {
      lazyBackgroundObserver.observe(lazyBackground);
    });
  }
});

// Reveal projects
function revealProjects() {
  const reveal = document.querySelector(".reveal");

  const windowHeight = window.innerHeight;
  const revealTop = reveal.getBoundingClientRect().top;
  const revealPoint = 150;

  if (revealTop < windowHeight - revealPoint) {
    reveal.classList.add("active");
  }
}

// Mobile hamburger-menu
function navSlider() {
  const burgerMenu = document.querySelector(".hamburger-menu");
  const nav = document.querySelector(".links");
  const links = document.querySelectorAll(".links li");

  burgerMenu.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    links.forEach((link, index) => {
      if (link.style.animation) link.style.animation = "";
      else {
        link.style.animation = `linkFade 0.4s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    burgerMenu.classList.toggle("toggle");
  });
}
navSlider();

// Button entrance and exit
function scrollDownFunction() {
  if (window.pageYOffset > 1800) {
    // Show backToTopButton
    if (!backToTopButton.classList.contains("btn-entrance")) {
      backToTopButton.classList.remove("btn-exit");
      backToTopButton.classList.add("btn-entrance");
      backToTopButton.style.display = "block";
    }
  } else {
    // Hide backToTopButton
    if (backToTopButton.classList.contains("btn-entrance")) {
      backToTopButton.classList.remove("btn-entrance");
      backToTopButton.classList.add("btn-exit");
      setTimeout(() => {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

// Back to top button
function backToTop() {
  window.scrollTo(0, 0);
}

// Toggle dark mode
function checkMode() {
  if (colorToggle.checked) darkModeOn();
  else darkModeOff();
}

function darkModeOn() {
  document.body.classList.add("light-mode");
}

function darkModeOff() {
  document.body.classList.remove("light-mode");
}

window.addEventListener("scroll", stickyNav);
window.addEventListener("scroll", revealProjects);
window.addEventListener("scroll", scrollDownFunction);
backToTopButton.addEventListener("click", backToTop);
colorToggle.addEventListener("click", checkMode);

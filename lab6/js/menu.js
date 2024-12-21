const hamburger = document.querySelector(".hamburger");
const nav_menu = document.querySelector(".main-navigation");
const page = document.querySelector(".page");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger--menu-open");
  nav_menu.classList.toggle("main-navigation--menu-open");
  page.classList.toggle("page--menu-open");

});

document.querySelectorAll(".site-navigation__link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("hamburger--menu-open");
    nav_menu.classList.remove("main-navigation--menu-open");
    page.classList.remove("page--menu-open");
  })
);

document.querySelectorAll(".user-navigation__button").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("hamburger--menu-open");
    nav_menu.classList.remove("main-navigation--menu-open");
    page.classList.remove("page--menu-open");
  })
);

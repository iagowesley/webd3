const hamburgerMenu = document.querySelector(".hamburger-menu");
const menu1 = document.querySelector(".menu-1");

hamburgerMenu.addEventListener("click", function () {
  menu1.classList.toggle("active");
});

const hamburgerIcon = document.querySelector(".hamburger-menu img");

hamburgerMenu.addEventListener("click", function () {
  hamburgerIcon.classList.toggle("active");
});

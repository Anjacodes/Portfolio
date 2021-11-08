const hamMenu = document.getElementsByClassName("menu");
const mobileMenu = document.getElementsByClassName("mobMenu");
const closeMobMenu = document.getElementById("closeMenu");
const mobLinks = document.querySelectorAll(".mobMenu > ul > li");

hamMenu[0].addEventListener("click", function () {
  mobileMenu[0].style.display = "block";
});

closeMobMenu.addEventListener("click", function () {
  mobileMenu[0].style.display = "none";
});

console.log("İYİĞ AKŞAMLAR DELİKANLIĞ!!!!");

const hamburgerMenuOpen = document.getElementById("hamburger-menu-open");
const hamburgerMenu = document.getElementById("hamburger-menu");
const hamburgerMenuClose = document.getElementById("hamburger-menu-close");

hamburgerMenuOpen.addEventListener("click", function () {
  hamburgerMenu.classList.add("is-open");
});
hamburgerMenuClose.addEventListener("click", function () {
  hamburgerMenu.classList.remove("is-open");
});
// bu kısım modal windowu kapatmak için
const orderServiceButton = document.getElementById("order-service-button");
const modalDiv = document.getElementById("modal-div");
const modalWindowClose = document.getElementById("modal-window-close");

function toggle() {
  var modal = document.getElementById("modal-div");
  modal.classList.toggle("is-open");
}
function toggleMenu() {
  var menu = document.getElementById("mobile-toggle-menu");
  menu.classList.toggle("is-open");
}

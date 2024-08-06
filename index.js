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
const modalWindowOpen = document.getElementById("modal-window-open");
const modalDiv = document.getElementById("modal-div");
const modalWindowClose = document.getElementById("modal-window-close");

modalWindowOpen.addEventListener("click", function () {
  modalDiv.classList.add("is-open");
});

modalWindowClose.addEventListener("click", function () {
  modalDiv.classList.remove("is-open");
});

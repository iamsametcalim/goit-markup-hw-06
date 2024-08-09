console.log("first-js");

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

function openModal() {
  document.getElementById("modal-div").classList.add("is-open");
}

function closeModal() {
  document.getElementById("modal-div").classList.remove("is-open");
}

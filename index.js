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
const modalWindowClose = document.getElementById("modal-window-close");
const modalPencere = document.getElementById("modal-pencere");

orderServiceButton.addEventListener("click", function () {
  modalPencere.style.display = "block";
});

modalWindowClose.addEventListener("click", function () {
  modalPencere.style.display = "none";
});

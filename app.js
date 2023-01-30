// MENU PARA MOBILE
function copyMenu() {
  //COPIANDO DO LADO DE DENTRO .dpt-cat PARA .departaments
  const dptCategory = document.querySelector(".dpt-cat");
  const dptPlace = document.querySelector(".departments");
  dptPlace.innerHTML = dptCategory.innerHTML;

  //COPIANDO DO LADO DE DENTRO nav PARA nav
  const mainNav = document.querySelector(".header-nav nav");
  const navPlace = document.querySelector(".off-canvas nav");
  navPlace.innerHTML = mainNav.innerHTML;

  //COPIANDO .header-top .wrapper PARA .thetop-nav
  const topNav = document.querySelector(".header-top .wrapper");
  const topPlace = document.querySelector(".off-canvas .thetop-nav");
  topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

//  MOSTRAR MENU MOBILE
const menuButton = document.querySelector(".trigger"),
  closeButton = document.querySelector(".t-close"),
  addclass = document.querySelector(".site");

menuButton.addEventListener("click", () => {
  addclass.classList.toggle("showmenu");
});
closeButton.addEventListener("click", () => {
  addclass.classList.remove("showmenu");
});

// MOSTRAR SUB MENU NO MOBILE
const submenu = document.querySelectorAll(".has-child .icon-small");
submenu.forEach((menu) => menu.addEventListener("click", toggle));

function toggle(e) {
  e.preventDefault();

  submenu.forEach((item) =>
    item != this ? item.closest(".has-child").classList.remove("expand") : null
  );

  if (this.closest(".has-child").classList != "expand");
  this.closest(".has-child").classList.toggle("expand");
}

// SLIDER
const swiper = new Swiper(".swiper", {
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

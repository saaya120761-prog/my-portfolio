const menuBtn = document.querySelector(".menu-btn");
const menuOverlay = document.querySelector(".menu-overlay");
const menuBackdrop = document.querySelector(".menu-backdrop");
const menuClose = document.querySelector(".menu-close");
const menuLinks = document.querySelectorAll(".menu-nav a");


function openMenu() {
  menuOverlay.classList.add("is-open");
  menuBackdrop.classList.add("is-open");
}


function closeMenu() {
  menuOverlay.classList.remove("is-open");
  menuBackdrop.classList.remove("is-open");
}


/* 三本線 → 開く */
menuBtn.addEventListener("click", openMenu);


/* × → 閉じる */
menuClose.addEventListener("click", closeMenu);


/* 左側をクリック → 閉じる */
menuBackdrop.addEventListener("click", closeMenu);


/* ABOUTなど → 閉じる */
menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

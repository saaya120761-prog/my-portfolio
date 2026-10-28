document.addEventListener("DOMContentLoaded", () => {

  const opening = document.getElementById("opening");
  const fv = document.querySelector(".fv");

  if (!opening) return;

  // このタブでオープニングを見たことがあるか
  const hasSeenOpening = sessionStorage.getItem("hasSeenOpening");

  // すでに見ていたら、すぐTOPを表示
  if (hasSeenOpening) {
    opening.style.display = "none";

    if (fv) {
      fv.classList.add("is-show");
    }

    return;
  }

  // 初回だけオープニングを再生
  setTimeout(() => {
    opening.classList.add("is-finished");
  }, 3200);

  setTimeout(() => {
    if (fv) {
      fv.classList.add("is-show");
    }
  }, 3600);

  setTimeout(() => {
    opening.style.display = "none";

    // 「一度見た」と記録
    sessionStorage.setItem("hasSeenOpening", "true");
  }, 4400);

});



const scrollGuide = document.querySelector(".fv__scroll");

window.addEventListener("scroll", () => {

  if (!scrollGuide) return;

  if (window.scrollY > 80) {
    scrollGuide.classList.add("is-hide");
  } else {
    scrollGuide.classList.remove("is-hide");
  }

});

/* メニューリンクを押したら閉じる */
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuOverlay.classList.remove("is-open");
  });
});

/* メニューの中をクリックしても閉じない */
menuOverlay.addEventListener("click", (e) => {
  e.stopPropagation();
});

/* メニュー以外をクリックしたら閉じる */
document.addEventListener("click", () => {
  menuOverlay.classList.remove("is-open");
});


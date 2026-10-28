
document.addEventListener("DOMContentLoaded", () => {

  const items =
    document.querySelectorAll(".works-showcase-item");

  const prev =
    document.querySelector(".works-nav-prev");

  const next =
    document.querySelector(".works-nav-next");

  const dotsBox =
    document.querySelector(".works-showcase-dots");

  let current = 0;


  /* ドット作成 */

  items.forEach((item, index) => {

    const dot = document.createElement("button");

    dot.type = "button";

    dot.classList.add("works-showcase-dot");

    dot.addEventListener("click", () => {

      current = index;

      updateWorks();

    });

    dotsBox.appendChild(dot);

  });


  const dots =
    document.querySelectorAll(".works-showcase-dot");


  function updateWorks() {

    const total = items.length;

    const left =
      (current - 1 + total) % total;

    const right =
      (current + 1) % total;


    items.forEach((item, index) => {

      item.classList.remove(
        "is-main",
        "is-left",
        "is-right",
        "is-hidden"
      );


      if (index === current) {

        item.classList.add("is-main");

      }

      else if (index === left) {

        item.classList.add("is-left");

      }

      else if (index === right) {

        item.classList.add("is-right");

      }

      else {

        item.classList.add("is-hidden");

      }

    });


    dots.forEach((dot, index) => {

      dot.classList.toggle(
        "is-active",
        index === current
      );

    });

  }


  next.addEventListener("click", () => {

    current =
      (current + 1) % items.length;

    updateWorks();

  });


  prev.addEventListener("click", () => {

    current =
      (current - 1 + items.length)
      % items.length;

    updateWorks();

  });


  updateWorks();

});

"use strict";

// Función handler reusable que muestra u oculta los collapsibles
function showCollapsible(event) {
  // Definición de variables (ARRAYS)
  const colDiv = document.querySelectorAll(".js-collapsibleParent");
  const colTitle = document.querySelectorAll(".js-collapsibleParent > h3");
  const colArrow = document.querySelectorAll(".js-collapsibleParent > .arrow");
  const colBox = document.querySelectorAll(".js-collapsibleChild");

  // Caso 1: Pulsamos design
    card.classList.remove("large");
    
  if (
    event.target === colTitle[0] ||
    event.target === colArrow[0] ||
    event.target === colDiv[0]
  ) {
    colBox[0].classList.toggle("hide-design");
    colBox[1].classList.add("hide-fill");
    colBox[2].classList.add("hide-share");

    colArrow[0].classList.toggle("arrow-active");
    colArrow[1].classList.remove("arrow-active");
    colArrow[2].classList.remove("arrow-active");

    // Caso 2: Pulsamos fill
  } else if (
    event.target === colTitle[1] ||
    event.target === colArrow[1] ||
    event.target === colDiv[1]
  ) {
    colBox[0].classList.add("hide-design");
    colBox[1].classList.toggle("hide-fill");
    colBox[2].classList.add("hide-share");

    colArrow[0].classList.remove("arrow-active");
    colArrow[1].classList.toggle("arrow-active");
    colArrow[2].classList.remove("arrow-active");

    // animate card-prewview
    card.classList.toggle("large");

    // Caso 3: pulsamos share
  } else if (
    event.target === colTitle[2] ||
    event.target === colArrow[2] ||
    event.target === colDiv[2]
  ) {
    colBox[0].classList.add("hide-design");
    colBox[1].classList.add("hide-fill");
    colBox[2].classList.toggle("hide-share");

    colArrow[0].classList.remove("arrow-active");
    colArrow[1].classList.remove("arrow-active");
    colArrow[2].classList.toggle("arrow-active");
  }
}

document.addEventListener("click", showCollapsible);

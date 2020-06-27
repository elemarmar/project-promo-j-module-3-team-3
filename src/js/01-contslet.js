'use strict';


// Función handler reusable que muestra u oculta los collapsibles
function showCollapsible(event) {

  // Definición de variables (ARRAYS)
  const colTitle = document.querySelectorAll('.js-collapsibleParent > h3');
  const colArrow = document.querySelectorAll('.js-collapsibleParent > .arrow');
  const colBox = document.querySelectorAll('.js-collapsibleChild');


  // Caso 1: Pulsamos design
  if (event.target === colTitle[0] || event.target === colArrow[0]) {
    colBox[0].classList.toggle('hidden');
    colBox[1].classList.add('hidden');
    colBox[2].classList.add('hidden');

  // Caso 2: Pulsamos fill
  } else if (event.target === colTitle[1] || event.target === colArrow[1]) {
    colBox[0].classList.add('hidden');
    colBox[1].classList.toggle('hidden');
    colBox[2].classList.add('hidden');

  // Caso 3: pulsamos share
  } else if (event.target === colTitle[2] || event.target === colArrow[2]) {
    colBox[0].classList.add('hidden');
    colBox[1].classList.add('hidden');
    colBox[2].classList.toggle('hidden');
  }
}

document.addEventListener('click', showCollapsible);



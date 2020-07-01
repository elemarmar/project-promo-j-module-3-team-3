'use strict';


// Función handler reusable que muestra u oculta los collapsibles
function showCollapsible(event) {

  // Definición de variables (ARRAYS)
  const colTitle = document.querySelectorAll('.js-collapsibleParent > h3');
  const colArrow = document.querySelectorAll('.js-collapsibleParent > .arrow');
  const colBox = document.querySelectorAll('.js-collapsibleChild');


  // Caso 1: Pulsamos design
  if (event.target === colTitle[0] || event.target === colArrow[0]) {
    colBox[0].classList.toggle('animate-design');
    colBox[1].classList.add('animate-fill');
    colBox[2].classList.add('animate-share');

    colArrow[0].classList.toggle('arrow-active');
    colArrow[1].classList.remove('arrow-active');
    colArrow[2].classList.remove('arrow-active');
    card.classList.remove('large');

  // Caso 2: Pulsamos fill
  } else if (event.target === colTitle[1] || event.target === colArrow[1]) {
    colBox[0].classList.add('animate-design');
    colBox[1].classList.toggle('animate-fill');
    colBox[2].classList.add('animate-share');
      
    colArrow[0].classList.remove('arrow-active');
    colArrow[1].classList.toggle('arrow-active');
      colArrow[2].classList.remove('arrow-active');
      
      // animate card-prewview
      card.classList.toggle('large');
      
  // Caso 3: pulsamos share
  } else if (event.target === colTitle[2] || event.target === colArrow[2]) {
    colBox[0].classList.add('animate-design');
    colBox[1].classList.add('animate-fill');
    colBox[2].classList.toggle('animate-share');
      
    colArrow[0].classList.remove('arrow-active');
    colArrow[1].classList.remove('arrow-active');
      colArrow[2].classList.toggle('arrow-active');
      card.classList.remove('large');
  }
}

document.addEventListener('click', showCollapsible);



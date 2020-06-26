'use strict';

//COLAPSABLE
const design = document.querySelector('.container__design--title');
const designCollapsable = document.querySelector('.palettes__container');



function showCollapsable() {
  console.log("Hello");
  if (designCollapsable.classList.contains('hidden')) {
    console.log("remove hidden");
    designCollapsable.classList.remove('hidden'); // quita hidden

    // otros: añadir hidden
  } else {
    designCollapsable.classList.add('hidden');
    console.log("add hidden");
    // pon hidden
  }

}
design.addEventListener('click',showCollapsable);
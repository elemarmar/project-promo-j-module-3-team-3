// Función que muestra slide elegido y esconde las otras
// function(posicion actual + 1)

// Estamos en Bernard: posición 1
// ---> pulsamos next
// console.log("H");

let slideIndex = 1;

function showSlide(n) {
    let slides = document.querySelectorAll(".js-slide");
    


  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1; // Array con 4 items --> última posición: 3
  }


    
  // esconder todos
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

  // mostrar elegido
    slides[slideIndex].style.display = "flex";
}

// Slide posición 1 se muestra (demás -> hidden)
// ---> next -->> mostrar slide posición (posición actual + 1)
// ---> prev -->> mostrar slide posición (posición actual - 1)

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

// Next: +1
next.addEventListener("click", function () {
  plusSlide(1);
});

// Prev: -1
prev.addEventListener("click", function () {
  plusSlide(-1);
});

// Actualizar index
function plusSlide(n) {
  clearInterval(timer);
  showSlide((slideIndex += n));
}


// Automation:
const timer = setInterval(function () {
    showSlide(slideIndex += 1);
}, 3000);
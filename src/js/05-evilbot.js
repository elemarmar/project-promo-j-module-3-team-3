'use strict'

let evilChat = document.querySelector('.evil-chat');
let evilContainer = document.querySelector('.evil-chat__container');
const evilBot = document.querySelector('.evil-bot');

/**************************************************
 *                  FRASES
 */
// Aquí arrays que contienen posibles frases por
// temática
const greetings = [
    `Diría que me alegro de verte, pero mentiría`,
      `Hoy es un gran día para conquistar el mundo`,
      `Hdsfadsfadsgfdghfsdhgfhgfdh`,
      `HOLA.`,
     `EXAMEEEEEN!!!`
];
  
  /*~~~~~~~~~  Email  ~~~~~~~~*/
  const emailReaction = [
    `Pero, ¡revisa luego los correos que te lleguen!`,
    `¿Email? ¿Todavía no domináis la telepatía?`,
  ];

inputEmail.addEventListener('blur', function () {
    evilTalk(emailReaction, 4000);
  })
  
  /*~~~~~~~~~  Phone  ~~~~~~~~*/
  const phoneReaction = [
    `Da igual que pongas tu teléfono porque siempre tienes el móvil en silencio`,
    `El teléfono no es obligatorio, porque a ti nunca te llama nadie`,
  ];
//   inputPhone.addEventListener('blur', function () {
//     evilTalk(phoneReaction, 4000);
//   })
  
  
  /*~~~~~~~~~  Linkedin  ~~~~~~~~*/
  const linkedinReaction = [
    `Linkedin es el instagram de los trabajos. ¡Todo es potureo!`,
    `Actualiza tu foto de Linkedin que la que tienes es de hace 10 años`,
  ];

//   inputLinkedin.addEventListener('blur', function () {
//     evilTalk(linkedinReaction, 4000);
//   })
  
  /*~~~~~~~~~  Github  ~~~~~~~~*/
  const githubReaction = [
    `¡Gracias! Así podré robarte tu código`,
    `¿Sabes que tener github no te convierte en programadora, verdad?`,
  ];

//   inputGithub.addEventListener('blur', function () {
//     evilTalk(githubReaction, 4000);
//   })
  
  /*~~~~~~~~~  Create Card  ~~~~~~~~*/
  const createCard = [
    `Ya tienes lo que querías, ¿me puedes dejar en paz?`,
    `Estupendo, ahora tus datos están en mi poder ¡muahaha!`,
  ];
  buttonCard.addEventListener('click', function () {
    evilTalk(createCard, 5000);
  })
  
  /*~~~~~~~~~  Reset  ~~~~~~~~*/
  const reset = [
    `¡No estás conforme con nada! ¿te apetece destruir el mundo conmigo?`,
    `Equivocarse es humano...y los humanos deben ser destruidos`,
  ];
  
  /*~~~~~~~~~  Hover  ~~~~~~~~*/
  const hooverBoot = [
    `¡ Quita tus sucias manos de encima, humano!`,
    `¿Se puede saber que demonios haces?`,
    `¡Acabaré contigo y con tu ridículo planeta!`,
  ];

form.addEventListener('keyup', function () {
    updateMessages();
})


function updateMessages() {
    /*~~~~~~~~~  Greetings  ~~~~~~~~*/

  
    /*~~~~~~~~~  Name  ~~~~~~~~*/
    const name = [
        `<b>${inputName.value}</b>, ¿sabes que he venido a conquistar tu mundo?`,
        `Encantado, <b>${inputName.value}</b>, me alegra conocer tu nombre antes de acabar contigo`,
    ];
    // Reacción a name
    inputName.addEventListener('blur', function () {
        evilTalk(name, 4000);
    });
  
  
    /*~~~~~~~~~  Job  ~~~~~~~~*/
    const jobReaction = [
        `Vaya, como <b>${inputJob.value}</b> debes tener buen sueldo ¡Qué pena que vaya a destruir el mundo`,
        `¿Trabajar? Por eso los humanos sois una especie inferior`,
    ];
    // Reacción a job
    inputJob.addEventListener('blur', function () {
        evilTalk(jobReaction, 4000);
    });
}

  
  /*~~~~~~~~~  Missing inputs  ~~~~~~~~*/
  let missingInputs = [];
  // Te falta rellenar: "bla, bla, bla, bla"
  
  



//FLUJO

//greetings al iniciar la página sale aleatoriamente una de las dos frases

//const name blur para que al acabar de escribir se ejecute aleatoriamente la frase
//BLUR NOS SERVIRÍA PARA TODO?
//En las palettes, comparte debería ser click

// Al hacer hoover se ejecute una función con frases aleatorias.

/**************************************************
 *                  FUNCIONES
 */


/*--------------. RANDOM NUMBER  .---------------*/
// Función que genera un número aleatorio del 0
// al (n - 1)
function randomN(max) {
  return Math.floor(Math.random() * max);
}



/*-------------.   EVIL TALK    .---------------*/
// Función que hace que hable:
// aparece burbuja
// Dispara la frase
// Hace que se ponga en modo gif durante unos segundos
// Desaparece burbuja
function evilTalk(text, seconds) {

  // Efectos burbuja de texto
  evilBot.classList.add('talk');
  evilContainer.classList.add('fadein');

  // Cambia texto
  evilChat.innerHTML = text[randomN(text.length)];

  // Desaparcer burbuja despupés x segundos
  setTimeout(function () {
    evilContainer.classList.add('fadeout');
    evilContainer.classList.remove('fadein');
    evilBot.classList.remove('talk');
  }, seconds);
}



/**************************************************
 *                  LLAMADAS
 */

      /*~~~~~~~~~  LocalStorage  ~~~~~~~~*/
  // Reacción si hay localStorage: algo tipo me acuerdo de ti, o algo así
    if (JSON.parse(localStorage.getItem('userData')).name) {
        evilTalk(greetings, 5000);
        const name = JSON.parse(localStorage.getItem('userData')).name;
        const localStorageReaction = [
            `Vaya, vaya <b>${name}</b> con que de vuelta, ¿eh?`,
            `Parece que no has tenido un buen día, <b>${name}</b>, se te ven las ojeras.`,
            `¿Otra vez aquí, <b>${name}</b>? ¿Es que no tienes amigos? Ha, ha, ha.`
        ];
        evilTalk(localStorageReaction, 5000);
    } else {
      
// Saludo nada más cargar la página
    evilTalk(greetings, 4000);
    }



// Reacción a hacer hover sobre el tentáculo
evilBot.addEventListener('mouseover', function () {
    evilTalk(hooverBoot, 4000);
});


// Reacción a reset
buttonReset.addEventListener('click', function () {
    evilTalk(reset, 4000);
});

// Reacción a paletas



  /*~~~~~~~~~  Palettes  ~~~~~~~~*/
  const palettesReaction = [
    `¡Qué color más absurdo!`,
    `¡Buuuh, ese color es muy soso!`,
    `¿Esos colores? ¿En serio?`,
    `¡Ese es perfecto! Buena elección.`,
  ];



    /*~~~~~~~~~  Images  ~~~~~~~~*/
    const imageReaction = [
        `Tienes una belleza muy particular`,
        `Bueno, si no tienes otra mejor...`,
    ];
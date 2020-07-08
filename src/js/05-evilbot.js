let evilChat = document.querySelector(".evil-chat");

//Frases
const greetings = [
  `Diría que me alegro de verte, pero mentiría`,
    `Hoy es un gran día para conquistar el mundo`,
    `Hdsfadsfadsgfdghfsdhgfhgfdh`,
    `Hoy es un dpojf 9w8qyfj23woifjh efij`,
   `EXAMEEEEEN!!!`
];

function randomN(max) {
   return Math.floor(Math.random() * max) 
}

evilChat.innerHTML= greetings[randomN(greetings.length)];


const name = [
  `{name}, ¿sabes que he venido a conquistar tu mundo?`,
  `Encantado, {name}. Me alegra conocer tu nombre antes de acabar contigo`,
];
// evilChat.innerHTML= name[randomN(name.length)];

const palettesReaction = [
  `¡Qué color más absurdo!`,
  `¡Buuuh, ese color es muy soso!`,
  `¿Esos colores? ¿En serio?`,
  `¡Ese es perfecto! Buena elección.`,
];
// evilChat.innerHTML= palettesReaction[randomN(palettesReaction.length)];

const imageReaction = [
  `Tienes una belleza muy particular`,
  `Bueno, si no tienes otra mejor...`,
];
// evilChat.innerHTML= imageReaction[randomN(imageReaction.length)];


const jobReaction = [
  `Vaya, como {job} debes tener buen sueldo ¡Qué pena que vaya a destruir el mundo`,
  `¿Trabajar? Por eso los humanos sois una especie inferior`,
];
// evilChat.innerHTML= jobReaction[randomN(jobReaction.length)];

const emailReaction = [
  `Pero, ¡revisa luego los correos que te lleguen!`,
  `¿Email? ¿Todavía no domináis la telepatía?`,
];
// evilChat.innerHTML= emailReaction[randomN(emailReaction.length)];

const phoneReaction = [
  `Da igual que pongas tu teléfono porque siempre tienes el móvil en silencio`,
  `El teléfono no es obligatorio, porque a ti nunca te llama nadie`,
];
// evilChat.innerHTML= phoneReaction[randomN(phoneReaction.length)];

const linkedinReaction = [
  `Linkedin es el instagram de los trabajos. ¡Todo es potureo!`,
  `Actualiza tu foto de Linkedin que la que tienes es de hace 10 años`,
];
// evilChat.innerHTML= linkedinReaction[randomN(linkedinReaction.length)];

const githubReaction = [
  `¡Gracias! Así podré robarte tu código`,
  `¿Sabes que tener github no te convierte en programadora, verdad?`,
];
// evilChat.innerHTML= githubReaction[randomN(githubReaction.length)];

const createCard = [
  `Ya tienes lo que querías, ¿me puedes dejar en paz?`,
  `Estupendo, ahora tus datos están en mi poder ¡muahaha!`,
];
// evilChat.innerHTML= createCard[randomN(createCard.length)];

const reset = [
  `¡No estás conforme con nada! ¿te apetece destruir el mundo conmigo?`,
  `Equivocarse es humano...y los humanos deben ser destruidos`,
];
// evilChat.innerHTML= reset[randomN(reset.length)];

const hooverBoot = [
  `¡ Quita tus sucias manos de encima, humano!`,
  `¿Se puede saber que demonios haces?`,
  `¡Acabaré contigo y con tu ridículo planeta!`,
];
// evilChat.innerHTML= hooverBoot[randomN(hooverBoot.length)];

let missingInputs = [];
// Te falta rellenar: "bla, bla, bla, bla"

// Función que genera números aleatorios hasta el que le digamos

// Reacción si hay localStorage: algo tipo me acuerdo de ti, o algo así


//FLUJO

//greetings al iniciar la página sale aleatoriamente una de las dos frases

//const name blur para que al acabar de escribir se ejecute aleatoriamente la frase
//BLUR NOS SERVIRÍA PARA TODO?
//En las palettes, comparte debería ser click

// Al hacer hoover se ejecute una función con frases aleatorias.

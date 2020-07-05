// Para compartir en Twitter seguiremos 2 pasos:
// Al hacer clic en el botón de "Enviar" enviaremos el formulario (submit) a un API que devolverá la URL de una web con la tarjeta de visita con la información rellena
// Mostraremos esta URL para que el usuario verifique si la tarjeta está bien definida y un botón de "Compartir" que enlazará a Twitter donde habrá un tweet con texto predefinido que incluye la URL de la tarjeta

function twitterShare(URL) {
  const twitterURL = document.querySelector('.button__twitter');
  twitterURL.href = `
  http://twitter.com/share?text=Aquí tienes mi Maniac coder's Awesome Profile Cards&url=${URL}`;
}

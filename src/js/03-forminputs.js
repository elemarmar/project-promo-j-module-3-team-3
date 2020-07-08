"use strict";

const form = document.querySelector(".form");
const card = document.querySelector(".card__viewer");
const background = document.querySelector(".card-background");
const cardDone = document.querySelector(".js-carddone");
/***********************************
*        PALETAS A TARJETA        *
**********************************/
const palettes = document.querySelectorAll(".palette");

function changeColors(event) {
  background.classList.add("run-animation");
  if (event.target === palettes[0]) {
    card.classList.add("js-palette1");
    card.classList.remove("js-palette2", "js-palette3", "js-palette4");
  } else if (event.target === palettes[1]) {
    card.classList.remove("js-palette3", "js-palette1", "js-palette4");
    card.classList.add("js-palette2");
  } else if (event.target === palettes[2]) {
    card.classList.add("js-palette3");
    card.classList.remove("js-palette2", "js-palette1", "js-palette4");
  } else if (event.target === palettes[3]) {
    card.classList.add("js-palette4");
    card.classList.remove("js-palette3", "js-palette2", "js-palette1");
  }
  
  setTimeout(function () {
    background.classList.remove("run-animation");
  }, 1000);
  for (const palette of palettes) {
    if (palette.checked) {
      checkedPalette = palette.value;
    }
  }
  storeObject();
}

let checkedPalette;
for (const palette of palettes) {
  palette.addEventListener("change", changeColors);
}

/***********************************
*       OBJETOS PERSONA           *
**********************************/
const person = {
  name: document.querySelector(".js-personName"),
  job: document.querySelector(".js-personJob"),
  email: document.querySelector(".js-email"),
  phone: document.querySelector(".js-mobile"),
  linkedin: document.querySelector(".js-linkedin"),
  github: document.querySelector(".js-github"),
  photo: document.querySelector(".card--img"),
};

const defaultPerson = {
  name: "Nombre Apellido",
  job: "Front-end Developer",
};

/*******************************************
*        PINTAR DEL INUPT A TARJETA       *
******************************************/
const inputName = document.querySelector("#name");
const inputJob = document.querySelector("#job");
const inputEmail = document.querySelector("#email");
const inputPhone = document.querySelector("#phone");
const inputLinkedin = document.querySelector("#linkedin");
const inputGithub = document.querySelector("#github");
const buttonCard = document.querySelector(".button__card");
// Array con los links sociales (del input)
const socialIcons = document.querySelectorAll(".social-info");

function paintCard(event) {
  // Paint Name and job
  if (event.target === inputName) {
    person.name.innerHTML =
    inputName.value !== "" ? inputName.value : defaultPerson.name;
  } else if (event.target === inputJob) {
    person.job.innerHTML =
    inputJob.value !== "" ? inputJob.value : defaultPerson.job;
  }
  
  // Paint Email
  else if (event.target === inputEmail) {
    if (inputEmail.value === "" || event.target.checkValidity() === false) {
      person.email.classList.add("hidden");
    } else if (event.target.checkValidity() === true) {
      person.email.href = `mailto:${inputEmail.value}`;
      person.email.classList.remove("hidden");
    }
    
    // Paint Phone
  } else if (event.target === inputPhone) {
    if (inputPhone.value === "" || event.target.checkValidity() === false) {
      person.phone.classList.add("hidden");
      
    } else if (event.target.checkValidity() === true) {
      person.phone.href = `tel:${inputPhone.value}`;
      person.phone.title = inputPhone.value;
      person.phone.classList.remove("hidden");
    }
    
    //Paint linkedin
  } else if (event.target === inputLinkedin) {
    if (inputLinkedin.value === "" || event.target.checkValidity() === false) {
      person.linkedin.classList.add("hidden");
    } else if (event.target.checkValidity() === true) {
      person.linkedin.href = `https://www.linkedin.com/in/${inputLinkedin.value}`;
      person.linkedin.classList.remove("hidden");
    }
  } else if (event.target === inputGithub) {
    if (inputGithub.value === "" || event.target.checkValidity() === false) {
      person.github.classList.add("hidden");
    } else if (event.target.checkValidity() === true) {
      person.github.href = `https://github.com/${inputGithub.value}`;
      person.github.classList.remove("hidden");
    }
  }
  
  // Enable / Disable create button Add Color to ButtonCard
  if (
    inputName.value !== "" &&
    inputJob.avlue !== "" &&
    inputEmail.value !== "" &&
    inputPhone.value !== "" &&
    form.checkValidity() === true
    ) {
      buttonCard.classList.remove("btn--disable");
      buttonCard.classList.add("btn--enable");
      buttonCard.removeAttribute("disabled");
    } else {
      buttonCard.classList.remove("btn--enable");
      buttonCard.classList.add("btn--disable");
      buttonCard.setAttribute("disabled", "");
    }
  }
  
  if (form) {
    form.addEventListener("keyup", handleForm);
     function handleForm(){
      paintCard(event);
      storeObject();
    }
  }
  
  
  
  
  
  // Resetear el formulario
  const buttonReset = document.querySelector(".btn--reset");
  
  function resetForm() {
    document.querySelector(".form").reset();
    person.name.innerHTML = defaultPerson.name;
    person.job.innerHTML = defaultPerson.job;
    person.photo.style.backgroundImage = "url('./assets/images/imagen-prueba.jpg')";
    profilePreview.style.backgroundImage= "none";

    
    if (person.phone.classList.contains(".hidden") === false) {
      person.phone.classList.add("hidden");
    }
    person.phone.href = "";
    
    if (person.email.classList.contains(".hidden") === false) {
      person.email.classList.add("hidden");
    }
    person.email.href = "";
    
    if (person.linkedin.classList.contains(".hidden") === false) {
      person.linkedin.classList.add("hidden");
    }
    person.github.href = "";
    
    if (person.github.classList.contains(".hidden") === false) {
      person.github.classList.add("hidden");
    }
    person.github.href = "";
    
    card.classList.add("js-palette1");
    card.classList.remove("js-palette2", "js-palette3", "js-palette4");
      
  


      
  }
  
if (buttonReset) {
    buttonReset.addEventListener("click", resetForm); 
  }

  
  //BUTTON CREAR TARJETA
  
  let dataObject = {};
  let linkTwitter;
  
  
  
  function createCardObject () {
    showCardDone();
    createDataObject();
    console.log(dataObject);
    sendRequest(dataObject);
    
    
  }
  
  function showCardDone() {
    if (!buttonCard.hasAttribute("disable")) {
      cardDone.classList.remove("hidden");
      buttonCard.classList.add("btn--disable");
      buttonCard.setAttribute("disabled", "");
    }
  }
  
if (buttonCard){
    buttonCard.addEventListener("click", createCardObject);
}
    
  
  
  /*------------------------------------------------*/
  //                  Crear objeto                  //
  /*------------------------------------------------*/
  // let checkedPalette = document.querySelector(`input[name="palette"]:checked`).value;
  
  function createDataObject() {
    dataObject = {
      palette: checkedPalette,
      name: inputName.value,
      job: inputJob.value,
      email: inputEmail.value,
      phone: inputPhone.value,
      linkedin: inputLinkedin.value,
      github: inputGithub.value,
      photo: fr.result
    }
  }
  
  // Mandar request
  function sendRequest(json){
    fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(json),
    headers: {
      'content-type': 'application/json'
    },
  })
  .then(function(resp) { return resp.json(); })
  .then(function(result) { showURL(result); })
  .catch(function(error) { console.log(error); });
}

// Mostrar URL
const linkCard = document.querySelector('.link__card');

function showURL(result){
  if (result.success) {
    linkTwitter = result.cardURL;
    twitterShare(linkTwitter);
    console.log(linkTwitter);
    linkCard.innerHTML = '<a href=' + result.cardURL + ' target="_blank">' + result.cardURL + '</a>';
  }else{
    linkCard.innerHTML = 'Muahaha ¡otro error humano!' + result.error;
  }
}

function twitterShare(urlCard) {
  const twitterURL = document.querySelector('.button__twitter');
  twitterURL.href = `http://twitter.com/share?text=Aquí tienes mi Maniac coder's Awesome Profile Cards🖥️&hashtags=adalaber,promoJemison&user_mentions=Adalab_Digital&url=${urlCard}`;
}



function storeObject() {
  createDataObject();
  localStorage.setItem('userData', JSON.stringify(dataObject));
};


// al arrancar la página
function getFromLocalStorage() {
    const userDataRaw = localStorage.getItem('userData');
    const userData = JSON.parse(userDataRaw);
    if (userData !== null) {
        for (let i = 0; i < palettes.length; i++) {
            if (palettes[i].value === userData.palette) {
                palettes[i].checked = true;
                card.className = "card__viewer";
                card.classList.add(`js-palette${parseInt(i) + parseInt(1)}`);
            }
        }
    
        inputName.value = userData.name;
        person.name.innerHTML = inputName.value ? userData.name : defaultPerson.name;
    
        inputJob.value = userData.job;
        person.job.innerHTML = inputJob.value ? userData.job : defaultPerson.job;
    
        inputEmail.value = userData.email;
        person.email.href = userData.email;
    
        inputPhone.value = userData.phone;
        person.phone.href = userData.phone;
    
        inputLinkedin.value = userData.linkedin;
        person.linkedin.href = userData.linkedin;
    
        inputGithub.value = userData.github;
        person.github.href = userData.github;



        // Paint Email
        if (inputEmail.value !== "") {
            person.email.classList.remove("hidden");
        }
        if (inputPhone.value !== "") {
            person.phone.classList.remove("hidden");
        }
        if (inputLinkedin.value !== "") {
            person.linkedin.classList.remove("hidden");
        }
        if (inputGithub.value !== "") {
            person.github.classList.remove("hidden");
        }
    }
}


if (form) {
    getFromLocalStorage();
}




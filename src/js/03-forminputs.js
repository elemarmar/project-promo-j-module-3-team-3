"use strict";
const form = document.querySelector(".form");
const card = document.querySelector(".card__viewer");
const background = document.querySelector(".card-background");
const cardDone = document.querySelector('.js-carddone');
/***********************************
 *        PALETAS A TARJETA        *
 **********************************/
const palettes = document.querySelectorAll(".palette");

function changeColors(event) {
    background.classList.add("run-animation");
    if (event.target === palettes[0]) {
        card.classList.add('js-palette1');
        card.classList.remove('js-palette2');
        card.classList.remove('js-palette3');
        card.classList.remove('js-palette4');


    } else if (event.target === palettes[1]) {

        card.classList.remove('js-palette3');
        card.classList.add('js-palette2');
        card.classList.remove('js-palette1');
        card.classList.remove('js-palette4');


    } else if (event.target === palettes[2]) {
        card.classList.add('js-palette3');
        card.classList.remove('js-palette2');
        card.classList.remove('js-palette1');
        card.classList.remove('js-palette4');

    } else if (event.target === palettes[3]) {
        card.classList.add('js-palette4');
        card.classList.remove('js-palette3');
        card.classList.remove('js-palette2');
        card.classList.remove('js-palette1');
    }

    setTimeout(function () {
        background.classList.remove("run-animation");
    }, 1000);
}
for (const palette of palettes) {
    palette.addEventListener('change', changeColors);
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
};


const defaultPerson = {
    name: 'Nombre Apellido',
    job: 'Front-end Developer',
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
const buttonCard = document.querySelector('.button__card');
// Array con los links sociales (del input)
const socialIcons = document.querySelectorAll('.social-info');

function paintCard(event) {

    // Paint Name and job
    if (event.target === inputName) {
        person.name.innerHTML = inputName.value !== '' ? inputName.value : defaultPerson.name;
    } else if (event.target === inputJob) {
        person.job.innerHTML = inputJob.value !== '' ? inputJob.value : defaultPerson.job;
    }

    // Paint Email
    else if (event.target === inputEmail) {
        person.email.href = `mailto:${inputEmail.value}`;
        person.email.classList.remove("hidden");
        if (inputEmail.value === "") {
            person.email.classList.add("hidden");
        }



        // Paint Phone
    } else if (event.target === inputPhone) {
        person.phone.href = `tel:${inputPhone.value}`;
        person.phone.title = inputPhone.value;
        person.phone.classList.remove("hidden");
        if (inputPhone.value === "") {
            person.phone.classList.add("hidden");
        }

        //Paint linkedin
    } else if (event.target === inputLinkedin) {
        person.linkedin.href = inputLinkedin.value;
        person.linkedin.classList.remove("hidden");
        if (inputLinkedin.value === "") {
            person.linkedin.classList.add("hidden");
        }
    } else if (event.target === inputGithub) {
        person.github.href = inputGithub.value;
        person.github.classList.remove("hidden");
        if (inputGithub.value === "") {
            person.github.classList.add("hidden");
        }
    }


    // Enable / Disable create button Add Color to ButtonCard
    if (inputName.value === '' || inputJob.avlue === '' || inputEmail.value === '' || inputPhone.value === '') {
        buttonCard.classList.remove('btn--enable');
        buttonCard.classList.add('btn--disable');
        buttonCard.setAttribute('disabled', '');
        console.log("A");
    } else {
        buttonCard.classList.remove('btn--disable');
        buttonCard.classList.add('btn--enable');
        buttonCard.removeAttribute('disabled');
        console.log("B");
    }
}

form.addEventListener("keyup", paintCard);

// Resetear el formulario
const buttonReset = document.querySelector(".btn--reset");

function resetForm() {
    document.querySelector(".form").reset();
    person.name.innerHTML = "Nombre Apellido";
    person.job.innerHTML = "Front-end developer";



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

    card.classList.add('js-palette1');
    card.classList.remove('js-palette2');
    card.classList.remove('js-palette3');
    card.classList.remove('js-palette4');
}

buttonReset.addEventListener("click", resetForm);

//BUTTON CREAR TARJETA



function showCardDone() {
    if (!buttonCard.hasAttribute('disable')) {
        cardDone.classList.remove('hidden');
        buttonCard.classList.add('btn--disable');
        buttonCard.setAttribute('disabled');
    }

}

buttonCard.addEventListener('click', showCardDone);
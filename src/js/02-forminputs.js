"use strict";
const form = document.querySelector(".form");

// Objeto persona (tarjeta)
const person = {
  name: document.querySelector(".js-personName"),
  job: document.querySelector(".js-personJob"),
  email: document.querySelector(".js-email"),
  phone: document.querySelector(".js-phone"),
  linkedin: document.querySelector(".js-linkedin"),
  github: document.querySelector(".js-github"),
};

// Constantes de input
const inputName = document.querySelector("#name");
const inputJob = document.querySelector("#job");
const inputEmail = document.querySelector("#email");
const inputPhone = document.querySelector("#phone");
const inputLinkedin = document.querySelector("#linkedin");
const inputGithub = document.querySelector("#github");

function paintCard(event) {
  console.log("WORKING");

  // Paint Name
  if (event.target === inputName) {
    person.name.innerHTML = inputName.value;

    // Paint Job
  } else if (event.target === inputJob) {
    person.job.innerHTML = inputJob.value;
  }

  // Paint Email
  else if (event.target === inputEmail) {
    person.email.href = person.email.href + inputEmail.value;
    person.email.classList.remove("hidden");
  } else if (event.target === inputPhone) {
    person.phone.href = person.phone.href + inputPhone.value;
    person.phone.classList.remove("hidden");
  }
}

form.addEventListener("keyup", paintCard);

// paint text
// paint image --> NO
// Botón reset
// botón -habilitar deshabilitar y mostrar/ocultar mensaje
// palettes

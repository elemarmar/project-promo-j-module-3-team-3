"use strict";
const form = document.querySelector(".form");

// Objeto persona (tarjeta)
const person = {
  name: document.querySelector(".js-personName"),
  job: document.querySelector(".js-personJob"),
  email: document.querySelector(".js-email"),
  phone: document.querySelector(".js-mobile"),
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
    person.email.href = `mailto:${inputEmail.value}`;
    person.email.classList.remove("hidden");
  } else if (event.target === inputPhone) {
    person.phone.href = `tel:${inputPhone.value}`;
    person.phone.title = inputPhone.value;
    person.phone.classList.remove("hidden");
  } else if (event.target === inputLinkedin) {
    person.linkedin.href = inputLinkedin.value;
    person.linkedin.classList.remove("hidden");
  } else if (event.target === inputGithub) {
    person.github.href = inputGithub.value;
    person.github.classList.remove("hidden");
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
}

buttonReset.addEventListener("click", resetForm);

// paint text
// paint image --> NO
// Botón reset
// botón -habilitar deshabilitar y mostrar/ocultar mensaje
// palettes

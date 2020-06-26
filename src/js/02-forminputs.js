
const form = document.querySelector('.form');


// Objeto persona (tarjeta)
const person = {
    name: document.querySelector('.js-personName'),
    job: document.querySelector('.js-personJob')
}

// Constantes de input
const inputName = document.querySelector('#name');
const inputJob = document.querySelector('#job');


function paintCard(event) {
    console.log("WORKING");
    // Paint Name
    if (event.target === inputName) {
        person.name.innerHTML = inputName.value;

    // Paint Job
    } else if (event.target === inputJob) {
        person.job.innerHTML = inputJob.value;
    }

}

form.addEventListener('keyup', paintCard);
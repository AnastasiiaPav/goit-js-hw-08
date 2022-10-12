import throttle from "lodash.throttle";
// import _ from "lodash.throttle";
// import  throttle from "lodash";

   const form = document.querySelector('.feedback-form');
   const email =  document.querySelector('input');
   const textarea = document.querySelector('textarea');
//    const buttonSub = document.querySelector('button');


form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle( onTextareaInput, 500));

const currentInput = {};

function onTextareaInput(event) {

    currentInput[event.target.name] = event.target.value;
    const savedMessageString = JSON.stringify(currentInput);
    localStorage.setItem('feedback-message', savedMessageString);
   }

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem('feedback-message')

   }

function populateTextarea() {
    const savedMessage = localStorage.getItem('feedback-message');

    if(savedMessage){
      const proverka = JSON.parse(savedMessage);

      email.value = proverka.email;
      textarea.value = proverka.message;
      console.log(typeof proverka);
    }
    // console.log(savedMessage);
    // console.log(typeof savedMessage);
    // console.dir(form);
    
}

populateTextarea()




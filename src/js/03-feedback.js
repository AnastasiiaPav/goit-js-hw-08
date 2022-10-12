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
      const parseMessage = JSON.parse(savedMessage);

      email.value = parseMessage.email ;
      currentInput.email =  parseMessage.email ;

      textarea.value = parseMessage.message;
      currentInput.message = parseMessage.message;
      
      console.log(typeof parseMessage);
    }
    // console.log(savedMessage);
    // console.log(typeof savedMessage);
    // console.dir(form);
    
}

populateTextarea()




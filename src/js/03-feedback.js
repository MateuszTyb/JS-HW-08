import * as storage from './module.js';

let input = document.querySelector('input');
let message = document.querySelector('textarea');
const submitButton = document.querySelector('button');
let throttle = require('lodash.throttle');

throttle((window.onunload = save), [500], []);

function save() {
  let memory = {
    email: input.value,
    message: message.value,
  };

  storage.save('feedback-form-state', JSON.stringify(memory));
}

loadCache();
save();

function loadCache() {
  let memory = JSON.parse(storage.load('feedback-form-state'));

  if (!memory) {
    return;
  } else {
    input.value = memory.email;
    message.value = memory.message;
  }
}

function clearData() {
  localStorage.clear();
  input.value = '';
  message.value = '';
}

submitButton.addEventListener('click', clearData);

console.log(localStorage);

import * as storage from "./module.js";

let email = document.querySelector("input");
let message = document.querySelector("textarea");
const submitButton = document.querySelector("button");
let throttle = require("lodash.throttle");

addEventListener("input", throttle(save, 500));

function save() {
  let memory = {
    email: email.value,
    message: message.value,
  };

  storage.save("feedback-form-state", JSON.stringify(memory));
}

loadCache();
save();

function loadCache() {
  let memory = JSON.parse(storage.load("feedback-form-state"));

  if (!memory) {
    return;
  } else {
    email.value = memory.email;
    message.value = memory.message;
  }
}

function clearData() {
  localStorage.clear();
  email.value = "";
  message.value = "";
}

submitButton.addEventListener("click", clearData);

console.log(localStorage);

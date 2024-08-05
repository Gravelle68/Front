"use strict";

//Implémenter le JS de ma page
var inputNom = document.getElementById("NomInput");
var inputPreNom = document.getElementById("PrenomInput");
var inputMail = document.getElementById("EmailInput");
var inputPassword = document.getElementById("PasswordInput");
var inputValidationPassword = document.getElementById("ConfirmationPasswordInput");
var btnValidation = document.getElementById("btn-validation-inscription");
inputNom.addEventListener("keyup", validateForm);
inputPreNom.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidationPassword.addEventListener("keyup", validateForm); //Function permettant de valider tout le formulaire

function validateForm() {
  var nomOk = validateRequired(inputNom);
  var prenomOk = validateRequired(inputPreNom);
  var mailOk = validateMail(inputMail);
  var passwordOk = validatePassword(inputPassword);
  var passwordConfirmOk = validateConfirmationPassword(inputPassword, inputValidationPassword);

  if (nomOk && prenomOk && mailOk && passwordOk && passwordConfirmOk) {
    btnValidation.disabled = false;
  } else {
    btnValidation.disabled = true;
  }
}

function validateConfirmationPassword(inputPwd, inputConfirmPwd) {
  if (inputPwd.value == inputConfirmPwd.value) {
    inputConfirmPwd.classList.add("is-valid");
    inputConfirmPwd.classList.remove("is-invalid");
    return true;
  } else {
    inputConfirmPwd.classList.add("is-invalid");
    inputConfirmPwd.classList.remove("is-valid");
    return false;
  }
}

function validatePassword(input) {
  // Définir mon regex
  var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
  var passwordUser = input.value;

  if (passwordUser.match(passwordRegex)) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

function validateMail(input) {
  // Définir mon regex
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var mailUser = input.value;

  if (mailUser.match(emailRegex)) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

function validateRequired(input) {
  if (input.value != '') {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}
"use strict";

var mailInput = document.getElementById("EmailInput");
var passwordInput = document.getElementById("passwordInput");
var btnSignin = document.getElementById("btnSignin");
;
btnSignin.addEventListener("click", checkCredentials);

function checkCredentials() {
  // Ici il faudra appeler l'API Pour vérifier les credentials BDD
  if (mailInput.value == "test@mail.com" && passwordInput.value == "123") {
    alert("vous êtes connecté"); //Il faudra récupérer le vrai token

    var token = "bdshqvbjqhsvbdjhsqfbjhdsqfbjhsf";
    setToken(token); //placer ce token en cookie

    setCookie(RoleCookieName, "client", 7);
    window.location.replace("/");
  } else {
    mailInput.classList.add("is-invalid");
    passwordInput.classList.add("is-valid");
  }
}
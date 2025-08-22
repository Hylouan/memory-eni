var form = document.getElementById("form");
var submitButton = document.getElementById("submit");
var textUser = document.getElementById("username");
var textEmail = document.getElementById("email");
var textPassword = document.getElementById("password");
var textConfirmPassword = document.getElementById("confirm-password");
var userCheck = document.getElementById("user-check");
var emailCheck = document.getElementById("email-check");
var passwordCheck = document.getElementById("password-check");
var confirmPasswordCheck = document.getElementById("confirm-password-check");

//quand au moins un champ est rempli le bouton reset devient cliquable
form.addEventListener("input", function () {
  const button = document.getElementById("reset");
  const fields = document.querySelectorAll(".input-field");
  // Vérifie si au moins un champ est rempli
  const atLeastOneFilled = Array.from(fields).some(
    (field) => field.value.trim() !== ""
  );

  if (atLeastOneFilled) {
    button.disabled = false;
    button.classList.remove("opacity-50", "cursor-not-allowed");
  } else {
    button.disabled = true;
    button.classList.add("opacity-50", "cursor-not-allowed");
  }
});


//quand tous les champs sont corrects le bouton submitdevient cliquable
form.addEventListener("input", function () {
  let usernameValid = textUser.value.length >= 3;
  let emailValid = textEmail.value.match(
    /[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/
  );
  let passwordValid = textPassword.value.match(
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{9,}$/
  );
  let confirmPasswordValid = textConfirmPassword.value === textPassword.value;

  let allValid =
    usernameValid && emailValid && passwordValid && confirmPasswordValid;

  if (allValid) {
    submitButton.disabled = false;
    submitButton.classList.remove("opacity-50", "cursor-not-allowed");
  } else {
    submitButton.disabled = true;
    submitButton.classList.add("opacity-50", "cursor-not-allowed");
  }
});


textUser.addEventListener("input", function () {
  let isValid = textUser.value.length >= 3;

  if (textUser.value === "") {
    userCheck.classList.add("hidden");
  } else if (!isValid) {
    userCheck.classList.remove("hidden");
  } else {
    userCheck.classList.add("hidden");
  }
});

textEmail.addEventListener("input", function () {
  let regex = /[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/;
  let isValid = textEmail.value.match(regex);

  if (textEmail.value === "") {
    emailCheck.classList.add("hidden");
  } else if (!isValid) {
    emailCheck.classList.remove("hidden");
  } else {
    emailCheck.classList.add("hidden");
  }
});

//MANQUE FORCE MDP + A MODIFIER
textPassword.addEventListener("input", function () {
  let forceMdpFaible = document.getElementById("faible");
  let forceMdpMoyen = document.getElementById("moyen");
  let forceMdpFort = document.getElementById("fort");
  let regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,}$/;

  forceMdpFaible.style.visibility = "visible";

  if (textPassword.value.match(regex)) {
    passwordCheck.classList.remove("red");
  } else {
    passwordCheck.style.visibility = "visible";
    passwordCheck.classList.add("red");
  }
  //conditions force du mdp
  if (textePassword.value.match(/^(?=.*[\d\W])(?!.* ).{6,}$/)) {
    forceMdpMoyen.style.visibility = "visible";
    if (
      textePassword.value.match(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{9,}$/
      )
    ) {
      forceMdpFort.style.visibility = "visible";
    }
  }
});

textConfirmPassword.addEventListener("input", function () {
  let isValid = textConfirmPassword.value === textPassword.value;

  if (textConfirmPassword.value === "") {
    confirmPasswordCheck.classList.add("hidden");
  } else if (!isValid) {
    confirmPasswordCheck.classList.remove("hidden");
  } else {
    confirmPasswordCheck.classList.add("hidden");
  }
});

//A MODIFIER
//Enregistrer toutes les valeurs des utilisateurs dans une même key du localStorage
var utilisateurs = [];

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  //Enregistre les input dans un tableau associatif json
  const userInfo = {
    nomUtilisateur: texteUser.value,
    email: texteEmail.value,
    mdp: textePassword.value,
  };
  //Récupère valeur stockée dans le local storage
  let newObject = localStorage.getItem("users");
  //Si il y a une valeur elle est récupérée par le tableau "utilisateurs"
  if (newObject !== null) {
    utilisateurs = JSON.parse(newObject);
    let userExists = false;
    //On vérifie que le nom d'utilisateur et le mail ne sont pas déjà dans la tableau
    for (let index = 0; index < utilisateurs.length; index++) {
      if (texteUser.value == utilisateurs[index].nomUtilisateur) {
        alert("Ce nom d'utilisateur est déjà utilisé");
        texteUser.value = "";
        imageUser.src = "images/error.svg";
        userExists = true;
        break;
      } else if (texteEmail.value == utilisateurs[index].email) {
        alert("Cette adresse email est déjà utilisée");
        texteEmail.value = "";
        imageEmail.src = "images/error.svg";
        userExists = true;
        break;
      }
    }
    // Si aucun problème, on ajoute le nouvel utilisateur au tableau
    if (!userExists) {
      utilisateurs.push(userInfo);
      //On transforme le tableau "utilisateur" en string et on l'enregistre dans le localStorage
      localStorage.setItem("users", JSON.stringify(utilisateurs));
      window.location.href = "connexion.html";
    }
  } else {
    //On ajoute le nouvel utilisateur au tableau
    utilisateurs.push(userInfo);
    //On transforme le tableau "utilisateur" en string et on l'enregistre dans le localStorage
    localStorage.setItem("users", JSON.stringify(utilisateurs));
    window.location.href = "connexion.html";
  }
});

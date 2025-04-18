var texteUser = document.getElementById("userName")
var imageUser = document.getElementById("imgUser")
var phraseUser = document.getElementById("textUser")
var texteEmail = document.getElementById("mail")
var imageEmail = document.getElementById("imgEmail")
var phraseEmail = document.getElementById("textEmail")
var textePassword = document.getElementById("password")
var imagePassword = document.getElementById("imgPassword")
var phrasePassword = document.getElementById("textPassword")


document.getElementById("userName").addEventListener("input", function () {
    //quand texte dans les champs le titre du champ reste en haut
    texteUser.classList.add("textInInput");
})

document.getElementById("mail").addEventListener("input", function () {
    //quand texte dans les champs le titre du champ reste en haut
    texteEmail.classList.add("textInInput");
})

document.getElementById("password").addEventListener("input", function () {
    //quand texte dans les champs le titre du champ reste en haut
    textePassword.classList.add("textInInput");
})


//quand tous les champs sont remplis le bouton "Création de compte" devient cliquable
document.getElementById("form").addEventListener("input", function () {
    let buttonEnable = document.getElementById("btnSubmit");
    let champValide = document.querySelectorAll(".input-field:valid");
    if (champValide.length == 3) {
        buttonEnable.classList.remove("disabled");
    }
    if (champValide.length < 3) {
        buttonEnable.classList.add("disabled");
    }
})


var utilisateurs = []
//Vérifier l'existence des inputs dans le localStorage et qu'ils se correspondent
document.getElementById("btnSubmit").addEventListener("click", function (event) {
    event.preventDefault();
    let newObject = localStorage.getItem("users");
    utilisateurs = JSON.parse(newObject)
    let userExists = false;

    for (let index = 0; index < utilisateurs.length; index++) {
        if (texteUser.value == utilisateurs[index].nomUtilisateur && texteEmail.value == utilisateurs[index].email && textePassword.value == utilisateurs[index].mdp) {
            imageUser.style.visibility = "hidden";
            phraseUser.style.visibility = "hidden";
            imageEmail.style.visibility = "hidden";
            phraseEmail.style.visibility = "hidden";
            imagePassword.style.visibility = "hidden";
            phrasePassword.style.visibility = "hidden";
            userExists = false;
            break;
        }
        else if (texteUser.value !== utilisateurs[index].nomUtilisateur) {
            imageUser.style.visibility = "visible";
            imageUser.src = "images/error.svg";
            phraseUser.style.visibility = "visible";
            userExists = true;
            break;
        }
        else if (texteEmail.value !== utilisateurs[index].email) {
            imageEmail.style.visibility = "visible";
            imageEmail.src = "images/error.svg";
            phraseEmail.style.visibility = "visible";
            userExists = true;
            break;
        }

        else if (textePassword.value !== utilisateurs[index].mdp) {
            imagePassword.style.visibility = "visible";
            imagePassword.src = "images/error.svg";
            phrasePassword.style.visibility = "visible";
            userExists = true;
            break;
        }
    }
// Si aucun problème, le champ est validé
if (!userExists) {
    window.location.href = "profil.html";
}
})
//Affiche image Error ou Check selon conditions du champ remplies ou non
document.getElementById("userName").addEventListener("input", function () {
    let texte = document.getElementById("userName")
    let image = document.getElementById("imgUser")
    let phrase = document.getElementById("textUser")

    image.style.visibility = "visible";
    //quand texte dans les champs le titre du champ reste en haut
    texte.classList.add("textInInput");

    if (texte.value.length >= 3) {
        image.src = "images/check.svg";
        phrase.style.visibility = "hidden";
    }
    else {
        image.src = "images/error.svg";
        phrase.style.visibility = "visible";
    }
})
document.getElementById("mail").addEventListener("input", function () {
    let texte = document.getElementById("mail")
    let image = document.getElementById("imgEmail")
    let phrase = document.getElementById("textEmail")
    let regex = /[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/;

    image.style.visibility = "visible";
    //quand texte dans les champs le titre du champ reste en haut
    texte.classList.add("textInInput");

    if (texte.value.match(regex)) {
        image.src = "images/check.svg";
        phrase.style.visibility = "hidden";
    }
    else {
        image.src = "images/error.svg";
        phrase.style.visibility = "visible";
    }
})
document.getElementById("password").addEventListener("input", function () {
    let texte = document.getElementById("password")
    let image = document.getElementById("imgPassword")
    let phrase = document.getElementById("textPassword")
    let forceMdpFaible = document.getElementById("faible")
    let forceMdpMoyen = document.getElementById("moyen")
    let forceMdpFort = document.getElementById("fort")

    let regex = /^(?=.*[0-9])(?=.*[A-Za-z])(?=.*\W)(?!.* ).{6,}$/;

    image.style.visibility = "visible";
    forceMdpFaible.style.visibility = "visible";
    //quand texte dans les champs le titre du champ reste en haut
    texte.classList.add("textInInput");

    if (texte.value.match(regex)) {
        image.src = "images/check.svg";
        phrase.classList.remove("red");
    }
    else {
        image.src = "images/error.svg";
        phrase.style.visibility = "visible";
        phrase.classList.add("red");
    }
    //conditions force du mdp
    if (texte.value.match(/^(?=.*[\d\W])(?!.* ).{6,}$/)) {
        forceMdpMoyen.style.visibility = "visible";
        if (texte.value.match(/^(?=.*[0-9])(?=.*[A-Za-z])(?=.*\W)(?!.* ).{9,}$/)) {
            forceMdpFort.style.visibility = "visible";
        }
    }
})

document.getElementById("confirmPassword").addEventListener("input", function () {
    let texteMdp = document.getElementById("password")
    let texte = document.getElementById("confirmPassword")
    let image = document.getElementById("imgConfirmPassword")
    let phrase = document.getElementById("textConfirmPassword")

    image.style.visibility = "visible";
    //quand texte dans les champs le titre du champ reste en haut
    texte.classList.add("textInInput");

    if (texte.value == texteMdp.value) {
        image.src = "images/check.svg";
        phrase.style.visibility = "hidden";
    }
    else {
        image.src = "images/error.svg";
        phrase.style.visibility = "visible";
    }
})


//quand on clique sur "Annuler" tous les champs de la classe hidden disparaissent
document.getElementById("btnReset").addEventListener("click", function () {
    let hiddenElements = document.getElementsByClassName("hidden");
    let phrase = document.getElementById("textPassword")
    let buttonEnable = document.getElementById("btnSubmit");

    phrase.classList.remove("red");
    buttonEnable.classList.add("disabled");

    for (let i = 0; i < hiddenElements.length; i++) {
        hiddenElements[i].style.visibility = "hidden";
    }
})


//quand tous les champs sont corrects le bouton "Création de compte" devient cliquable
document.getElementById("form").addEventListener("input", function () {
    let buttonEnable = document.getElementById("btnSubmit");
    let champValide = document.querySelectorAll(".input-field:valid");
    if (champValide.length == 4) {
        buttonEnable.classList.remove("disabled");
    }
    if (champValide.length < 4) {
        buttonEnable.classList.add("disabled");
    }
})



//stocker chaque json dans le grand tableau

var utilisateurs=[]

document.getElementById("test").addEventListener("click", function () {
var userName = document.getElementById("userName").value
var userEmail = document.getElementById("mail").value
var userPassword = document.getElementById("password").value
//Enregistre les input dans un tableau associatif json
const userInfo = {
    nomUtilisateur: userName,
    email: userEmail,
    mdp: userPassword,
  };


let newObject = localStorage.getItem("users");
if(newObject!==null){
  console.log(JSON.parse(newObject))    
utilisateurs=JSON.parse(newObject)
console.log(utilisateurs)
}



utilisateurs.push(userInfo)

// console.log(utilisateurs)
//Enregistre tableau "utilisateurs" dans le localStorage
localStorage.setItem("users",JSON.stringify(utilisateurs))


})

// for (let i = 0; i < utilisateurs.length; i++) {
//     localStorage.setItem("users"+[i],JSON.stringify(utilisateurs[i]))
// }


//   let newObject = localStorage.getItem("userInfo");
// console.log(JSON.parse(newObject));





//parcourir le tableau pour vérifier email déja existant
//email déjà utilisé
//nom utilisateur déjà utilisé


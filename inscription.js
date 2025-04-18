var texteUser = document.getElementById("userName")
var imageUser = document.getElementById("imgUser")
var phraseUser = document.getElementById("textUser")
var texteEmail = document.getElementById("mail")
var imageEmail = document.getElementById("imgEmail")
var phraseEmail = document.getElementById("textEmail")
var textePassword = document.getElementById("password")
var imagePassword = document.getElementById("imgPassword")
var phrasePassword = document.getElementById("textPassword")
var texteConfirmPassword = document.getElementById("confirmPassword")
var imageConfirmPassword = document.getElementById("imgConfirmPassword")
var phraseConfirmPassword = document.getElementById("textConfirmPassword")

//Affiche image Error ou Check selon conditions du champ remplies ou non
document.getElementById("userName").addEventListener("input", function () {
    imageUser.style.visibility = "visible";
    //quand texte dans les champs le titre du champ reste en haut
    texteUser.classList.add("textInInput");

    if (texteUser.value.length >= 3) {
        imageUser.src = "images/check.svg";
        phraseUser.style.visibility = "hidden";
    }
    else {
        imageUser.src = "images/error.svg";
        phraseUser.style.visibility = "visible";
    }
})
document.getElementById("mail").addEventListener("input", function () {
    let regex = /[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/;

    imageEmail.style.visibility = "visible";
    //quand texte dans les champs le titre du champ reste en haut
    texteEmail.classList.add("textInInput");

    if (texteEmail.value.match(regex)) {
        imageEmail.src = "images/check.svg";
        phraseEmail.style.visibility = "hidden";
    }
    else {
        imageEmail.src = "images/error.svg";
        phraseEmail.style.visibility = "visible";
    }
})
document.getElementById("password").addEventListener("input", function () {
    let forceMdpFaible = document.getElementById("faible")
    let forceMdpMoyen = document.getElementById("moyen")
    let forceMdpFort = document.getElementById("fort")
    let regex = /^(?=.*[0-9])(?=.*[A-Za-z])(?=.*\W)(?!.* ).{6,}$/;

    imagePassword.style.visibility = "visible";
    forceMdpFaible.style.visibility = "visible";
    //quand texte dans les champs le titre du champ reste en haut
    textePassword.classList.add("textInInput");

    if (textePassword.value.match(regex)) {
        imagePassword.src = "images/check.svg";
        phrasePassword.classList.remove("red");
    }
    else {
        imagePassword.src = "images/error.svg";
        phrasePassword.style.visibility = "visible";
        phrasePassword.classList.add("red");
    }
    //conditions force du mdp
    if (textePassword.value.match(/^(?=.*[\d\W])(?!.* ).{6,}$/)) {
        forceMdpMoyen.style.visibility = "visible";
        if (textePassword.value.match(/^(?=.*[0-9])(?=.*[A-Za-z])(?=.*\W)(?!.* ).{9,}$/)) {
            forceMdpFort.style.visibility = "visible";
        }
    }
})

document.getElementById("confirmPassword").addEventListener("input", function () {
    imageConfirmPassword.style.visibility = "visible";
    //quand texte dans les champs le titre du champ reste en haut
    texteConfirmPassword.classList.add("textInInput");

    if (texteConfirmPassword.value == textePassword.value) {
        imageConfirmPassword.src = "images/check.svg";
        phraseConfirmPassword.style.visibility = "hidden";
    }
    else {
        imageConfirmPassword.src = "images/error.svg";
        phraseConfirmPassword.style.visibility = "visible";
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


//Enregistrer toutes les valeurs des utilisateurs dans une même key du localStorage
var utilisateurs = []

document.getElementById("btnSubmit").addEventListener("click", function (event) {
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
        utilisateurs = JSON.parse(newObject)
        let userExists = false;
        //On vérifie que le nom d'utilisateur et le mail ne sont pas déjà dans la tableau
        for (let index = 0; index < utilisateurs.length; index++) {
            if (texteUser.value == utilisateurs[index].nomUtilisateur) {
                alert("Ce nom d'utilisateur est déjà utilisé")
                texteUser.value = '';
                imageUser.src = "images/error.svg";
                userExists = true;
                break;
            }
            else if (texteEmail.value == utilisateurs[index].email) {
                alert("Cette adresse email est déjà utilisée")
                texteEmail.value = '';
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
        }
    else {
            //On ajoute le nouvel utilisateur au tableau
            utilisateurs.push(userInfo)
            //On transforme le tableau "utilisateur" en string et on l'enregistre dans le localStorage
            localStorage.setItem("users", JSON.stringify(utilisateurs))
            window.location.href = "connexion.html";
        }

    })



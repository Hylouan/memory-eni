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
    let regex=/[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/;

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
    let forceMdp=document.getElementById("forceMdp")
    let regex=/^(?=.*[0-9])(?=.*[A-Za-z])(?=.*\W)(?!.* ).{6,}$/;

    image.style.visibility = "visible";
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
    if (texte.value.length < 6) {
        forceMdp.style.visibility = "visible";
    } else if (password.value.length >= 6 && password.value.length < 9) {
        forceMdp.style.visibility = "visible";

    } else if(password.value.length >= 9){
        console.log("fort")
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

    if (texte.value==texteMdp.value) {
        image.src = "images/check.svg";
        phrase.style.visibility = "hidden";
    }
    else {
        image.src = "images/error.svg";
        phrase.style.visibility = "visible";
    }
})


//Bouton création de compte en disabled
//il est cliquable une fois que tous les champs sont corrects

//enregistrer utilisateur dans le localstorage (tableau d'objet utilisateur)

//email déjà utilisé
//nom utilisateur déjà utilisé


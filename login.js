var textEmail = document.getElementById("email")
var textPassword = document.getElementById("password")


//quand tous les champs sont remplis le bouton submit devient cliquable
document.getElementById("form").addEventListener("input", function () {
    let button = document.getElementById("submit");
    let fields = document.querySelectorAll(".input-field");

    let allFilled = true;

    fields.forEach(field => {
        if (!field.value.trim()) {
            allFilled = false;
        }
    });

    if (allFilled) {
        button.disabled = false;
        button.classList.remove("opacity-50", "cursor-not-allowed");
    } else {
        button.disabled = true;
        button.classList.add("opacity-50", "cursor-not-allowed");
    }
});


var utilisateurs = []
//Vérifier l'existence des inputs dans le localStorage et qu'ils se correspondent
document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();
    let newObject = localStorage.getItem("users");
    utilisateurs = JSON.parse(newObject)
    let userExists = false;

    for (let index = 0; index < utilisateurs.length; index++) {
        if (textEmail.value == utilisateurs[index].email && textPassword.value == utilisateurs[index].mdp) {
            userExists = false;
            break;
        }
        else if (textEmail.value !== utilisateurs[index].email) {
            userExists = true;
            break;
        }

        else if (textPassword.value !== utilisateurs[index].mdp) {
            userExists = true;
            break;
        }
    }
// Si aucun problème, le champ est validé
if (!userExists) {
    window.location.href = "profil.html";
}
})
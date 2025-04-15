function validate() {
    var a = document.getElementById("password").value;
    var b = document.getElementById("confirmPassword").value;
    if (a==b) {
        document.getElementById("hidden").classList.remove("redHidden");
    }
 }
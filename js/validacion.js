function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

const form = document.querySelector("form");

let nombre = document.getElementById ("nombre")

let apellido = document.getElementById ("apellido")

let password1 = document.getElementById ("password1")

let password2 = document.getElementById ("password2")

let email = document.getElementById ("email")

let terminos = document.getElementById ("terminos")


function Registro(event) {
    event.preventDefault();

    if (nombre.value && apellido.value && email.value && password1.value && password2.value && terminos.checked) {
        if (password1.value === password2.value && password1.value.length >= 6) {
            showAlertSuccess();
        } else {
            showAlertError();
        }
    } else {
        showAlertError();
    }
} 

form.addEventListener('submit', Registro);
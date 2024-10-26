function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

let nombre = document.getElementById ("nombre")
nombre.value === '' 

let apellido = document.getElementById ("apellido")
apellido.value ==='' 

let password1 = document.getElementById ("password1")
password1.value ==='' 

let password2 = document.getElementById ("password2")
password2.value ==='' 

let email = document.getElementById ("email")
email.value ==='' 

let terminos = document.getElementById ("terminos")

let button = document.getElementById("regBtn")

function Registro() {
    if (nombre.value !== '' && apellido.value !== '' && password1.value !== '' && password2.value !== '' && email.value !== '' && terminos.checked) {
        if (password1.value === password2.value && password1.value.length >= 6) {
            showAlertSuccess();
        } else {
            showAlertError();
        }
    } else {
        showAlertError();
    }
} 

document.getElementById("regBtn").addEventListener('click', Registro);




const form = document.querySelector("form");
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const checkboxTerminos = document.getElementById("modalTerminosCheckbox");
const feedbackTerminos = document.getElementById("feedbackTerminos");
const btnTerminos = document.getElementById("btnTerminos");
const feedbackModalTerminos = document.getElementById("feedbackModalTerminos");
const labelTerminos = document.getElementById("labelTerminos");
const alertSuccess = document.getElementById("alert-success");
const alertDanger = document.getElementById("alert-danger");

// Variable para rastrear el primer intento de envio
let isFirstSubmitAttempt = true;

// Funcion para validar el checkbox de términos y actualizar el estilo del botón y el label
function validarCheckboxTerminos() {
  if (checkboxTerminos.checked) {
    btnTerminos.classList.add("btn-valid");
    btnTerminos.classList.remove("btn-invalid");
    labelTerminos.classList.add("checkbox-valid");
    labelTerminos.classList.remove("checkbox-invalid");
    feedbackTerminos.style.display = "none";
    feedbackModalTerminos.style.display = "none";
  } else {
    btnTerminos.classList.add("btn-invalid");
    btnTerminos.classList.remove("btn-valid");
    labelTerminos.classList.add("checkbox-invalid");
    labelTerminos.classList.remove("checkbox-valid");
    feedbackTerminos.style.display = "block";
    feedbackModalTerminos.style.display = "block";
  }
}

// envio del form
form.addEventListener("submit", function (event) {
  if (isFirstSubmitAttempt) {
    form.classList.add("was-validated"); // clase de Bootstrap para la validacion visual
    isFirstSubmitAttempt = false; // desactiva el seguimiento del primer intento de envio
  }

  // variable para la validez del formulario
  let isValid = true;

  // validaciones personalizadas
  if (!form.checkValidity() || !checkboxTerminos.checked) {
    event.preventDefault();
    event.stopPropagation();
    alertDanger.classList.add("show");
    validarCheckboxTerminos(); // actualizar el estado del btn y el feedback
  } else {
    alertDanger.classList.remove("show");
    alertSuccess.classList.add("show");
    validarCheckboxTerminos();
  }

  // validacion del email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    email.classList.add('is-invalid');
    email.setCustomValidity("Por favor, introduce un email válido.");
    isValid = false;
  } else {
    email.classList.remove('is-invalid');
    email.setCustomValidity("");
  }

  // validacion de las contraseñas
  if (password1.value.length < 6 || password2.value.length < 6) {
    isValid = false; 
  }

  if (password1.value !== password2.value) {
    password2.setCustomValidity("Las contraseñas no coinciden");
    password2.classList.add('is-invalid'); 
    isValid = false; 
  } else {
    password2.setCustomValidity("");
    password2.classList.remove('is-invalid');
  }

  // form valid
  if (!isValid) {
    event.preventDefault();
    event.stopPropagation();
  } else {
    alert("Tu registro ha sido exitoso!");
  }

});

// validacion en tiempo real para todos los campos
form.addEventListener("input", () => {
  if (!isFirstSubmitAttempt) {
    
    nombre.classList.toggle('is-invalid', !nombre.checkValidity());
    apellido.classList.toggle('is-invalid', !apellido.checkValidity());

    // validacion del email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      email.classList.add('is-invalid');
      email.classList.remove('is-valid');
      email.setCustomValidity("Debe ingresar un email válido");
    } else {
      email.classList.remove('is-invalid');
      email.classList.add('is-valid');
      email.setCustomValidity("");
    }

    // validacion de las contraseñas
    if (password1.value.length >= 6) {
      password1.classList.add('is-valid');
      password1.classList.remove('is-invalid');
    } else {
      password1.classList.add('is-invalid');
      password1.classList.remove('is-valid');
    }

    if (password2.value !== password1.value || password2.value.length < 6) {
      password2.classList.add('is-invalid');
      password2.classList.remove('is-valid');
      password2.setCustomValidity("Debe ser igual a la contraseña");
    } else {
      password2.classList.remove('is-invalid');
      password2.classList.add('is-valid');
      password2.setCustomValidity("");
    }

  }
});

// Escucha de cambios en el checkbox de terminos
checkboxTerminos.addEventListener('change', validarCheckboxTerminos);
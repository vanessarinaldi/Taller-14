const form = document.querySelector("form");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const checkboxTerminos = document.getElementById("modalTerminosCheckbox");
const feedbackTerminos = document.getElementById("feedbackTerminos");
const feedbackModalTerminos = document.getElementById("feedbackModalTerminos");
const alertSuccess = document.getElementById("alert-success");
const alertDanger = document.getElementById("alert-danger");

// Variable para rastrear el primer intento de envío
let isFirstSubmitAttempt = true;

// Al enviar el formulario
form.addEventListener("submit", function (event) {
  if (isFirstSubmitAttempt) {
    form.classList.add("was-validated"); // Agrega la clase de Bootstrap para la validación visual
    isFirstSubmitAttempt = false; // Desactiva el seguimiento del primer intento de envío
  }

  // Validaciones personalizadas
  if (!form.checkValidity() || password1.value !== password2.value || !checkboxTerminos.checked) {
    event.preventDefault();
    event.stopPropagation();

    if (!checkboxTerminos.checked) {
      checkboxTerminos.setCustomValidity("Debe aceptar los términos y condiciones");
      feedbackTerminos.style.display = "block";
      feedbackModalTerminos.style.display = "block";
    } else {
      checkboxTerminos.setCustomValidity("");
      feedbackTerminos.style.display = "none";
      feedbackModalTerminos.style.display = "none";
    }

    if (password1.value !== password2.value) {
      password2.setCustomValidity("Las contraseñas no coinciden");
    } else {
      password2.setCustomValidity("");
    }

    alertDanger.classList.add("show");
  } else {
    alertSuccess.classList.add("show");
    alertDanger.classList.remove("show");
  }
});

// Validación en tiempo real después del primer intento de envío
form.addEventListener("input", () => {
  if (!isFirstSubmitAttempt) {
    if (form.checkValidity()) {
      alertDanger.classList.remove("show");
    }
  }
});
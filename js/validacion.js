document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault(); 

  let isValid = true;

  const nombre = document.getElementById('nombre');
  const apellido = document.getElementById('apellido');
  const email = document.getElementById('email');
  const password1 = document.getElementById('password1');
  const password2 = document.getElementById('password2');
  const terminos = document.getElementById('checkTerminos');
  const feedbackTerminos = document.getElementById('feedbackTerminos');

  
  [nombre, apellido, email, password1, password2].forEach(input => {
      if (!input.value.trim()) {
          input.classList.add('is-invalid');
          isValid = false;
      } else {
          input.classList.remove('is-invalid');
      }
  });

  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
      email.classList.add('is-invalid');
      isValid = false;
  } else {
      email.classList.remove('is-invalid');
  }

  if (password1.value.length < 6) {
      password1.classList.add('is-invalid');
      isValid = false;
  } else {
      password1.classList.remove('is-invalid');
  }

  
  if (password1.value !== password2.value) {
      password2.classList.add('is-invalid');
      isValid = false;
  } else {
      password2.classList.remove('is-invalid');
  }

  
  if (!terminos.checked) {
      feedbackTerminos.style.display = 'block';
      terminos.classList.add('is-invalid');
      isValid = false;
  } else {
      feedbackTerminos.style.display = 'none';
      terminos.classList.remove('is-invalid');
  }

 
  if (isValid) {
      alert ("Tu registro ha sido exitoso!");
  }
});

document.getElementById('checkTerminos').addEventListener('change', function() {
  if (this.checked) {
      document.getElementById('feedbackTerminos').style.display = 'none';
  }
});

function validateForm(event) {
  event.preventDefault();
  const email = document.getElementById("email");
  const confirmEmail = document.getElementById("confirmEmail");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  if (email.value !== confirmEmail.value) {
      alert("Los correos electrónicos no coinciden");
      return false;
  }

  if (password.value !== confirmPassword.value) {
      alert("Las contraseñas no coinciden");
      return false;
  }

  alert("Registro exitoso");

  // Vaciar todos los campos de texto, contraseñas, correos electrónicos y teléfono
  const inputs = document.querySelectorAll('input[type="text"], input[type="password"], input[type="email"], input[type="tel"]');
  inputs.forEach(input => input.value = "");

  // Aquí puedes enviar el formulario si es necesario
  // document.getElementById("registerForm").submit();
}


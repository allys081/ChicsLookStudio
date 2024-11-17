// Función para manejar el inicio de sesión
function loguear(event) {
  event.preventDefault(); // Evita que el formulario recargue la página

  // Obtener valores de los campos
  const username = document.getElementById("username").value.trim();

  if (username === "") {
    alert("Por favor, ingresa un nombre de usuario válido.");
    return;
  }

  // Cambiar el logo por el texto de bienvenida
  const logoContainer = document.getElementById("logo-container");
  logoContainer.innerHTML = `<span>Bienvenido, ${username}</span>`;

  // Mostrar el botón "Cerrar sesión" en el formulario y ocultar el formulario de inicio de sesión
  document.getElementById("logout-btn-in-form").classList.remove("d-none");

  // Mostrar el botón "Cerrar sesión" en la barra de navegación y ocultar "Iniciar sesión"
  document.getElementById("btn-login").classList.add("d-none");
  document.getElementById("btn-logout").classList.remove("d-none");

  alert(`Bienvenido, ${username}`);
}

function cerrarSesion() {
  // Restaurar el logo original
  const logoContainer = document.getElementById("logo-container");
  logoContainer.innerHTML = `<img src="img/inicio_s.png" height="30" alt="Login">`;

  // Vaciar los campos de texto del formulario
  const usernameField = document.getElementById("username");
  const passwordField = document.getElementById("password");

  if (usernameField) usernameField.value = ""; // Vacía el campo de usuario
  if (passwordField) passwordField.value = ""; // Vacía el campo de contraseña

  // Ocultar el botón "Cerrar sesión"
  const logoutButton = document.getElementById("logout-btn-in-form");
  if (logoutButton) {
    logoutButton.classList.add("d-none");
  }

  // Mostrar el formulario de inicio de sesión
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.classList.remove("d-none");
  }

  // Mostrar alerta de cierre de sesión exitoso
  alert("Has cerrado sesión exitosamente.");
}

// Asignar eventos a los botones
document.querySelector("form").addEventListener("submit", loguear); // Maneja inicio de sesión
document.getElementById("logout-btn-in-form").addEventListener("click", cerrarSesion); // Botón de cerrar sesión en formulario



// Verificar sesión al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  if (isLoggedIn) {
    mostrarSesionActiva();
  } else {
    mostrarFormularioLogin();
  }
});


// Función para manejar el inicio de sesión
document.getElementById("login-btn").addEventListener("click", function () {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Simulación de validación (reemplazar por lógica real)
  if (username === "admin" && password === "1234") {
    localStorage.setItem("loggedIn", "true"); // Guardar sesión
    mostrarSesionActiva();
  } else {
    alert("Credenciales incorrectas.");
  }
});

// Función para manejar el cierre de sesión
document.getElementById("logout-btn-in-form").addEventListener("click", function () {
  localStorage.removeItem("loggedIn"); // Eliminar sesión
  mostrarFormularioLogin();
  alert("Has cerrado sesión exitosamente.");
});

// Mostrar sesión activa
function mostrarSesionActiva() {
  // Ocultar formulario de login y mostrar botón de cerrar sesión
  document.getElementById("login-form").classList.add("d-none");
  document.getElementById("logout-btn-in-form").classList.remove("d-none");

  // Mantener el logo intacto
  const logoContainer = document.getElementById("logo-container");
  logoContainer.innerHTML = `<img src="img/inicio_s.png" height="30" alt="Login">`;

  alert("Sesión iniciada exitosamente.");
}

// Mostrar formulario de login
function mostrarFormularioLogin() {
  // Mostrar formulario de login y ocultar botón de cerrar sesión
  document.getElementById("login-form").classList.remove("d-none");
  document.getElementById("logout-btn-in-form").classList.add("d-none");

  // Vaciar los campos del formulario
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}


function contacto(event) {
  event.preventDefault(); // Evita el comportamiento predeterminado del formulario

  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let rut = document.getElementById("rut").value;
  let telefono = document.getElementById("telefono").value;
  let correo = document.getElementById("correo").value;
  let fecha = document.getElementById("fecha").value;
  let servicio = document.getElementById("servicio").value;
  let profesional = document.getElementById("profesional").value;
  let hora = document.getElementById("hora").value;

  // Validar si los campos están vacíos
  if (
      nombre === "" ||
      apellido === "" ||
      rut === "" ||
      telefono === "" ||
      correo === "" ||
      fecha === "" ||
      servicio === "" ||
      profesional === "" ||
      hora === ""
  ) {
      alert("Por favor, complete todos los campos.");
      return false; // Detiene el proceso si hay campos vacíos
  }

  // Si todo está bien, mostrar mensaje y vaciar los campos
  alert("Solicitud enviada a nuestros profesionales.");

  // Vaciar los campos
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("rut").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("correo").value = "";
  document.getElementById("fecha").value = "";
  document.getElementById("servicio").value = "";
  document.getElementById("profesional").value = "";
  document.getElementById("hora").value = "";

  return true; // Permitir continuar si es necesario
}

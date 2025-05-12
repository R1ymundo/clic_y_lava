// Se obtiene los datos de usuario
const email = document.getElementById("email");
const password = document.getElementById("password");
const btnInicioSesion = document.getElementById("btnInicioSesion");
const inicioSesion = document.getElementById ("inicioSesion");
const cerrarSesion = document.getElementById ("cerrarSesion");


// Obtener elementos de validación
const correoValidar = document.getElementById("correoValidar");
const contraseñaValidar = document.getElementById("contraseñaValidar");

// Función para mostrar mensaje de error
const alertElemento = (elementoInput, elementoValidar, msg) => {
  elementoInput.classList.remove("is-valid");
  elementoInput.classList.add("is-invalid");
  elementoValidar.classList.remove("valid-feedback");
  elementoValidar.classList.add("invalid-feedback");
  elementoValidar.innerText = msg;
};

// Función para limpiar mensaje de error
const limpiarAlertElemnto = (elementoInput, elementoValidar) => {
  elementoInput.classList.remove("is-invalid");
  elementoInput.classList.add("is-valid");
  elementoValidar.classList.remove("invalid-feedback");
  elementoValidar.classList.add("valid-feedback");
  elementoValidar.innerText = "✓ Campo válido";
};

// Función para validar formulario
function validarFormulario(emailVal, contraseñaVal) {
  let errores = [];

  // Validar formato email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailVal)) {
    errores.push("Ingresa un correo electrónico válido");
    alertElemento(email, correoValidar, "Ingresa un correo electrónico válido");
  }

  // Validar contraseña
  if (!contraseñaVal.trim()) {
    errores.push("La contraseña no puede estar vacía");
    alertElemento(password, contraseñaValidar, "La contraseña no puede estar vacía");
  } else if (contraseñaVal.length < 6) {
    errores.push("La contraseña debe tener al menos 6 caracteres");
    alertElemento(password, contraseñaValidar, "La contraseña debe tener al menos 6 caracteres");
  }

  return errores;
}

// Evento para el botón de enviar
btnInicioSesion.addEventListener("click", function (event) {
  event.preventDefault();

  const emailVal = email.value.trim();
  const contraseñaVal = password.value.trim();

  let erroresVal = validarFormulario(emailVal, contraseñaVal);

  if (erroresVal.length > 0) {
    Swal.fire({
      title: "Llena correctamente el formulario",
      html: erroresVal.join("<br>"),
      icon: "error",
    });
    return;
  }

  const usuariosAlmacenados = JSON.parse(localStorage.getItem("usuarios")) || [];
  const usuarioExistente = usuariosAlmacenados.find(
    (usuario) => usuario.email === emailVal
  );

  if (!usuarioExistente) {
    alertElemento(email, correoValidar, "Usuario no registrado");
    alertElemento(password, contraseñaValidar, "Contraseña no valida");
    Swal.fire({
      title: "Error",
      text: "Usuario no encontrado",
      icon: "error",
    });
    return;
  }

  // Si todo está correcto, guardar estado de sesión
  localStorage.setItem("sesionIniciada", "true");
  localStorage.setItem("usuarioActivo", JSON.stringify(usuarioExistente));

  // Inicio de sesión exitoso
  Swal.fire({
    title: "¡Éxito!",
    text: "Has iniciado sesión correctamente",
    icon: "success",
  }).then(() => {
    // Redirigir al usuario o realizar otras acciones
    window.location.href = "acerca.html";
  });
}
);
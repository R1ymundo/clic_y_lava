// Se obtiene los datos de usuario
const email = document.getElementById("email");
const password = document.getElementById("password");
const btnInicioSesion = document.getElementById("btnInicioSesion");

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
  elementoValidar.innerText = "";
};

// Función para limpiar todas las validaciones
const limpiarValidaciones = () => {
  email.classList.remove("is-valid", "is-invalid");
  password.classList.remove("is-valid", "is-invalid");
  correoValidar.classList.remove("valid-feedback", "invalid-feedback");
  contraseñaValidar.classList.remove("valid-feedback", "invalid-feedback");
  correoValidar.innerText = "";
  contraseñaValidar.innerText = "";
};

email.addEventListener("input", () => {
  const emailVal = email.value.trim();
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

  if (!emailRegex.test(emailVal)) {
    alertElemento(email, correoValidar, "Ingresa un correo electrónico válido");
  } else {
    limpiarAlertElemnto(email, correoValidar);
  }
});

password.addEventListener("input", () => {
  const contraseñaVal = password.value.trim();

  if (!contraseñaVal) {
    alertElemento(password, contraseñaValidar, "La contraseña no puede estar vacía");
  } else if (contraseñaVal.length < 8) {
    alertElemento(password, contraseñaValidar, "La contraseña debe tener al menos 8 caracteres");
  } else {
    limpiarAlertElemnto(password, contraseñaValidar);
  }
});

// Función para validar formulario
function validarFormulario(emailVal, contraseñaVal) {
  let errores = [];

  // Validar formato email
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  if (!emailRegex.test(emailVal)) {
    errores.push("Ingresa un correo electrónico válido");
    alertElemento(email, correoValidar, "Ingresa un correo electrónico válido");
  } else {
    limpiarAlertElemnto(email, correoValidar);
  }

  // Validar contraseña
  if (!contraseñaVal.trim()) {
    errores.push("La contraseña no puede estar vacía");
    alertElemento(password, contraseñaValidar, "La contraseña no puede estar vacía");
  } else if (contraseñaVal.length < 8) {
    errores.push("La contraseña debe tener al menos 8 caracteres");
    alertElemento(password, contraseñaValidar, "La contraseña debe tener al menos 8 caracteres");
  } else {
    limpiarAlertElemnto(password, contraseñaValidar);
  }

  return errores;
}

// Función para obtener usuarios de la API
const obtenerUsuarios = async () => {
  try {
    const response = await fetch("http://13.58.208.54/api/usuarios/", {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      const usuarios = await response.json();
      return usuarios;
    } else {
      throw new Error('Error al obtener usuarios');
    }
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    throw error;
  }
};

// Función simple para simular verificación de BCrypt
// NOTA: Esta es solo una simulación - BCrypt requiere verificación en el backend
const verificarPassword = (passwordPlano, passwordHash) => {
  // Como no podemos verificar BCrypt en el frontend, 
  // esta función solo verifica que las contraseñas no estén vacías
  // y que el hash parezca ser de BCrypt (empieza con $2a$, $2b$, etc.)
  
  if (!passwordPlano || !passwordHash) {
    return false;
  }
  
  // Verificar si el hash parece ser de BCrypt
  const bcryptPattern = /^\$2[abxy]?\$\d+\$/;
  if (!bcryptPattern.test(passwordHash)) {
    return false;
  }
  
  // Aquí normalmente harías la verificación real con BCrypt
  // Por ahora, esta es una verificación básica de longitud
  return passwordPlano.length >= 8;
};

// Evento para el botón de iniciar sesión
btnInicioSesion.addEventListener("click", async function (event) {
  event.preventDefault();

  const emailVal = email.value.trim();
  const contraseñaVal = password.value.trim();

  // Validar formulario
  let erroresVal = validarFormulario(emailVal, contraseñaVal);

  if (erroresVal.length > 0) {
    email.focus();
    Swal.fire({
      title: "Llena correctamente el formulario",
      html: erroresVal.join("<br>"),
      icon: "error",
    });
    return;
  }

  // Deshabilitar botón durante el proceso
  btnInicioSesion.disabled = true;
  btnInicioSesion.textContent = 'Iniciando sesión...';

  try {
    // Obtener usuarios de la API
    const usuarios = await obtenerUsuarios();
    
    // Buscar usuario por email
    const usuarioExistente = usuarios.find(usuario => usuario.email === emailVal);

    if (!usuarioExistente) {
      // Usuario no encontrado
      password.value = "";
      limpiarValidaciones();
      
      alertElemento(email, correoValidar, "Confirme su correo y/o contraseña");
      alertElemento(password, contraseñaValidar, "Confirme su correo y/o contraseña");
      
      Swal.fire({
        title: "Error",
        text: "Los datos que ingresaste son incorrectos, inténtalo de nuevo",
        icon: "error",
      });
      
      email.focus();
      return;
    }

    // Verificar contraseña (simulación - en producción debe ser en el backend)
    const passwordValida = verificarPassword(contraseñaVal, usuarioExistente.password);
    
    if (!passwordValida) {
      // Contraseña incorrecta
      password.value = "";
      limpiarValidaciones();
      
      alertElemento(password, contraseñaValidar, "Confirme su correo y/o contraseña");
      
      Swal.fire({
        title: "Error",
        text: "Los datos que ingresaste son incorrectos, inténtalo de nuevo",
        icon: "error",
      });
      
      email.focus();
      return;
    }

    // Login exitoso
    // Crear una copia del usuario sin la contraseña para almacenar
    const usuarioSinPassword = { ...usuarioExistente };
    delete usuarioSinPassword.password;

    // Guardar estado de sesión
    localStorage.setItem("sesionIniciada", "true");
    localStorage.setItem("usuarioActivo", JSON.stringify(usuarioSinPassword));

    // Limpiar formulario
    email.value = "";
    password.value = "";
    limpiarValidaciones();

    // Mostrar mensaje de éxito
    Swal.fire({
      title: "¡Éxito!",
      text: "Has iniciado sesión correctamente",
      icon: "success",
    }).then(() => {
      // Redirigir al usuario
      window.location.href = "acerca.html";
    });

  } catch (error) {
    console.error('Error:', error);
    
    // Limpiar campos en caso de error
    password.value = "";
    limpiarValidaciones();
    
    Swal.fire({
      title: "Error de conexión",
      text: "No se pudo conectar al servidor. Verifica tu conexión a internet.",
      icon: "error",
    });
  } finally {
    // Rehabilitar botón
    btnInicioSesion.disabled = false;
    btnInicioSesion.textContent = 'Iniciar Sesión';
  }
});

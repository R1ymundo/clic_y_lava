// Se obtiene los elementos de entrada
const Nombre = document.getElementById("Nombre");
const apellidos = document.getElementById("apellidos");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const contraseña = document.getElementById("contraseña");
const confirmarCont = document.getElementById("confirmarCont");

// Obtener elementos de validación
const nombreValidar = document.getElementById("nombreValidar");
const apellidosValidar = document.getElementById("apellidosValidar");
const correoValidar = document.getElementById("correoValidar");
const telefonoValidar = document.getElementById("telefonoValidar");
const contraseñaValidar = document.getElementById("contraseñaValidar");
const confirmarContValidar = document.getElementById("confirmarContValidar");

const btnEnviar = document.getElementById("btnEnviar");

// Función para mostrar mensaje de error
const alertElemento = (elementoInput, elementoValidar, msg) => {
  elementoInput.classList.remove("is-valid");
  elementoInput.classList.add("is-invalid");
  elementoValidar.classList.remove("valid-feedback");
  elementoValidar.classList.add("invalid-feedback");
  elementoValidar.innerText = " ";
  elementoValidar.innerText = msg;
};

// Función para limpiar mensaje de error
const limpiarAlertElemnto = (elementoInput, elementoValidar) => {
  elementoInput.classList.remove("is-invalid");
  elementoInput.classList.add("is-valid");
  elementoValidar.classList.remove("invalid-feedback");
  elementoValidar.classList.add("valid-feedback");
  elementoValidar.innerText = " ";
};

/////////////////limpia alerts////////////////////
Nombre.addEventListener("input",() =>{
  let errores = [];
const nombreVal= Nombre.value.trim();
 const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,}$/;
     if (!nombreRegex.test(nombreVal)) {
        errores.push("Solo acepta letras y mínimo dos caracteres");
        alertElemento(Nombre, nombreValidar, "Solo acepta letras y mínimo dos caracteres");
    } else {
        limpiarAlertElemnto(Nombre, nombreValidar);
    }   
});

apellidos.addEventListener("input",() =>{
  let errores = [];
const apellidosVal = apellidos.value.trim();
const apellidosRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,}$/;
    if (!apellidosRegex.test(apellidosVal)) {
        errores.push("Solo acepta letras y mínimo dos caracteres");
        alertElemento(apellidos, apellidosValidar, "Solo acepta letras y mínimo dos caracteres");
    } else {
        limpiarAlertElemnto(apellidos, apellidosValidar);
    }
});

email.addEventListener("input",() =>{
  let errores = [];
const emailVal = email.value.trim();
const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    if (!emailRegex.test(emailVal)) {
        errores.push("Ingresa un correo electrónico válido");
        alertElemento(email, correoValidar, "Ingresa un correo electrónico válido"); 
    } else {
        limpiarAlertElemnto(email, correoValidar);
    }
});

telefono.addEventListener("input",() =>{
  let errores = [];
const telefonoVal= telefono.value.trim();
const telefonoRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (!telefonoRegex.test(telefonoVal)) {
        errores.push("Ingresa un número de teléfono válido");
        alertElemento(telefono, telefonoValidar, "Ingresa un número de teléfono válido");
    } else {
        limpiarAlertElemnto(telefono, telefonoValidar); 
    }
});

contraseña.addEventListener("input", () => {
  let errores = [];
  const contraseñaVal = contraseña.value.trim();
  const contraseñaRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$ %^&*-]).{8,}$/;
  
  if (!contraseñaVal) {
    alertElemento(contraseña, contraseñaValidar, "La contraseña no puede estar vacía");
  } else if (contraseñaVal.length < 8) {
    alertElemento(contraseña, contraseñaValidar, "Mínimo 8 caracteres");
  } else if (!contraseñaRegex.test(contraseñaVal)) {
    alertElemento(contraseña, contraseñaValidar, "Debe incluir mayúsculas, minúsculas, números y un carácter especial");
  } else {
    limpiarAlertElemnto(contraseña, contraseñaValidar);
  }
});

confirmarCont.addEventListener("input", () => {
  let errores = [];
    const confirmarContVal = confirmarCont.value.trim();
    const contraseñaVal = contraseña.value.trim();

    if (!confirmarContVal) {
        errores.push("Debes confirmar tu contraseña");
        alertElemento(confirmarCont, confirmarContValidar, "Debes confirmar tu contraseña");
    } else if (confirmarContVal !== contraseñaVal) {
        errores.push("Las contraseñas no coinciden");
        alertElemento(confirmarCont, confirmarContValidar, "Las contraseñas no coinciden");
    } else {
        limpiarAlertElemnto(confirmarCont, confirmarContValidar);
    }
});

// Función para validar formulario
function validarFormulario(
  nombreVal,
  apellidosVal,
  emailVal,
  telefonoVal,
  contraseñaVal,
  confirmarContVal,
) {
  let errores = [];

  //Validar nombre
  const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,}$/;
  if (!nombreRegex.test(nombreVal)) {
    errores.push("Nombre");
    alertElemento(
      Nombre,
      nombreValidar,
      "Solo acepta letras y mínimo dos caracteres"
    );
  } else {
    limpiarAlertElemnto(Nombre, nombreValidar);
  }

  //Validar apellidos
  const apellidosRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,}$/;
  if (!apellidosRegex.test(apellidosVal)) {
    errores.push("Apellidos");
    alertElemento(
      apellidos,
      apellidosValidar,
      "Solo acepta letras y mínimo dos caracteres"
    );
  } else {
    limpiarAlertElemnto(apellidos, apellidosValidar);
  }

  //Validar email
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  if (!emailRegex.test(emailVal)) {
    errores.push("Correo electrónico ");
    alertElemento(email, correoValidar, "Ingresa un correo electrónico válido");
  } else {
    limpiarAlertElemnto(email, correoValidar);
  }

  //Validar telefono
  const telefonoRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  if (!telefonoRegex.test(telefonoVal)) {
    errores.push("Teléfono");
    alertElemento(
      telefono,
      telefonoValidar,
      "Ingresa un número de teléfono válido"
    );
  } else {
    limpiarAlertElemnto(telefono, telefonoValidar);
  }

  // Validar contraseña
  if (!contraseñaVal.trim()) {
    errores.push("Contraseña");
    alertElemento(
      contraseña,
      contraseñaValidar,
      "La contraseña no puede estar vacía"
    );
  } else if (contraseñaVal.length < 8) {
    errores.push("La contraseña debe tener al menos 8 caracteres");
    alertElemento(
      contraseña,
      contraseñaValidar,
      "La contraseña debe tener al menos 8 caracteres"
    );
  } else {
    const contraseñaRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$ %^&*-]).{8,}$/;
    if (!contraseñaRegex.test(contraseñaVal)) {
      errores.push("La contraseña debe incluir mayúsculas, minúsculas, números y un carácter especial");
      alertElemento(
        contraseña,
        contraseñaValidar,
        "La contraseña debe incluir mayúsculas, minúsculas, números y un carácter especial"
      );
    } else {
      limpiarAlertElemnto(contraseña, contraseñaValidar);
    }
  }

  // Validar confirmación de contraseña
  if (!confirmarContVal.trim()) {
    errores.push("Confirmar tu contraseña");
    alertElemento(
      confirmarCont,
      confirmarContValidar,
      "Debes confirmar tu contraseña"
    );
  } else if (contraseñaVal !== confirmarContVal) {
    errores.push("Las contraseñas no coinciden");
    alertElemento(
      confirmarCont,
      confirmarContValidar,
      "Las contraseñas no coinciden"
    );
  } else {
    limpiarAlertElemnto(confirmarCont, confirmarContValidar);
  }

    return errores;
}

const limpiarValidacionesTotal = () => {
  const campos = [
    { input: Nombre, feedback: nombreValidar },
    { input: apellidos, feedback: apellidosValidar },
    { input: email, feedback: correoValidar },
    { input: telefono, feedback: telefonoValidar },
    { input: contraseña, feedback: contraseñaValidar },
    { input: confirmarCont, feedback: confirmarContValidar },
  ];

  campos.forEach(({ input, feedback }) => {
    input.classList.remove("is-valid", "is-invalid");
    feedback.classList.remove("valid-feedback", "invalid-feedback");
    feedback.innerText = "";
  });
};

const limpiarValidacionCampo = (input, feedback) => {
  input.classList.remove("is-valid", "is-invalid");
  feedback.classList.remove("valid-feedback", "invalid-feedback");
  feedback.innerText = "";
};

// Función para limpiar formulario
const limpiarFormulario = () => {
  Nombre.value = "";
  apellidos.value = "";
  email.value = "";
  telefono.value = "";
  contraseña.value = "";
  confirmarCont.value = "";
  limpiarValidacionesTotal();
};

/////////////////CONEXIÓN A LA API/////////////////////////
document.getElementById('btnEnviar').addEventListener('click', async (e) => {
  e.preventDefault(); // Prevenir envío del formulario por defecto
  
  // Obtener valores de los campos
  const nombre = Nombre.value.trim();
  const apellidosVal = apellidos.value.trim();
  const correo = email.value.trim();
  const telefonoVal = telefono.value.trim();
  const contraseñaVal = contraseña.value.trim();
  const confirmar = confirmarCont.value.trim();

  // Validar formulario antes de enviar
  const errores = validarFormulario(nombre, apellidosVal, correo, telefonoVal, contraseñaVal, confirmar);
  
  if (errores.length > 0) {
    Swal.fire({
      title: 'Error de validación',
      text: 'Por favor corrige los errores en el formulario',
      icon: 'error'
    });
    return;
  }

  // Validación adicional de contraseñas
  if (contraseñaVal !== confirmar) {
    Swal.fire('Error', 'Las contraseñas no coinciden', 'error');
    return;
  }

  // Deshabilitar botón mientras se procesa
  btnEnviar.disabled = true;
  btnEnviar.textContent = 'Registrando...';

  const registroUsuario = async () => {
    try {
      // Obtener fecha actual en formato requerido por la API
      const fechaActual = new Date();
      const fechaRegistro = fechaActual.toISOString().slice(0, 19).replace('T', ' ');

      const response = await fetch("http://13.58.208.54/api/usuarios/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          nombre: nombre,
          apellidos: apellidosVal,
          email: correo,
          password: contraseñaVal, // La API se encargará del hash
          telefono: telefonoVal,
          fechaRegistro: fechaRegistro,
          rol: {
            id: 2 // Cambiado de idRol a id según tu estructura
          }
        })
      });

      const responseData = await response.json();

      if (response.ok) {
        Swal.fire({
          title: '¡Éxito!',
          text: 'Usuario registrado correctamente',
          icon: 'success',
          confirmButtonText: 'Continuar'
        }).then(() => {
          limpiarFormulario();
          // Descomentar la siguiente línea si quieres redirigir
          // window.location.href = 'inicioSesion.html';
        });
      } else {
        // Manejar diferentes tipos de errores
        let mensajeError = 'Hubo un problema en el registro';
        
        if (response.status === 400) {
          mensajeError = responseData.message || 'Datos inválidos. Verifica la información ingresada.';
        } else if (response.status === 409) {
          mensajeError = 'El usuario ya existe. Verifica tu email o teléfono.';
        } else if (response.status === 500) {
          mensajeError = 'Error del servidor. Intenta nuevamente más tarde.';
        }

        Swal.fire({
          title: 'Error',
          text: mensajeError,
          icon: 'error'
        });
      }
    } catch (error) {
      console.error('Error de conexión:', error);
      Swal.fire({
        title: 'Error de conexión',
        text: 'No se pudo conectar al servidor. Verifica tu conexión a internet.',
        icon: 'error'
      });
    } finally {
      // Rehabilitar botón
      btnEnviar.disabled = false;
      btnEnviar.textContent = 'Registrar';
    }
  };

  await registroUsuario();
});
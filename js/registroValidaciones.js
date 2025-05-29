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
  const contraseñaRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  
  if (!contraseñaVal) {
    alertElemento(contraseña, contraseñaValidar, "La contraseña no puede estar vacía");
  } else if (contraseñaVal.length < 8) {
    alertElemento(contraseña, contraseñaValidar, "Mínimo 8 caracteres");
  } else if (!contraseñaRegex.test(contraseñaVal)) {
    alertElemento(contraseña, contraseñaValidar, "Debe incluir mayúsculas, minúsculas, números y un carácter especial");
  } else {
    limpiarAlertElemnto(contraseña, contraseñaValidar); // Muestra la palomita
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
  } //fin validar email   

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
  //fin validar telefono

  // Validar contraseña
  if (!contraseñaVal.trim()) {
    // Caso específico cuando no se ingresa nada
    errores.push("Contraseña");
    alertElemento(
      contraseña,
      contraseñaValidar,
      "La contraseña no puede estar vacía"
    );
  } else if (contraseñaVal.length < 8) {
    // Caso específico para cuando la contraseña es demasiado corta
    errores.push("La contraseña debe tener al menos 8 caracteres");
    alertElemento(
      contraseña,
      contraseñaValidar,
      "La contraseña debe tener al menos 8 caracteres"
    );
  } else {
    // Validación completa con regex para contraseñas con la longitud adecuada
    const contraseñaRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
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
    // Caso específico cuando no se ingresa nada en la confirmación
    errores.push("Confirmar tu contraseña");
    alertElemento(
      confirmarCont,
      confirmarContValidar,
      "Debes confirmar tu contraseña"
    );
  } else if (contraseñaVal !== confirmarContVal) {
    // Las contraseñas no coinciden
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

/////////////////CAMBIOS DE CONEXION/////////////////////////
document.getElementById('btnEnviar').addEventListener('click', async () => {
  const nombre = document.getElementById('Nombre').value;
  const apellidos = document.getElementById('apellidos').value;
  const correo = document.getElementById('email').value;
  const telefono = document.getElementById('telefono').value;
  const contraseña = document.getElementById('contraseña').value;
  const confirmar = document.getElementById('confirmarCont').value;

  if (contraseña !== confirmar) {
    Swal.fire('Error', 'Las contraseñas no coinciden', 'error');
    return;
  }

  const registroUsuario = async () => {
    try {
      const response = await fetch("http://13.58.208.54/api/usuarios/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nombre,
          apellidos,
          email: correo,
          telefono,
          password: contraseña,
          fechaRegistro: new Date().toISOString().slice(0, 10),
          rol: {
            idRol: 1
          }
        })
      });

      if (response.ok) {
        await response.json();
        Swal.fire('Éxito', 'Usuario registrado correctamente', 'success');
        // window.location.href = 'inicioSesion.html';
      } else {
        const errorData = await response.json();
        Swal.fire('Error', errorData.message || 'Hubo un problema en el registro', 'error');
      }
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'No se pudo conectar al servidor', 'error');
    }
  };
  registroUsuario();
});

///////////////////AQUI TERMINAN LOS CAMBIOS/////////////////7

    // condiciones si existe correo y telefono, solo el correo o solo el telefono  ->

   /* if (usuarioDuplicado) {
      Swal.fire({
        title: "Este usuario ya se encuentra registrado",
        text: "Usuario registrado con este correo y telefono",
        icon: "warning",
      });
      email.value = "";
      telefono.value = "";
      limpiarValidacionCampo(email, correoValidar);
      limpiarValidacionCampo(telefono, telefonoValidar);
      return;
    }

    if (correoDuplicado) {
      Swal.fire({
        title: "Usuario registrado con este correo, cambialo por favor",
        icon: "warning",
      });
      email.value = "";
      limpiarValidacionCampo(email, correoValidar);
      return;
    }

    if (telefonoDuplicado) {
      Swal.fire({
        title: "Usuario registrado con este telefono, cambialo por favor",
        icon: "warning",
      });
      telefono.value = "";
      limpiarValidacionCampo(telefono, telefonoValidar);
      return;
    }

    usuariosAlmacenados.push(usuarioNuevo);
    localStorage.setItem("usuarios", JSON.stringify(usuariosAlmacenados));

    Swal.fire({
      title: "¡Éxito!",
      text: "Se ha registrado correctamente",
      icon: "success",
    }).then(() => {
      Nombre.value = "";
      apellidos.value = "";
      email.value = "";
      telefono.value = "";
      contraseña.value = "";
      confirmarCont.value = "";

      limpiarValidacionesTotal();

      window.location.href = "inicioSesion.html";
    }); */



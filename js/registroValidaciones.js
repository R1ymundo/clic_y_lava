// Se obtiene los elementos de entrada
const Nombre = document.getElementById("Nombre");
const apellidos = document.getElementById("apellidos");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const contraseña = document.getElementById("contraseña");
const confirmarCont = document.getElementById("confirmarCont");
const direccion = document.getElementById("direccion");

// Obtener elementos de validación
const nombreValidar = document.getElementById("nombreValidar");
const apellidosValidar = document.getElementById("apellidosValidar");
const correoValidar = document.getElementById("correoValidar");
const telefonoValidar = document.getElementById("telefonoValidar");
const contraseñaValidar = document.getElementById("contraseñaValidar");
const confirmarContValidar = document.getElementById("confirmarContValidar");
const direccionValidar = document.getElementById("direccionValidar");

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
const emailVal = email.value.trim();
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailVal)) {
        errores.push("Ingresa un correo electrónico válido");
        alertElemento(email, correoValidar, "Ingresa un correo electrónico válido"); 
    } else {
        limpiarAlertElemnto(email, correoValidar);
    }
});

telefono.addEventListener("input",() =>{
const telefonoVal= telefono.value.trim();
const telefonoRegex = /^\d{10}$/;
    if (!telefonoRegex.test(telefonoVal)) {
        errores.push("Ingresa un número de teléfono válido");
        alertElemento(telefono, telefonoValidar, "Ingresa un número de teléfono válido");
    } else {
        limpiarAlertElemnto(telefono, telefonoValidar); 
    }
});


direccion.addEventListener("input", ()=>{
    const direccionVal = direccion.value.trim();
const direccionRegex = /[A-Za-zÁÉÍÓÚáéíóúÑñ]+.*\d+/;
    if (!direccionRegex.test(direccionVal)) {
        errores.push("Ingresa una dirección válida que contenga una palabra y un número");
        alertElemento(direccion, direccionValidar, "Ingresa una dirección válida que contenga una palabra y un número");
    } else {
        limpiarAlertElemnto(direccion, direccionValidar);
    }

});

contraseña.addEventListener("input", () => {
    const contraseñaVal = contraseña.value.trim();
    
    if (!contraseñaVal) {
        errores.push("La contraseña no puede estar vacía");
        alertElemento(contraseña, contraseñaValidar, "La contraseña no puede estar vacía");
    } else if (contraseñaVal.length < 6) {
        errores.push("La contraseña debe tener al menos 6 caracteres");
        alertElemento(contraseña, contraseñaValidar, "La contraseña debe tener al menos 6 caracteres");
    } else {
        const contraseñaRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if (!contraseñaRegex.test(contraseñaVal)) {
            errores.push("La contraseña debe incluir letras y al menos un número");
            alertElemento(contraseña, contraseñaValidar, "La contraseña debe incluir letras y al menos un número");
        } else {
            limpiarAlertElemnto(contraseña, contraseñaValidar);
        }
    }
});

confirmarCont.addEventListener("input", () => {
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
  direccionVal
) {
  let errores = [];

  //Validar nombre
  const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,}$/;
  if (!nombreRegex.test(nombreVal)) {
    errores.push("Solo acepta letras y mínimo dos caracteres");
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
    errores.push("Solo acepta letras y mínimo dos caracteres");
    alertElemento(
      apellidos,
      apellidosValidar,
      "Solo acepta letras y mínimo dos caracteres"
    );
  } else {
    limpiarAlertElemnto(apellidos, apellidosValidar);
  }

  //Validar email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailVal)) {
    errores.push("Ingresa un correo electrónico válido");
    alertElemento(email, correoValidar, "Ingresa un correo electrónico válido");
  } else {
    limpiarAlertElemnto(email, correoValidar);
  } //fin validar email

  //Validar telefono
  const telefonoRegex = /^\d{10}$/;
  if (!telefonoRegex.test(telefonoVal)) {
    errores.push("Ingresa un número de teléfono válido");
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
    errores.push("La contraseña no puede estar vacía");
    alertElemento(
      contraseña,
      contraseñaValidar,
      "La contraseña no puede estar vacía"
    );
  } else if (contraseñaVal.length < 6) {
    // Caso específico para cuando la contraseña es demasiado corta
    errores.push("La contraseña debe tener al menos 6 caracteres");
    alertElemento(
      contraseña,
      contraseñaValidar,
      "La contraseña debe tener al menos 6 caracteres"
    );
  } else {
    // Validación completa con regex para contraseñas con la longitud adecuada
    const contraseñaRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!contraseñaRegex.test(contraseñaVal)) {
      errores.push("La contraseña debe incluir letras y al menos un número");
      alertElemento(
        contraseña,
        contraseñaValidar,
        "La contraseña debe incluir letras y al menos un número"
      );
    } else {
      limpiarAlertElemnto(contraseña, contraseñaValidar);
    }
  }

  // Validar confirmación de contraseña
  if (!confirmarContVal.trim()) {
    // Caso específico cuando no se ingresa nada en la confirmación
    errores.push("Debes confirmar tu contraseña");
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

  //Validar dirección
  const direccionRegex = /[A-Za-zÁÉÍÓÚáéíóúÑñ]+.*\d+/;
  if (!direccionRegex.test(direccionVal)) {
    errores.push(
      "Ingresa una dirección válida que contenga una palabra y un número"
    );
    alertElemento(
      direccion,
      direccionValidar,
      "Ingresa una dirección válida que contenga una palabra y un número"
    );
  } else {
    limpiarAlertElemnto(direccion, direccionValidar);
  } //fin validar dirección


    //Validar telefono
    const telefonoRegex = /^\d{10}$/;
    if (!telefonoRegex.test(telefonoVal)) {
        errores.push("Ingresa un número de teléfono válido");
        alertElemento(telefono, telefonoValidar, "Ingresa un número de teléfono válido");
    } else {
        limpiarAlertElemnto(telefono, telefonoValidar); 
    }
    //fin validar telefono

    // Validar contraseña
    if (!contraseñaVal.trim()) {
        // Caso específico cuando no se ingresa nada
        errores.push("La contraseña no puede estar vacía");
        alertElemento(contraseña, contraseñaValidar, "La contraseña no puede estar vacía, debe tener al menos 6 caracteres y almenos incluir 1 numero");
    } else if (contraseñaVal.length < 6) {
        // Caso específico para cuando la contraseña es demasiado corta
        errores.push("La contraseña debe tener al menos 6 caracteres");
        alertElemento(contraseña, contraseñaValidar, "La contraseña debe tener al menos 6 caracteres");
    } else {
        // Validación completa con regex para contraseñas con la longitud adecuada
        const contraseñaRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if (!contraseñaRegex.test(contraseñaVal)) {
            errores.push("La contraseña debe incluir letras y al menos un número");
            alertElemento(contraseña, contraseñaValidar, "La contraseña debe incluir letras y al menos un número");
        } else {
            limpiarAlertElemnto(contraseña, contraseñaValidar);
        }
    }

    // Validar confirmación de contraseña
    if (!confirmarContVal.trim()) {
        // Caso específico cuando no se ingresa nada en la confirmación
        errores.push("Debes confirmar tu contraseña");
        alertElemento(confirmarCont, confirmarContValidar, "Debes confirmar tu contraseña");
    } else if (contraseñaVal !== confirmarContVal) {
        // Las contraseñas no coinciden
        errores.push("Las contraseñas no coinciden");
        alertElemento(confirmarCont, confirmarContValidar, "Las contraseñas no coinciden");
    } else {
        limpiarAlertElemnto(confirmarCont, confirmarContValidar);
    }

    //Validar dirección
    const direccionRegex = /[A-Za-zÁÉÍÓÚáéíóúÑñ]+.*\d+/;
    if (!direccionRegex.test(direccionVal)) {
        errores.push("Ingresa una dirección válida que contenga una palabra y un número");
        alertElemento(direccion, direccionValidar, "Ingresa una dirección válida que contenga una palabra y un número");
    } else {
        limpiarAlertElemnto(direccion, direccionValidar);
    }//fin validar dirección

    return errores;

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
    { input: direccion, feedback: direccionValidar },
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

// Evento para el botón de enviar
btnEnviar.addEventListener("click", function (event) {
  event.preventDefault();

  const nombreVal = Nombre.value.trim();
  const apellidosVal = apellidos.value.trim();
  const emailVal = email.value.trim();
  const telefonoVal = telefono.value.trim();
  const contraseñaVal = contraseña.value.trim();
  const confirmarContVal = confirmarCont.value.trim();
  const direccionVal = direccion.value.trim();

  let erroresVal = validarFormulario(
    nombreVal,
    apellidosVal,
    emailVal,
    telefonoVal,
    contraseñaVal,
    confirmarContVal,
    direccionVal
  );

  if (erroresVal.length > 0) {
    Swal.fire({
      title: "Llena correctamente el formulario",
      html: erroresVal.join("<br>"),
      icon: "error",
    });
  } else {
    // objeto de nuevo usuario ->
    const usuarioNuevo = {
      nombre: nombreVal,
      apellidos: apellidosVal,
      email: emailVal,
      telefono: telefonoVal,
      contraseña: contraseñaVal,
      confirmarCont: confirmarContVal,
      direccion: direccionVal,
    };

    // obtenemos usuarios almacenado, si es que los hay ->
    const usuariosAlmacenados =
      JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verificamos si ya existe tanto el correo como el telefono ->
    const usuarioDuplicado = usuariosAlmacenados.find(
      (usuario) =>
        usuario.email === usuarioNuevo.email &&
        usuario.telefono === usuarioNuevo.telefono
    );

    // Verifica si ya existe solo el correo ->
    const correoDuplicado = usuariosAlmacenados.find(
      (usuario) => usuario.email === usuarioNuevo.email
    );

    // Verifica si ya existe solo el teléfono ->
    const telefonoDuplicado = usuariosAlmacenados.find(
      (usuario) => usuario.telefono === usuarioNuevo.telefono
    );

    // condiciones si existe correo y telefono, solo el correo o solo el telefono  ->

    if (usuarioDuplicado) {
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
      direccion.value = "";

      limpiarValidacionesTotal();
    });
  }
});

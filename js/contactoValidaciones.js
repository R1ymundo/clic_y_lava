const exampleName = document.getElementById("exampleName");
const exampleAsunto = document.getElementById("asunto");
const exampleMail = document.getElementById("exampleMail");
const exampleTelephone = document.getElementById("exampleTelephone");
const exampleText = document.getElementById("exampleText");
const terminosAceptados = document.getElementById("btnRadio");
const btnEnviar = document.getElementById("btnEnviar");
const formmulario = document.getElementById("formularioContacto");
const nombreValidar = document.getElementById("nombreValidar");
const asuntoValidar = document.getElementById("asuntoValidar");
const emailValidar = document.getElementById("emailValidar");
const telefonoValidar = document.getElementById("telefonoValidar");
const mensajeValidar = document.getElementById("mensajeValidar");

const limpiarAlertElemnto = (elementoInput, elementoValidar) => {
  elementoInput.classList.remove("is-invalid");
  elementoValidar.classList.remove("invalid-feedback");
  elementoValidar.classList.add("valid-feedback");
  elementoValidar.innerText = " ";
}

const alertElemento = (elementoInput, elementoValidar, msg) => {
  elementoInput.classList.remove("is-valid");
  elementoInput.classList.add("is-invalid");
  elementoValidar.classList.remove("valid-feedback");
  elementoValidar.classList.add("invalid-feedback");
  elementoValidar.innerText = " ";
  elementoValidar.innerText = `Por favor ingresa un ${msg}`;
}


///////////////////////VALIDACIONES para limpiar las alertas////////////////////////////////////

exampleName.addEventListener("input", () =>{
  const nameVal = exampleName.value.trim();
  const regexNombre = new RegExp("^[A-Za-zÁÉÍÓÚáéíóúÑñ\\s]{3,}$");

  if (!regexNombre.test(nameVal)) {
    alertElemento(exampleName, nombreValidar, "Nombre válido.");
    error.push("Nombre inválido.");
  } else {
    limpiarAlertElemnto(exampleName, nombreValidar);
  }
});

exampleAsunto.addEventListener("input", () =>{
  const asuntoVal = exampleAsunto.value.trim();
  const regexAsunto = new RegExp("^[A-Za-zÁÉÍÓÚáéíóúÑñ\\s]{3,}$");

  if (!regexAsunto.test(asuntoVal)) {
    alertElemento(exampleAsunto, asuntoValidar, "Asunto válido.");
    error.push("Asunto inválido.");
  } else {
    limpiarAlertElemnto(exampleAsunto, asuntoValidar);
  } 
});

exampleMail.addEventListener("input", () => {
  const email= exampleMail.value.trim();
  const regexEmail = new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$");

if (!regexEmail.test(email)) {
    alertElemento(exampleMail, emailValidar, "Email válido.");
    error.push("Email inválido");
  } else {
    limpiarAlertElemnto(exampleMail, emailValidar);
  }
});

exampleTelephone.addEventListener("input", ()=>{
  const telefono= exampleTelephone.value.trim();
   const regexTelefono = new RegExp("^[0-9\\-\\+\\s\\(\\)]{7,15}$");
     if (!regexTelefono.test(telefono)) {
    alertElemento(exampleTelephone, telefonoValidar, "Telefono válido.");
    error.push("Telefono inválido.");
  } else {
    limpiarAlertElemnto(exampleTelephone, telefonoValidar);
  }
});

exampleText.addEventListener("input", ()=>{
const mensaje = exampleText.value.trim();
const regexMensaje = new RegExp("^.{15,50}$");
if (!regexMensaje.test(mensaje)) {
    alertElemento(exampleText, mensajeValidar, "mensaje válido,debe contener al menos 15 caracteres.");
    error.push("El mensaje debe contener al menos 15 caracteres.");
  } else {
    limpiarAlertElemnto(exampleText, mensajeValidar);
  }return error;

});

const validarFormContacto = (nombre, email, telefono, mensaje, asunto) => {
  // Validaciones con regexp ->
  const regexNombre = new RegExp("^[A-Za-zÁÉÍÓÚáéíóúÑñ\\s]{3,}$");
  const regexAsunto = new RegExp("^[A-Za-zÁÉÍÓÚáéíóúÑñ\\s]{3,}$");
  const regexEmail = new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$");
  const regexTelefono = new RegExp("^[0-9\\-\\+\\s\\(\\)]{7,15}$");
  const regexMensaje = new RegExp("^.{15,50}$");

  // Variable para almacenar los errores ->
  let error = [];

  // Validacion si son correctos los campos ->
  // regexNombre.test(nombre) ? nombre : error.push("Nombre invalido");
  // regexEmail.test(email) ? email : error.push("Email invalido");
  // regexTelefono.test(telefono) ? telefono : error.push("Telefono invalido");
  // regexMensaje.test(mensaje) ? mensaje : error.push("Mensaje incorrecto");

  if (!regexNombre.test(nombre)) {
    alertElemento(exampleName, nombreValidar, "Nombre válido.");
    error.push("Nombre inválido.");
  } else {
    limpiarAlertElemnto(exampleName, nombreValidar);
  }

  if (!regexAsunto.test(asunto)) {
    alertElemento(exampleAsunto, asuntoValidar, "Asunto válido.");
    error.push("Asunto inválido.");
  } else {
    limpiarAlertElemnto(exampleAsunto, asuntoValidar);
  }

  if (!regexEmail.test(email)) {
    alertElemento(exampleMail, emailValidar, "Email válido.");
    error.push("Email inválido");
  } else {
    limpiarAlertElemnto(exampleMail, emailValidar);
  }

  if (!regexTelefono.test(telefono)) {
    alertElemento(exampleTelephone, telefonoValidar, "Telefono válido.");
    error.push("Telefono inválido.");
  } else {
    limpiarAlertElemnto(exampleTelephone, telefonoValidar);
  }

  if (!regexMensaje.test(mensaje)) {
    alertElemento(exampleText, mensajeValidar, "mensaje válido,debe contener al menos 15 caracteres.");
    error.push("El mensaje debe contener al menos 15 caracteres.");
  } else {
    limpiarAlertElemnto(exampleText, mensajeValidar);
  }

  return error;
};

const enviarFormContacto = (nombre, email, telefono, mensaje, asunto) => {
  //ID del servicio
  const servicioID = "service_2zy5nyo";

  //ID de la plantilla del email que se va a ocupar
  const plantillaID = "template_cxb7mlg";

  //Parametros del email
  const plantillaParametros = {
    affair: asunto,
    name: nombre,
    email: email,
    phone: telefono,
    message: mensaje
  }


  // Envio del email
  emailjs.send(servicioID, plantillaID, plantillaParametros)
    .then(
      //Si se envia correctamente el email
      (response) => {
        Swal.fire({
          title: "Se envió el formulario correctamente",
          icon: "success",
        });
      },
      //Si no se envia correctamente el email
      (error) => {
        Swal.fire({
          title: "No se envió el formulario correctamente",
          icon: "error",
        });
      },
    );
}

btnEnviar.addEventListener("click", (event) => {
  event.preventDefault();

  const nombre = exampleName.value.trim();
  const asunto = exampleAsunto.value.trim();
  const email = exampleMail.value.trim();
  const telefono = exampleTelephone.value.trim();
  const mensaje = exampleText.value.trim();

  let error = validarFormContacto(nombre, email, telefono, mensaje, asunto);

  if (!terminosAceptados.checked) {
    Swal.fire({
      title: "Debes aceptar los términos y condiciones",
      icon: "warning",
    });
    return;
  }

  if (error.length > 0) {
    Swal.fire({
      title: "Llena correctamente el formulario",
      html: error.join("<br>"),
      icon: "error",
    });
  } else {
    enviarFormContacto(nombre, email, telefono, mensaje, asunto);
    exampleName.value = "";
    exampleAsunto.value = "";
    exampleMail.value = "";
    exampleTelephone.value = "";
    exampleText.value = "";
    terminosAceptados.checked = false;
  }
});

////limpia alerts
exampleName.addEventListener('input',() =>{
 let error = validarFormContacto(nombre);
  if (!error) enviarFormContacto.classList.add('is-valid');
});





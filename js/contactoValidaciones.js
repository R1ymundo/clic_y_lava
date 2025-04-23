const exampleName = document.getElementById("exampleName");
const exampleAsunto = document.getElementById("asunto");
const exampleMail = document.getElementById("exampleMail");
const exampleTelephone = document.getElementById("exampleTelephone");
const exampleText = document.getElementById("exampleText");
const terminosAceptados = document.getElementById("btnRadio");
const btnEnviar = document.getElementById("btnEnviar");
const formmulario = document.getElementById("formularioContacto");

const limpiarAlertElemnto = (elemento) => {
  elemento.style.border = ""
}

const alertElemento = (elemento) => { 
  elemento.style.border = "solid medium red"
}

const validarFormContacto = (nombre, email, telefono, mensaje, asunto) => {
  // Validaciones con regexp ->
  const regexNombre = new RegExp("^[A-Za-zÁÉÍÓÚáéíóúÑñ\\s]{2,}$");
  const regexAsunto = new RegExp("^[A-Za-zÁÉÍÓÚáéíóúÑñ\\s]{3,}$");
  const regexEmail = new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$");
  const regexTelefono = new RegExp("^[0-9\\-\\+\\s\\(\\)]{7,15}$");
  const regexMensaje = new RegExp("^.{15,50}$");

  // Variable para almacenar los errores ->
  let error = 0;

  // Validacion si son correctos los campos ->
  // regexNombre.test(nombre) ? nombre : error.push("Nombre invalido");
  // regexEmail.test(email) ? email : error.push("Email invalido");
  // regexTelefono.test(telefono) ? telefono : error.push("Telefono invalido");
  // regexMensaje.test(mensaje) ? mensaje : error.push("Mensaje incorrecto");

  if (!regexNombre.test(nombre)){
    alertElemento(exampleName);
    error++;
  } else {
    limpiarAlertElemnto(exampleName);
  }
  
  if (!regexAsunto.test(asunto)){
    alertElemento(exampleAsunto);
    error++;
  } else {
    limpiarAlertElemnto(exampleAsunto);
  }

  if (!regexEmail.test(email)){
    alertElemento(exampleMail);
    error++;    
  } else {
    limpiarAlertElemnto(exampleMail);
  }

  if (!regexTelefono.test(telefono)){
    alertElemento(exampleTelephone);
    error++;
  } else {
    limpiarAlertElemnto(exampleTelephone);
  }

  if (!regexMensaje.test(mensaje)){
    alertElemento(exampleText);
    error++;
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

  if(!terminosAceptados.checked){
    Swal.fire({
      title: "Debes aceptar los términos y condiciones",
      icon: "warning",
    });
    return;
  }

  if (error > 0) {
    Swal.fire({
      title: "Llena correctamente el formulario",
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


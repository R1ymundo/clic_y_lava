// Se obtiene los elementos de entrada
const Name = document.getElementById("exampleName");
const Asunto = document.getElementById("asunto");
const Mail = document.getElementById("exampleMail");
const Telephone = document.getElementById("exampleTelephone");
const Text = document.getElementById("exampleText");
const terminosAceptados = document.getElementById("btnRadio");
const btnEnviar = document.getElementById("btnEnviar");
const formmulario = document.getElementById("formularioContacto");

// Obtener elementos de validación
const nombreValidar = document.getElementById("nombreValidar");
const asuntoValidar = document.getElementById("asuntoValidar");
const emailValidar = document.getElementById("emailValidar");
const telefonoValidar = document.getElementById("telefonoValidar");
const mensajeValidar = document.getElementById("mensajeValidar");

// Función para mostrar mensaje de error
const alertElemento = (elementoInput, elementoValidar, msg) => {
  elementoInput.classList.remove("is-valid");
  elementoInput.classList.add("is-invalid");
  elementoValidar.classList.remove("valid-feedback");
  elementoValidar.classList.add("invalid-feedback");
  elementoValidar.innerText = " ";
  elementoValidar.innerText = msg;
}

// Función para limpiar mensaje de error
const limpiarAlertElemnto = (elementoInput, elementoValidar) => {
  elementoInput.classList.remove("is-invalid");
  elementoInput.classList.add("is-valid");
  elementoValidar.classList.remove("invalid-feedback");
  elementoValidar.classList.add("valid-feedback");
  elementoValidar.innerText = " ";
}

///////////////////////VALIDACIONES para limpiar las alertas////////////////////////////////////

Name.addEventListener("input",() =>{
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

Asunto.addEventListener("input", () =>{
  const asuntoVal = Asunto.value.trim();
  const regexAsunto = new RegExp("^[A-Za-zÁÉÍÓÚáéíóúÑñ\\s]{3,}$");

  if (!regexAsunto.test(asuntoVal)) {
    alertElemento(Asunto, asuntoValidar, "Solo acepta letras y mínimo dos caracteres");
  } else {
    limpiarAlertElemnto(Asunto, asuntoValidar);
  } 
});

Mail.addEventListener("input", () => {
  const email= Mail.value.trim();
  const regexEmail = new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$");

if (!regexEmail.test(email)) {
    alertElemento(Mail, emailValidar, "Ingresa un correo electrónico válido");
  } else {
    limpiarAlertElemnto(Mail, emailValidar);
  }
});

Telephone.addEventListener("input", ()=>{
  const telefono= Telephone.value.trim();
   const regexTelefono = new RegExp("^[0-9\\-\\+\\s\\(\\)]{7,15}$");
     if (!regexTelefono.test(telefono)) {
    alertElemento(Telephone, telefonoValidar, "Ingresa un número de teléfono válido");
  } else {
    limpiarAlertElemnto(Telephone, telefonoValidar);
  }
});

Text.addEventListener("input", ()=>{
const mensaje = Text.value.trim();
const regexMensaje = new RegExp("^.{15,50}$");
if (!regexMensaje.test(mensaje)) {
    alertElemento(Text, mensajeValidar, "Ingrese un mensaje con al menos 15 caracteres");
  } else {
    limpiarAlertElemnto(Text, mensajeValidar);
  }
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
  if (!regexNombre.test(nombre)) {
    alertElemento(Name, nombreValidar, "Solo acepta letras y mínimo dos caracteres");
    error.push("Nombre");
  } else {
    limpiarAlertElemnto(Name, nombreValidar);
  }

  if (!regexAsunto.test(asunto)) {
    alertElemento(Asunto, asuntoValidar, "Solo acepta letras y mínimo tres caracteres");
    error.push("Asunto");
  } else {
    limpiarAlertElemnto(Asunto, asuntoValidar);
  }

  if (!regexEmail.test(email)) {
    alertElemento(Mail, emailValidar, "Ingresa un correo electrónico válido");
    error.push("Email");
  } else {
    limpiarAlertElemnto(Mail, emailValidar);
  }

  if (!regexTelefono.test(telefono)) {
    alertElemento(Telephone, telefonoValidar, "Ingresa un número de teléfono válido");
    error.push("Telefono");
  } else {
    limpiarAlertElemnto(Telephone, telefonoValidar);
  }

  if (!regexMensaje.test(mensaje)) {
    alertElemento(Text, mensajeValidar, "Ingrese un mensaje con al menos 15 caracteres");
    error.push("Mensaje con al menos 15 caracteres.");
  } else {
    limpiarAlertElemnto(Text, mensajeValidar);
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

  const nombre = Name.value.trim();
  const asunto = Asunto.value.trim();
  const email = Mail.value.trim();
  const telefono = Telephone.value.trim();
  const mensaje = Text.value.trim();

  let error = validarFormContacto(nombre, email, telefono, mensaje, asunto);

  const terminosNoAceptados = !terminosAceptados.checked;

  if (error.length > 0 || terminosNoAceptados) {
    if (terminosNoAceptados) {
      error.push("Aceptar los términos y condiciones");
    }
    
    Swal.fire({
      title: "¡Campos Incompletos!",
      html: `
        <p>Por favor completa los siguientes campos obligatorios:</p>
        <ul style="text-align: left; margin-left: 20px;">
          ${error.map(error => `<li>${error}</li>`).join("")}
        </ul>
      `,
      icon: "error",
      confirmButtonText: "Entendido",
    });
    return;
  } 
  
  enviarFormContacto(nombre, email, telefono, mensaje, asunto);
  Name.value = "";
  Asunto.value = "";
  Mail.value = "";
  Telephone.value = "";
  Text.value = "";
  terminosAceptados.checked = false;
});
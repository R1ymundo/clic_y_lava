const exampleName = document.getElementById("exampleName");
const exampleMail = document.getElementById("exampleMail");
const exampleTelephone = document.getElementById("exampleTelephone");
const exampleText = document.getElementById("exampleText");
const btnEnviar = document.getElementById("btnEnviar");

const enviarFormContacto = () => {
  btnEnviar.addEventListener("click", (event) => {
    event.preventDefault();

    const nombre = exampleName.value.trim();
    const email = exampleMail.value.trim();
    const telefono = exampleTelephone.value.trim();
    const mensaje = exampleText.value.trim();

    // Validaciones con regexp ->
    const regexNombre = new RegExp("^[A-Za-zÁÉÍÓÚáéíóúÑñ\\s]{2,}$");
    const regexEmail = new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$");
    const regexTelefono = new RegExp("^[0-9\\-\\+\\s\\(\\)]{7,15}$");
    const regexMensaje = new RegExp("^.{15,50}$");

    // Variable para almacenar los errores ->
    let error = [];

    // Validacion si son correctos los campos ->
    regexNombre.test(nombre) ? nombre : error.push("Nombre invalido");

    regexEmail.test(email) ? email : error.push("Email invalido");

    regexTelefono.test(telefono) ? telefono : error.push("Telefono invalido");

    regexMensaje.test(mensaje) ? mensaje : error.push("Mensaje incorrecto");

    if (error.length > 0) {
      //sweetlaert:
      alert(`Error(s):\n${error.join("\n")}`);
    } else {
      // sweetalert:
      alert("¡Se envio el formulario exitosamente!");
      window.location.reload();
    }
  });
};
enviarFormContacto();

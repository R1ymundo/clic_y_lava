const Nombre = document.getElementById("Nombre");
const apellidos = document.getElementById("apellidos");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const contraseña = document.getElementById("contraseña");
const confirmarCont = document.getElementById("confirmarCont");
const direccion = document.getElementById("direccion");


const btn = document.getElementById ("btnEnviar");

btn.addEventListener("click", function () {
    
    const nombreValidar = Nombre.value;
    const apellidosValidar = apellidos.value;
    const emailValidar = email.value;
    const telefonoValidar = telefono.value;
    const contraseñaValidar = contraseña.value;
    const confirmarContValidar = confirmarCont.value;
    const direccionValidar = direccion.value;
  
    let erroresVal =  validarFormulario(nombreValidar, apellidosValidar, emailValidar, telefonoValidar,
        contraseñaValidar, confirmarContValidar, direccionValidar);

    alert (erroresVal);
});

function validarFormulario (nombreValidar, apellidosValidar, emailValidar, telefonoValidar,
    contraseñaValidar, confirmarContValidar, direccionValidar){
    

    let errores = [];


    //Validar nombre
    const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,}$/;
    if (!nombreRegex.test(nombreValidar)){
    errores.push("Solo acepta letras y mínimo dos caracteres");
    }//fin validar nombre

    //Validar apellidos
    const apellidosRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,}$/;
    if (!apellidosRegex.test(apellidosValidar)){
    errores.push("Solo acepta letras y mínimo dos caracteres");
    }//fin validar apellidos

    //Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValidar)){
    errores.push("Ingresa un correo electrónico válido");
    }//fin validar email

    //Validar telefono
    const telefonoRegex = /^\d{10}$/;
    if (!telefonoRegex.test(telefonoValidar)){
    errores.push("Ingresa un número de teléfono válido");
    }//fin validar telefono

    //Validar contraseña y cont
    const contraseñaRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!contraseñaRegex.test(contraseñaValidar)){
        errores.push("La contraseña debe incluir 6 caracteres y un número.")
    } 
    if (contraseñaValidar !==confirmarContValidar){
        errores.push("las contraseñas no coinciden.");
    } //Validar formulario

    //Validar dirección
    const direccionRegex = /[A-Za-zÁÉÍÓÚáéíóúÑñ]+.*\d+/;
    if (!direccionRegex.test(direccionValidar)){
    errores.push("Ingresa una dirección válida que contenga una palabra y un número");
    }//fin validar telefono
 
    return errores;
}
//Validar dirección

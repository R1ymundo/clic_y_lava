
const btnArchivo = document.querySelector('#btn-archivo');
const imgProduct = document.querySelector('#img-product');

const nombreProducto = document.getElementById("nombreProducto");
const stock = document.getElementById("stock");
const precio = document.getElementById("precio");
const listaCategoria = document.getElementById("listaCategoria");
const listaMarca = document.getElementById("listaMarca");
const descripcion = document.getElementById("descripcion");
const caracteristica1 = document.getElementById("caracteristica1");
const caracteristica2 = document.getElementById("caracteristica2");
const btnEnviar = document.getElementById("btnEnviar");


listaCategoria.addEventListener("change", function(event){
    let idCategoria = this.value;
}); //listaCategoria


listaMarca.addEventListener("change", function(event){
    let idMarca = this.value;
}); //listaMarca


let widget_cloudinary = cloudinary.createUploadWidget({
    cloudName: "deppn8ze4", 
    uploadPreset: 'clic_test'


}, (err, result) =>{
   if(!err && result && result.event === 'success'){
     console.log('Imagen subida con exito', result.info);
     imgProduct.src = result.info.secure_url;
   }//if

});//widgetCloudinary que viene por defecto

btnArchivo.addEventListener('click',() =>{
   widget_cloudinary.open();

}, false); //boton_foto

const validarNumero = (num) => {
    let error = 1;
    
    if(!(num.value.trim().length < 1)){
        return error = -1;
    }

    if(!(isNaN(num.value))){
        return error = -1;
    }

    if (!(Number(num.value) > -1)){
        return error = -1;
    }

    return error = 1;

} //validarNumero

const validarFormProducto = (nombreProducto, caracteristica1, caracteristica2, descripcion) => {
    const regexNombreProducto = new RegExp("^[A-Za-zÁÉÍÓÚáéíóúÑñ\\s]{5,}$");
    const regexDescripcion = new RegExp("^[A-Za-zÁÉÍÓÚáéíóúÑñ\\s]{20,}$");
    const regexCaract1 = new RegExp("^[A-Za-zÁÉÍÓÚáéíóúÑñ\\s]{3,20}$");
    const regexCaract2 = new RegExp("^[A-Za-zÁÉÍÓÚáéíóúÑñ\\s]{3,20}$");

    let error = [];

    if(!regexNombreProducto.test(nombreProducto)){
        error.push("Nombre del producto inválido");
    }else{

    }

    if(!regexDescripcion.test(descripcion)){
        error.push("Descripción demasiado corta");
    }else{
        
    }

    if(!regexCaract1.test(caracteristica1)){
        error.push("Característica principal demasiada larga");
    }else{
        
    }

    if(!regexCaract2.test(caracteristica2)){
        error.push("Característica secundaria demasiada larga");
    }else{
        
    }

    return error;
} //validarFormProducto

function crearProducto() {
    return {
        "nombre": nombreProducto.value.trim(),
        "stock": stock.value.trim(),
        "precio": precio.value.trim(),
        "categoria": listaCategoria.value,
        "marca": listaMarca.value,
        "descripción": descripcion.value.trim(),
        "caracteristica1": caracteristica1.value.trim(),
        "caracteristica2": caracteristica2.value.trim()
    };
} // crearProducto

function guardarProducto(producto) {
    let productosGuardados = JSON.parse(localStorage.getItem("newProduct")) || [];
    productosGuardados.push(producto);
    localStorage.setItem("newProduct", JSON.stringify(productosGuardados));
} // guardarProducto

btnEnviar.addEventListener("click", function(event){
    event.preventDefault();

    const nomProducto = nombreProducto.value.trim();
    const caractPrincipal = caracteristica1.value.trim();
    const caractSecendaria = caracteristica2.value.trim();
    const description = descripcion.value.trim();

    let errores = validarFormProducto(nomProducto, caractPrincipal, caractSecendaria, description);

    console.log(errores)

    // Crear JSON y guardar en localStorage
    let producto = crearProducto();
    guardarProducto(producto);

    // Limpiamos formulario y regresamos al primer campo del formulario
    document.querySelector("form").reset();
    nombreProducto.focus();

});
const nombreProducto = document.getElementById("nombreProducto");
const stock = document.getElementById("stock");
const precio = document.getElementById("precio");
const listaCategoria = document.getElementById("listaCategoria");

listaCategoria.addEventListener("change", function(event){
    let idCategoria = this.value;
    console.log(idCategoria);
});



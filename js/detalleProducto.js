const paramsString = window.location.search;
const searchParams = new URLSearchParams(paramsString);
const id = searchParams.get("id")

const imgLavadora = document.getElementById("imgLavadora");
const imgComplementarias = document.getElementById("imgComplementarias");
const tituloLavadora = document.getElementById("tituloLavadora");
const sku = document.getElementById("sku");
const precio = document.getElementById("precio");
const caracteristicas1 = document.getElementById("caracteristicas1");
const caracteristicas2 = document.getElementById("caracteristicas2");
const descripcion = document.getElementById("descripcion");

// Obtener el objeto del localStorage
let productData = localStorage.getItem("productData");
productData = JSON.parse(productData);

//Obtener los productos
let productos = productData.productos;

// Buscar el producto por ID
const producto = productos.find(p => p.id === Number(id));

let imgs = "";
for (let i = 1; i < 4; i++) {
    imgs += `<img src="${producto.imagenes['imagenAdicional' + i]}" alt="Lavadora" class="img-fluid imagen-circular shadow-sm"><br/>`;
}

if (producto) {

    imgLavadora.insertAdjacentHTML("afterbegin",
        `<img src="${producto.imagenes.imagenPricipal}" alt="Lavadora" class="img-fluid imagen-principal"></img>`);

    imgComplementarias.insertAdjacentHTML("afterbegin", imgs);

    tituloLavadora.innerText = producto.modelo;
    sku.innerText = `SKU: ${producto.stock}`;
    precio.innerText = `$${producto.precios.precioDia} por día`

    caracteristicas1.innerText = producto.caracteristicas.caracteristica1;
    caracteristicas2.innerText = producto.caracteristicas.caracteristica2;

    descripcion.innerText = producto.descripcion;


}



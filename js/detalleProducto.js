const paramsString = window.location.search;
const searchParams = new URLSearchParams(paramsString);
const id = searchParams.get("id")
console.log(searchParams.get("id"));
console.log(searchParams.get("categoria"));

let productos = localStorage.getItem("productos");
productos = JSON.parse(productos)

console.log(productos)

let producto = productos.find( produc => produc.id === Number(id));

console,log(producto);


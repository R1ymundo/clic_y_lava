const cardsProduct = document.getElementById("cardsProduct");
const alertData = document.getElementById("alertData");

// Array de objetos (productos a reenderizzar) ->
let productos = [
  {
    id: 1,
    marca: "LG",
    precioRenta: 142.37,
    modelo: "Lavasecadora electrónica 12 kg WD12VVC4S6S",
    dispensadorAutomatico: "Jabón",
    luzInterior: "No",
    ajustesTemperatura: 6,
    seguroNinos: "Sí",
    sostenible: "Ahorro de agua",
    tipoCarga: "Carga frontal",
    imagen: "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora1.webp",
  },
  {
    id: 2,
    marca: "SAMSUNG",
    precioRenta: 95.8,
    modelo: "Lavadora 20 kg automática carga superior WA20A3341GW/AX",
    carga: "Superior",
    filtroAtrapaPelusa: "No",
    ajustesTemperatura: 4,
    tipoLavadora: "Automática",
    tecnologiaInverter: "No",
    imagen: "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora2.webp",
  },
  {
    id: 3,
    marca: "HISENSE",
    precioRenta: 160.1,
    modelo: "Lavasecadora eléctrica 16 kg 10 kg WD5S1645BT",
    filtroAtrapaPelusa: "Sí",
    ajustesTemperatura: 5,
    seguroNinos: "Sí",
    tecnologiaInverter: "Sí",
    tipoCarga: "Carga frontal",
    imagen: "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora3.webp",
  },
  {
    id: 4,
    marca: "KOBLENZ",
    precioRenta: 87.45,
    modelo: "Lavadora 19 kg automática carga superior lwm-19iir Frankfurt",
    carga: "Superior",
    filtroAtrapaPelusa: "Sí",
    ajustesTemperatura: 3,
    tipoLavadora: "Automática",
    tecnologiaInverter: "No",
    imagen: "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora4.webp",
  },
  {
    id: 5,
    marca: "LG",
    precioRenta: 73.9,
    modelo:
      "Lavadora doble tina 18 KG semiautomática doble carga WP18MAR.DBMELAT",
    carga: "Doble carga",
    filtroAtrapaPelusa: "No",
    ajustesTemperatura: 1,
    tipoPanelControl: "Perillas",
    imagen: "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora5.webp",
  },
  {
    id: 6,
    marca: "SAMSUNG",
    precioRenta: 189.99,
    modelo: "Lavasecadora electrónico 12.5 kg WD12TP04DBE/AX",
    dispensadorAutomatico: "No tiene",
    luzInterior: "No",
    ajustesTemperatura: 5,
    seguroNinos: "Sí",
    tecnologiaInverter: "Sí",
    tipoCarga: "Carga frontal",
    imagen: "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora6.webp",
  },
  {
    id: 7,
    marca: "MABE",
    precioRenta: 112.75,
    modelo: "Lavadora 22 kg automática carga superior LMA72215WBAB1",
    carga: "Superior",
    filtroAtrapaPelusa: "No",
    ajustesTemperatura: 6,
    tipoLavadora: "Automática",
    sostenible: "Ahorro de agua",
    imagen: "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora7.webp",
  },
  {
    id: 8,
    marca: "HISENSE",
    precioRenta: 69.5,
    modelo: "Lavadora doble tina 18 kg manual doble carga WSA1803P",
    carga: "Doble carga",
    filtroAtrapaPelusa: "Sí",
    ajustesTemperatura: 1,
    tipoPanelControl: "Perillas",
    imagen: "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora8.webp",
  },
  {
    id: 9,
    marca: "WHIRLPOOL",
    precioRenta: 153.6,
    modelo: "Lavadora 22 kg automática carga superior 8MWTWLA31WJG",
    carga: "Superior",
    filtroAtrapaPelusa: "No",
    ajustesTemperatura: 4,
    tipoLavadora: "Automática",
    imagen: "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora9.webp",
  },
  {
    id: 10,
    marca: "MABE",
    precioRenta: 130.0,
    modelo: "Lavadora 22 kg automática carga superior Lmh72211wbab0",
    carga: "Superior",
    filtroAtrapaPelusa: "No",
    ajustesTemperatura: 6,
    tipoPanelControl: "Digital, botones y perillas",
    tecnologiaInverter: "No",
    imagen: "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora10.webp",
  },
];

// Se almacenan los productos en localStorage (comentar o descomentar para pruebas de error) ->
localStorage.setItem("productos", JSON.stringify(productos));

// Promesa para productos ->
const getData = async () => {
  return new Promise((resolve, reject) => {
    const getProductos = JSON.parse(localStorage.getItem("productos"));
    if (getProductos == null) {
      reject(new Error("¡Ocurrio un error, no se puede acceder a los datos!"));
    } else {
      resolve(getProductos);
    }
  });
};

// Funcion para hacer fetch de los datos ocapturar errores con funcion asincrona ->
const fetchingProducts = async () => {
  try {
    const arrayProductos = await getData();
    const mostrarCard = arrayProductos
      .map(producto => {
        return `
                <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                  <div class="card h-100">
                    <img src="${producto.imagen}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <p class="card-title principal">${producto.modelo}</p>
                      <p class="card-title detalle">Marca: ${producto.marca}</p>
                      <p class="card-precio">Renta: $${producto.precioRenta}</p>
                      <a href="" class="btn btn-primary">Ver más detalles..</a>
                    </div>
                  </div> 
                </div>
              `;
      })
      .join("");
    cardsProduct.innerHTML = mostrarCard;
  } catch (error) {
    alertData.insertAdjacentHTML(
      "beforeend",
      `
            <div class="alert alert-danger d-flex" role="alert">
                <svg xmlns="http://www.w3.org/2000/svg" class="bi flex-shrink-0 me-2" width="50px" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                <div>
                    <strong>${error.message}</strong>
                </div>
            </div>
        `
    );
  }
};
fetchingProducts();

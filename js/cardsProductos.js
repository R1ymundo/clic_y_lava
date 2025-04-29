const cardsProduct = document.getElementById("cardsProduct");


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


localStorage.setItem("productos", JSON.stringify(productos));

cardsProduct.insertAdjacentHTML("beforeend", 
      `<div class="card" style="width: 18rem;">
          <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">titulo</h5>
            <h5 class="card-title">marca</h5>
            <h5 class="card-title">precio</h5>
            <a href="#" class="btn btn-primary">Ver más detalles..</a>
          </div>
      </div>`);



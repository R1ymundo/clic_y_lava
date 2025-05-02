const cardsProduct = document.getElementById("cardsProduct");
const alertData = document.getElementById("alertData");

// Array de objetos (Nuestros productos iniciales con sus categorias) ->
let productData = {
  categorias: [
    {
      id: 1,
      nombre: "Básicas",
      slug: "basicas",
    },
    {
      id: 2,
      nombre: "Gran capacidad",
      slug: "gran-capacidad",
    },
    {
      id: 3,
      nombre: "Inteligentes",
      slug: "inteligentes",
    },
    {
      id: 4,
      nombre: "Limpieza",
      slug: "limpieza",
    },
  ],
  productos: [
    {
      id: 1,
      marca: "LG",
      precios: {
        precioHora: 45,
        precioDia: 95,
        precioSemana: 170,
      },
      modelo: "Lavasecadora electrónica 12 kg WD12VVC4S6S",
      imagenes: {
        imagenPricipal:
          "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora1/lavadora1.webp",
        imagenAdicional1:
          "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora1/lavadora1-2.webp",
        imagenAdicional2:
          "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora1/lavadora1-3.webp",
        imagenAdicional3:
          "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora1/lavadora1-4.webp",
      },
      stock: 7,
      descripcion:
        "Lavasecadora LG con capacidad de 12 kg, tecnología AI DD que optimiza el lavado según el tipo de ropa, y sistema de vapor para una higiene profunda.",
      categoria: {
        id: 3,
        nombre: "Inteligentes",
        slug: "inteligentes",
      },
      caracteristicas: {
        caracteristica1: "Tecnología AI DD",
        caracteristica2: "Sistema de vapor",
      },
    },
    {
      id: 2,
      marca: "SAMSUNG",
      precios: {
        precioHora: 38,
        precioDia: 89,
        precioSemana: 155,
      },
      modelo: "Lavadora 20 kg automática carga superior WA20A3341GW/AX",
      imagenes: {
        imagenPricipal:
          "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora2/lavadora2.webp",
        imagenAdicional1:
          "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora2/lavadora2-2.webp",
        imagenAdicional2:
          "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora2/lavadora2-3.webp",
        imagenAdicional3:
          "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora2/lavadora2-4.webp",
      },
      stock: 4,
      descripcion:
        "Lavadora automática de 20 kg con tecnología Wobble de Samsung, que cuida la ropa con un lavado eficiente y sin enredos.",
      categoria: {
        id: 2,
        nombre: "Gran capacidad",
        slug: "gran-capacidad",
      },
      caracteristicas: {
        caracteristica1: "Tecnología Wobble",
        caracteristica2: "Carga superior",
      },
    },
    {
      id: 3,
      marca: "HISENSE",
      precios: {
        precioHora: 41,
        precioDia: 90,
        precioSemana: 165,
      },
      modelo: "Lavasecadora eléctrica 16 kg 10 kg WD5S1645BT",
      imagenes: {
        imagenPricipal:
          "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora3/lavadora3.webp",
        imagenAdicional1:
          "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora3/lavadora3-2.webp",
        imagenAdicional2:
          "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora3/lavadora3-3.webp",
        imagenAdicional3:
          "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora3/lavadora3-4.webp",
      },
      stock: 8,
      descripcion:
        "Lavasecadora Hisense de gran capacidad con tecnología inverter y opciones avanzadas de temperatura para cuidado de la ropa.",
      categoria: {
        id: 3,
        nombre: "Inteligentes",
        slug: "inteligentes",
      },
      caracteristicas: {
        caracteristica1: "Tecnología inverter",
        caracteristica2: "Hasta 5 niveles de temperatura",
      },
    },
    {
      id: 4,
      marca: "KOBLENZ",
      precios: {
        precioHora: 30,
        precioDia: 75,
        precioSemana: 130,
      },
      modelo: "Lavadora 19 kg automática carga superior lwm-19iir Frankfurt",
      imagenes: {
        imagenPricipal:
          "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora4/lavadora4.webp",
        imagenAdicional1:
          "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora4/lavadora4-2.webp",
        imagenAdicional2:
          "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora4/lavadora4-3.webp",
        imagenAdicional3:
          "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora4/lavadora4-4.webp",
      },
      stock: 6,
      descripcion:
        "Lavadora automática Koblenz de 19 kg con diseño robusto y programas de lavado eficientes.",
      categoria: {
        id: 2,
        nombre: "Gran capacidad",
        slug: "gran-capacidad",
      },
      caracteristicas: {
        caracteristica1: "19 kg de capacidad",
        caracteristica2: "Panel de control intuitivo",
      },
    },
    {
      id: 5,
      marca: "LG",
      precios: {
        precioHora: 28,
        precioDia: 70,
        precioSemana: 125,
      },
      modelo:
        "Lavadora doble tina 18 KG semiautomática doble carga WP18MAR.DBMELAT",
      imagenes: {
        imagenPricipal:
          "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora5/lavadora5.webp",
        imagenAdicional1:
          "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora5/lavadora5-2.webp",
        imagenAdicional2:
          "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora5/lavadora5-3.webp",
        imagenAdicional3:
          "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora5/lavadora5-4.webp",
      },
      stock: 3,
      descripcion:
        "Lavadora LG semiautomática de doble tina, ideal para hogares que buscan eficiencia a bajo costo.",
      categoria: {
        id: 1,
        nombre: "Básicas",
        slug: "basicas",
      },
      caracteristicas: {
        caracteristica1: "Doble tina",
        caracteristica2: "Sistema por perillas",
      },
    },
    {
      id: 6,
      marca: "SAMSUNG",
      precios: {
        precioHora: 47,
        precioDia: 98,
        precioSemana: 180,
      },
      modelo: "Lavasecadora electrónico 12.5 kg WD12TP04DBE/AX",
      imagenes: {
        imagenPricipal:
          "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora6/lavadora6.webp",
        imagenAdicional1:
          "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora6/lavadora6-2.webp",
        imagenAdicional2:
          "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora6/lavadora6-3.webp",
        imagenAdicional3:
          "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora6/lavadora6-4.webp",
      },
      stock: 9,
      descripcion:
        "Lavasecadora Samsung con tecnología EcoBubble y panel digital para mejor control del ciclo.",
      categoria: {
        id: 3,
        nombre: "Inteligentes",
        slug: "inteligentes",
      },
      caracteristicas: {
        caracteristica1: "EcoBubble",
        caracteristica2: "Panel digital",
      },
    },
    {
      id: 7,
      marca: "MABE",
      precios: {
        precioHora: 42,
        precioDia: 88,
        precioSemana: 150,
      },
      modelo: "Lavadora 22 kg automática carga superior LMA72215WBAB1",
      imagenes: {
        imagenPricipal:
          "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora7/lavadora7.webp",
        imagenAdicional1:
          "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora7/lavadora7-2.webp",
        imagenAdicional2:
          "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora7/lavadora7-3.webp",
        imagenAdicional3:
          "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora7/lavadora7-4.webp",
      },
      stock: 10,
      descripcion:
        "Lavadora automática Mabe con 22 kg de capacidad, ideal para familias grandes.",
      categoria: {
        id: 2,
        nombre: "Gran capacidad",
        slug: "gran-capacidad",
      },
      caracteristicas: {
        caracteristica1: "Alta capacidad",
        caracteristica2: "Ahorro de agua",
      },
    },
    {
      id: 8,
      marca: "HISENSE",
      precios: {
        precioHora: 26,
        precioDia: 60,
        precioSemana: 100,
      },
      modelo: "Lavadora doble tina 18 kg manual doble carga WSA1803P",
      imagenes: {
        imagenPricipal:
          "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora8/lavadora8.webp",
        imagenAdicional1:
          "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora8/lavadora8-2.webp",
        imagenAdicional2:
          "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora8/lavadora8-3.webp",
        imagenAdicional3:
          "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora8/lavadora8-4.webp",
      },
      stock: 5,
      descripcion:
        "Lavadora doble tina manual Hisense, económica y confiable para el lavado diario.",
      categoria: {
        id: 1,
        nombre: "Básicas",
        slug: "basicas",
      },
      caracteristicas: {
        caracteristica1: "Manual",
        caracteristica2: "Perillas mecánicas",
      },
    },
    {
      id: 9,
      marca: "WHIRLPOOL",
      precios: {
        precioHora: 44,
        precioDia: 93,
        precioSemana: 160,
      },
      modelo: "Lavadora 22 kg automática carga superior 8MWTWLA31WJG",
      imagenes: {
        imagenPricipal:
          "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora9/lavadora9.webp",
        imagenAdicional1:
          "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora9/lavadora9-2.webp",
        imagenAdicional2:
          "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora9/lavadora9-3.webp",
        imagenAdicional3:
          "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora9/lavadora9-4.webp",
      },
      stock: 2,
      descripcion:
        "Lavadora Whirlpool con 22 kg de capacidad, con ciclos personalizados y control automático de nivel de agua.",
      categoria: {
        id: 2,
        nombre: "Gran capacidad",
        slug: "gran-capacidad",
      },
      caracteristicas: {
        caracteristica1: "Control automático de agua",
        caracteristica2: "Gran tamaño",
      },
    },
    {
      id: 10,
      marca: "MABE",
      precios: {
        precioHora: 40,
        precioDia: 85,
        precioSemana: 145,
      },
      modelo: "Lavadora 22 kg automática carga superior Lmh72211wbab0",
      imagenes: {
        imagenPricipal:
          "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora10/lavadora10.webp",
        imagenAdicional1:
          "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora10/lavadora10-2.webp",
        imagenAdicional2:
          "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora10/lavadora10-3.webp",
        imagenAdicional3:
          "../assets/img/ImagenesProductos/ImagenesLavadoras/lavadora10/lavadora10-4.webp",
      },
      stock: 6,
      descripcion:
        "Lavadora Mabe de gran capacidad con panel digital combinado para mayor comodidad en el uso.",
      categoria: {
        id: 2,
        nombre: "Gran capacidad",
        slug: "gran-capacidad",
      },
      caracteristicas: {
        caracteristica1: "Panel digital y perillas",
        caracteristica2: "22 kg de carga",
      },
    },
  ],
};

const storedData = localStorage.getItem("productData");
if (!storedData) {
  localStorage.setItem("productData", JSON.stringify(productData));
}

// Promesa para productos
const getData = async () => {
  return new Promise((resolve, reject) => {
    const getProducts = JSON.parse(localStorage.getItem("productData"));
    if (getProducts == null) {
      reject(new Error("¡Ocurrio un error, no se puede acceder a los datos!"));
    } else {
      resolve(getProducts);
    }
  });
};

// Funcion para hacer fetch de los datos ocapturar errores con funcion asincrona ->
window.fetchingProducts = async () => {
  let alertError = `
          <div class="alert alert-danger d-flex" role="alert">
              <svg xmlns="http://www.w3.org/2000/svg" class="bi flex-shrink-0 me-2" width="50px" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
              <div>
                  <strong>Error</strong>
              </div>
          </div>`;

  try {
    const data = await getData();
    const products = data.productos;

    if (!products) {
      alertData.insertAdjacentHTML("beforeend", alertError);
    }

    const showCard = products
      .map((product) => {
        return `
                <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                  <div class="card h-100">
                    <img src="${product.imagenes.imagenPricipal}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <p class="card-title principal">${product.modelo}</p>
                      <p class="card-title detalle">Marca: ${product.marca}</p>
                      <p class="card-precio">Renta/hora: $${product.precios.precioHora}</p>
                      <a href="" class="btn btn-primary">Ver más detalles..</a>
                    </div>
                  </div> 
                </div>
              `;
      })
      .join("");
    cardsProduct.innerHTML = showCard;
  } catch (error) {
    alertData.insertAdjacentHTML(
      "beforeend",
      `
        <div class="alert alert-danger d-flex w-50 m-auto mt-5" role="alert">
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

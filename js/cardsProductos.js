const cardsProduct = document.getElementById("cardsProduct");
const alertData = document.getElementById("alertData");

let productosGlobal = [];

/* Aqui se tenia un arreglo de objetos json para almacenar en localStorage y hacer fetch de ellos,
pero ya se elimino para poder hacer la conexion con el backend. */

/* if (!localStoredData) {
  localStorage.setItem("productData", JSON.stringify(productData));
} else {
  const newDataProduct = JSON.parse(localStoredData);

const listaCategorias = document.getElementById("listaCategorias"); */

//Button Categorias

// Agrega opción "Todos los productos"
const itemTodos = document.createElement("li");
itemTodos.innerHTML = `<a class="dropdown-item" href="#" data-slug="todos">Todos los productos</a>`;
listaCategorias.appendChild(itemTodos);

/* // Crea el resto de las categorías dinámicamente
productData.categorias.forEach((cat) => {
  const li = document.createElement("li");
  li.innerHTML = `<a class="dropdown-item" href="#" data-slug="${cat.slug}">${cat.nombre}</a>`;
  listaCategorias.appendChild(li);
}); */

/* if (newDataProduct.productos.length !== productData.productos.length) {
    const addProducts = [
      ...productData.productos,
      ...newDataProduct.productos.filter(
        (product) =>
          !productData.productos.some((op) => op.modelo === product.modelo)
      ),
    ];

    const updatedProductData = {
      categorias: productData.categorias,
      productos: addProducts,
    };

    localStorage.setItem("productData", JSON.stringify(updatedProductData));
  }
} */

// Promesa para productos
const getData = async () => {
  try {
    const response = await fetch("/api/productos/");
    if (!response.ok) {
      throw new Error("Error al obtener los productos desde el backend");
    }
    const productos = await response.json();

    return {
      productos,
    };
  } catch (error) {
    throw error;
  }
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
    productosGlobal = data.productos;

    if (productosGlobal.length === 0) {
      alertData.insertAdjacentHTML(
        "beforeend",
        "<div>No hay productos disponibles</div>"
      );
    }

    const showCard = productosGlobal
      .map((product) => {
        return `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
        <div class="card h-100">
          <div class="image-container">
            <img src="${product.imagen}" class="card-img-top" alt="${product.stock}">
          </div>
          <div class="card-body p-2">
            <p class="card-title principal mb-1">${product.nombre}</p>
            <p class="card-precio mb-2">$${product.precio}/hora</p>

            <!-- Descripción oculta que aparece al pasar el mouse -->
            <div class="descripcion-producto">${product.descripcion}</div>

            <div class="d-flex justify-content-center gap-2 mt-3">
              <button class="btn btn-carrito btn-sm">Agregar al Carrito 🛒</button>
            </div>
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

document.addEventListener("click", (e) => {
  if (e.target.matches(".dropdown-item")) {
    e.preventDefault();
    const slug = e.target.dataset.slug;

    if (slug === "todos") {
      fetchingProducts();
    } else {
      filtrarPorCategoria(slug);
    }
  }
});

/*
function filtrarPorCategoria(slug) {
  const productosFiltrados = productosGlobal.filter(
    (prod) => prod.categoria.slug === slug
  );
  const showCard = productosFiltrados
    .map((product) => {
      return `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
          <div class="card h-100">
            <div class="image-container">
              <img src="${product.imagen}" class="card-img-top" alt="${product.stock}">
            </div>
            <div class="card-body p-2">
              <p class="card-title principal mb-1">${product.nombre}</p>
              <p class="card-precio mb-2">$${product.precio}/hora</p>
              <!-- Descripción oculta que aparece al pasar el mouse -->
              <div class="descripcion-producto">${product.descripcion}</div>
              <a href="../paginas/detalleProducto.html?id=${product.id}" class="btn btn-primary btn-sm">Ver más detalles</a>
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  cardsProduct.innerHTML = showCard;
} */

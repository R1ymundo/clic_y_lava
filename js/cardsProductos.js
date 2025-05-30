const cardsProduct = document.getElementById("cardsProduct");
const alertData = document.getElementById("alertData");


let allProducts = [];


const renderProductCards = (productsToRender) => {
    if (!productsToRender || productsToRender.length === 0) {
        cardsProduct.innerHTML = '<p class="text-center w-100">No se encontraron productos.</p>';
        return;
    }

    const showCard = productsToRender
        .map((product) => {
            
            const imageUrl = product.imagen || 'https://via.placeholder.com/400x300?text=No+Image'; 
            const nombre = product.nombre || 'N/A';
            const descripcion = product.descripcion || 'No description available.';
            const precio = product.precio !== undefined ? product.precio : 'N/A';
            const stock = product.stock !== undefined ? product.stock : 0;

            return `
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                    <div class="card h-100">
                        <div class="image-container">
                            <img src="${imageUrl}" class="card-img-top" alt="${nombre}">
                        </div>
                        <div class="card-body p-2">
                            <p class="card-title principal mb-1">${nombre}</p>
                            <p class="card-precio mb-2">$${precio}</p>
                            <p class="card-stock mb-2">Stock: ${stock} unidades</p>

                            <div class="descripcion-producto">${descripcion}</div>

                            <div class="d-flex justify-content-center mt-3">
                                <button class="btn btn-carrito btn-sm" ${stock <= 0 ? 'disabled' : ''}>
                                    ${stock <= 0 ? 'Sin Stock' : 'Agregar al Carrito 🛒'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        })
        .join("");
    cardsProduct.innerHTML = showCard;
};


const fetchProductsFromAPI = async () => {
    const API_URL = "http://13.58.208.54/api/productos/";

    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Error de red: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error("Error al obtener productos:", error);
        throw new Error(`No se pudo cargar la información de los productos: ${error.message}`);
    }
};


window.fetchingProducts = async () => {
    alertData.innerHTML = ''; 

    try {
        allProducts = await fetchProductsFromAPI(); 
        renderProductCards(allProducts); 
    } catch (error) {
        
        alertData.innerHTML = `
            <div class="alert alert-danger d-flex w-50 m-auto mt-5" role="alert">
                <svg xmlns="http://www.w3.org/2000/svg" class="bi flex-shrink-0 me-2" width="50px" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98 1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                <div>
                    <strong>Error:</strong> ${error.message}
                </div>
            </div>`;
        cardsProduct.innerHTML = ''; 
    }
};

document.addEventListener("DOMContentLoaded", fetchingProducts);
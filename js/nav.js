const navegacion = document.getElementById("navegacion");
const sesion = localStorage.getItem("sesionIniciada");

navegacion.insertAdjacentHTML(
    "afterbegin",
    ` 
    <div class="container-fluid">
        <div class="d-flex flex-wrap justify-content-between align-items-center w-100">
            <a class="navbar-brand order-1" href="../index.html">
                Clic y lava
            </a>
            <button class="navbar-toggler order-3 ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse order-4 order-lg-2" id="navbarNav">
                <div class="d-flex flex-column flex-lg-row w-100">
                    <div class="flex-grow-1 d-none d-lg-block"></div>
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="../paginas/acerca.html">
                                Nosotros
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../paginas/productos.html">
                                Productos
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../paginas/contacto.html">
                                Contacto
                            </a>
                        </li>
                    </ul>
                    <div class="flex-grow-1 d-none d-lg-block"></div>
                    <div class="d-flex flex-column flex-lg-row align-items-lg-center mt-2 mt-lg-0 text-center text-lg-start">
                        <div class="mb-2 mb-lg-0 me-lg-3 d-lg-inline-block">
                            <a class="nav-link" href="../paginas/compras.html">
                                <img src="../assets/icons/carrito.webp" alt="Carrito" width="24" height="24">
                                Mis Compras 
                            </a>
                        </div>
                        <div class="d-lg-inline-block">
                            <a id="inicioSesion" class="nav-link" href="../paginas/inicioSesion.html" style="display:inline">
                                <img src="../assets/icons/login.png" alt="login" width="24" height="24">
                                Iniciar sesión 
                            </a>
                            
                            <a id="cerrarSesion" class="nav-link" style="display:none">
                                <img src="../assets/icons/out.png" alt="salir" width="24" height="24">
                                Cerrar sesión
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    `
);


const inicioSesion = document.getElementById("inicioSesion");
const cerrarSesion = document.getElementById("cerrarSesion");

if (sesion === "true") {
    inicioSesion.style.display = "none";
    cerrarSesion.style.display = "inline";
} 

cerrarSesion.addEventListener("click", function (event) {
    event.preventDefault();
    
    //Cambiar el estado de sesión
    inicioSesion.style.display = "inline";
    cerrarSesion.style.display = "none";

    // Borrar los datos de sesión
    localStorage.removeItem("sesionIniciada");
    localStorage.removeItem("usuarioActivo");
    

    Swal.fire({
        title: "Sesión cerrada",
        text: "Has cerrado sesión correctamente",
        icon: "success",
    }).then(() => {
        // Redirigir después de cerrar sesión
        window.location.href = "../paginas/acerca.html"; // o donde desees
    });
});
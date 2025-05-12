const navegacion = document.getElementById("navegacion");
const sesion = localStorage.getItem("sesionIniciada");

navegacion.insertAdjacentHTML(
    "afterbegin",
    ` 
    <div class="container-fluid">
            <div class="col-5">
                <a class="navbar-brand" href="../index.html">Clic y lava</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <div class="col-5">
                            <a class="nav-link " aria-current="page" href="../paginas/acerca.html">Nosotros</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../paginas/productos.html">Productos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="../paginas/contacto.html">Contacto</a>
                    </li>
            </div>
            </ul>

            <a class="nav-link" href="../paginas/compras.html" style="margin-right: 1rem;">Mis Compras
                <img src="../assets/icons/carrito.webp" alt="Carrito" width="24" height="24">
            </a>

            <a id="inicioSesion" class="nav-link" href="../paginas/inicioSesion.html" style="margin-right: 1rem; display:inline">Iniciar sesión
                <img src="../assets/icons/login.png" alt="login" width="24" height="24">
            </a>

            <a id="cerrarSesion" class="nav-link" style="margin-right: 1rem; display:none">Cerrar sesión
                <img src="../assets/icons/out.png" alt="salir" width="24" height="24">
            </a>

            
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
    
    //Cambiar el estado de los a
    inicioSesion.style.display = "inline";
    cerrarSesion.style.display = "none";

    // Borrar los datos de sesión
    localStorage.removeItem("sesionIniciada");
    localStorage.removeItem("usuarioActivo");
    

    // Opcional: Mostrar alerta
    Swal.fire({
        title: "Sesión cerrada",
        text: "Has cerrado sesión correctamente",
        icon: "success",
    }).then(() => {
        // Redirigir después de cerrar sesión
        window.location.href = "../paginas/acerca.html"; // o donde desees
    });
});
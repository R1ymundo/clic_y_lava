const navegacion = document.getElementById("navegacion");
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
            <a class="nav-link" href="../paginas/inicioSesion.html" style="margin-right: 1rem;">Iniciar sesion</a>
            <a class="nav-link" href="../paginas/compras.html">Mis Compras
                <img src="../assets/icons/carrito.webp" alt="Carrito" width="30" height="24">
            </a>
        </div>  
    `
);

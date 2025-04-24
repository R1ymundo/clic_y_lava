const navegacion = document.getElementById("navegacion");
navegacion.insertAdjacentHTML("afterbegin",` <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <div class="col-5">
                <a class="navbar-brand" href="">Clic y lava</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <div class="col-5">
                            <a class="nav-link " aria-current="page" href="#">Nosotros</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Productos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#">Contacto</a>
                    </li>
            </div>
            </ul>
            <a class="nav-link" href="#">Mis Compras
                <img src="../assets/icons/carrito.webp" alt="Carrito" width="30" height="24">
            </a>
        </div>
        </div>
    </nav>
    `
)
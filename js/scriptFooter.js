const agregarFooter = document.getElementById("agregarFooter");

agregarFooter.insertAdjacentHTML(
  "afterbegin",
  `
  <div class="row" style="background-color: #FFB36D; text-align: center; align-items: center;">
    <div class="col-sm-6 mb-4 d-flex flex-column justify-content-center align-items-center">
      <div class="container">
        <img src="../assets/icons/logo_clic_lava.png" style="width:5rem; display:block; margin:0 auto;">
        <div style="margin-top: 1rem;">
          <a href="mailto:cliclava@gmail.com">
            <img src="../assets/icons/correo.webp" style="width:2rem; margin: 0 .5rem;">
          </a>
          <a href="https://github.com/R1ymundo/clic_y_lava/tree/develop">
            <img src="../assets/icons/github.webp" style="width:2rem; margin: 0 .5rem;">
          </a>
        </div>
        <p style="margin-top: 0.5rem;">cliclava@gmail.com</p>
      </div>
    </div>

    <div class="col-sm-6 mb-4 d-flex flex-column justify-content-center align-items-center">
      <div class="container text-center">
        <p style="margin-bottom: 0.5rem;">Proyecto integrador desarrollado en Generation México</p>
        <a href="https://mexico.generation.org/">
          <img src="../assets/icons/generation.webp" style="width:6rem;">
        </a>
      </div>
    </div>
  </div>
`
);

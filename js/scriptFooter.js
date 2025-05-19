const agregarFooter = document.getElementById("agregarFooter");

agregarFooter.insertAdjacentHTML(
  "afterbegin",
  `
  <div class="row g-0 m-0 p-0" style="background-color: #FFB36D; text-align: center; align-items: center; margin: 0 !important; padding: 0 !important;">
  <div class="col-sm-6 p-0 d-flex flex-column justify-content-center align-items-center">
    <div class="container p-0">
      <div style="margin: 0; display: flex; justify-content: center; gap: 1.5rem;">
        <a href="mailto:cliclava@gmail.com">
          <img src="../assets/icons/correo.webp" style="width:2rem; margin: 0;">
        </a>
        <a href="https://github.com/R1ymundo/clic_y_lava/tree/develop">
          <img src="../assets/icons/github.webp" style="width:2rem; margin: 0;">
        </a>
      </div>
      <p style="margin: 0; font-family: 'Inter', sans-serif; font-size: 18px;">cliclava@gmail.com</p>
    </div>
  </div>

  <div class="col-sm-6 p-0 d-flex flex-column justify-content-center align-items-center">
    <div class="container text-center p-0">
      <p style="margin: 0; font-family: 'Inter', sans-serif; font-size: 18px;">Proyecto integrador desarrollado en Generation México</p>
      <a href="https://mexico.generation.org/">
        <img src="../assets/icons/generation.webp" style="width:6rem; margin: 0;">
      </a>
    </div>
  </div>
</div>
`
);

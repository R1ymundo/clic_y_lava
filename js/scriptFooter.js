const agregarFooter = document.getElementById("agregarFooter");

agregarFooter.insertAdjacentHTML("afterbegin",
    `<div class="row" style="background-color: #FEB36D;">
        <div class="col-sm-6 mb-3 mb-sm-0">
            <div class="container">
                <img src="../assets/icons/logo_clic_lava.png"  style="width:5rem; display: block; margin: 0 auto;" >
                <p style="text-align: center;"><img src="../assets/icons/correo.webp"style="width:2rem; display: block; margin: 0 auto;">cliclava@gmail.com</p>
                <a href="https://github.com/R1ymundo/clic_y_lava"> <img src="../assets/icons/github.webp" style="width:2rem; display: block; margin: 0 auto;"></a>
            </div>
        </div>

        <div class="col-sm-6 mb-3 mb-sm-0"> 
            <div class="container">
               <p>Proyecto integrador desarrollado en Generation México</p>
              <a href ="https://mexico.generation.org/"><img src="../assets/icons/generation.webp" style="width:3rem;"></a>
            </div>
        </div>
                 

                
    </div>`

);



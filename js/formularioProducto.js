const btnArchivo = document.querySelector('#btn-archivo');
const imgProduct = document.querySelector('#img-product');
const nombreProducto = document.getElementById("nombreProducto");
const stock = document.getElementById("stock");
const precio = document.getElementById("precio");
const listaCategoria = document.getElementById("listaCategoria");
const listaMarca = document.getElementById("listaMarca");
const descripcion = document.getElementById("descripcion");
const caracteristica1 = document.getElementById("caracteristica1");
const caracteristica2 = document.getElementById("caracteristica2");
const btnEnviar = document.getElementById("btnEnviar");

// Expresiones regulares para validaciones
const regex = {
    nombre: /^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s\-\.]{5,50}$/,
    descripcion: /^[\w\sáéíóúÁÉÍÓÚñÑ.,;:¡!¿?()\-'"]{20,500}$/,
    caracteristica: /^[\w\sáéíóúÁÉÍÓÚñÑ.,;:¡!¿?()\-'"]{3,100}$/,
    imagen: /\.(jpg|jpeg|png|gif|webp)$/i
};


let widget_cloudinary = cloudinary.createUploadWidget({
    cloudName: "deppn8ze4", 
    uploadPreset: 'clic_test'
}, (err, result) => {
    if(!err && result && result.event === 'success'){
        console.log('Imagen subida con éxito', result.info);
        imgProduct.src = result.info.secure_url;
        imgProduct.style.display = 'block';
    }
});

// Función para mostrar errores
function mostrarError(elemento, mensaje) {
    const grupo = elemento.closest('.mb-3') || elemento.parentElement;
    const errorExistente = grupo.querySelector('.text-danger');
    
    if(errorExistente) errorExistente.remove();
    
    if(mensaje) {
        const errorElement = document.createElement('div');
        errorElement.className = 'text-danger mt-1';
        errorElement.textContent = mensaje;
        grupo.appendChild(errorElement);
        
        elemento.classList.add('is-invalid');
        elemento.classList.remove('is-valid');
    } else {
        elemento.classList.remove('is-invalid');
        elemento.classList.add('is-valid');
    }
}

// Funciones de validación
function validarNumero(num, esStock = false) {
    const valor = num.value.trim();
    
    if(valor === "") return "Este campo es obligatorio";
    if(isNaN(valor)) return "Debe ser un número válido";
    
    if(esStock) {
        if(!/^\d+$/.test(valor) || Number(valor) < 0) {
            return "El stock debe ser un número entero positivo";
        }
    } else {
        if(!/^\d+(\.\d{1,2})?$/.test(valor)) {
            return "El precio debe tener máximo 2 decimales";
        }
        if(Number(valor) <= 0) return "El precio debe ser mayor a 0";
    }
    
    return null;
}

function validarSelect(select) {
    if(!select.value || select.selectedIndex <= 0) {
        return "Debes seleccionar una opción";
    }
    return null;
}

function validarTexto(texto, tipo) {
    const valor = texto.value.trim();
    
    if(valor === "") return "Este campo es obligatorio";
    
    switch(tipo) {
        case 'nombre':
            if(!regex.nombre.test(valor)) return "El nombre debe tener entre 5-50 caracteres";
            break;
        case 'descripcion':
            if(!regex.descripcion.test(valor)) return "La descripción debe tener entre 20-500 caracteres";
            break;
        case 'caracteristica':
            if(!regex.caracteristica.test(valor)) return "La característica debe tener entre 3-100 caracteres";
            break;
    }
    
    return null;
}

// Validación completa del formulario
function validarFormularioCompleto() {
    let valido = true;
    
   
    mostrarError(nombreProducto, validarTexto(nombreProducto, 'nombre'));
    mostrarError(descripcion, validarTexto(descripcion, 'descripcion'));
    mostrarError(caracteristica1, validarTexto(caracteristica1, 'caracteristica'));
    mostrarError(caracteristica2, validarTexto(caracteristica2, 'caracteristica'));
    
   
    mostrarError(stock, validarNumero(stock, true));
    mostrarError(precio, validarNumero(precio));
    
    mostrarError(listaCategoria, validarSelect(listaCategoria));
    mostrarError(listaMarca, validarSelect(listaMarca));
    
    
    if(!imgProduct.src) {
        const grupo = btnArchivo.closest('.mb-3') || btnArchivo.parentElement;
        const errorExistente = grupo.querySelector('.text-danger');
        if(errorExistente) errorExistente.remove();
        
        const errorElement = document.createElement('div');
        errorElement.className = 'text-danger mt-1';
        errorElement.textContent = "Debes subir una imagen principal";
        grupo.appendChild(errorElement);
        valido = false;
    }
    
    // Verificar si hay errores
    document.querySelectorAll('.is-invalid').forEach(el => {
        if(el.classList.contains('is-invalid')) valido = false;
    });
    
    return valido;
}

// Funciones para crear y guardar producto
function crearProducto() {
    return {
        "nombre": nombreProducto.value.trim(),
        "stock": stock.value.trim(),
        "precio": precio.value.trim(),
        "categoria": listaCategoria.value,
        "marca": listaMarca.value,
        "descripcion": descripcion.value.trim(),
        "caracteristica1": caracteristica1.value.trim(),
        "caracteristica2": caracteristica2.value.trim(),
        "imagenPrincipal": "https://upload-widget.cloudinary.com"
    };
}

function guardarProducto(producto) {
    let productosGuardados = JSON.parse(localStorage.getItem("newProduct")) || [];
    productosGuardados.push(producto);
    localStorage.setItem("newProduct", JSON.stringify(productosGuardados));
}


btnEnviar.addEventListener("click", async function(event){
    event.preventDefault();
    
    // Limpiar validaciones previas
    document.querySelectorAll('.is-invalid, .is-valid').forEach(el => {
        el.classList.remove('is-invalid', 'is-valid');
    });
    
    
    const campos = [
        { element: nombreProducto, name: "Nombre del producto" },
        { element: stock, name: "Stock" },
        { element: precio, name: "Precio" },
        { element: listaCategoria, name: "Categoría" },
        { element: listaMarca, name: "Marca" },
        { element: descripcion, name: "Descripción" },
        { element: caracteristica1, name: "Característica 1" },
        { element: caracteristica2, name: "Característica 2" }
    ];
    
    let camposFaltantes = [];
    let mensajesError = [];
    
    campos.forEach(campo => {
        const value = campo.element.value ? campo.element.value.trim() : '';
        if(!value) {
            mostrarError(campo.element, "Este campo es obligatorio");
            camposFaltantes.push(campo.element);
            mensajesError.push(campo.name);
        }
    });
    
    if(!imgProduct.src) {
        mensajesError.push("Imagen principal");
        camposFaltantes.push(btnArchivo);
    }
    
    if(camposFaltantes.length > 0) {
        camposFaltantes[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
        camposFaltantes.forEach(campo => {
            campo.classList.add('campo-faltante');
            setTimeout(() => campo.classList.remove('campo-faltante'), 1000);
        });
        
        await Swal.fire({
            title: '¡Campos incompletos!',
            html: `
                <div style="text-align: left;">
                    <p>Por favor completa los siguientes campos obligatorios:</p>
                    <ul style="margin-left: 20px;">
                        ${mensajesError.map(mensaje => `<li>${mensaje}</li>`).join('')}
                    </ul>
                </div>
            `,
            icon: 'error',
            confirmButtonText: 'Entendido',
            customClass: { popup: 'swal-wide' }
        });
        return;
    }
    
    // Validación completa de formato
    if(validarFormularioCompleto()) {
        await Swal.fire({
            title: '¡Éxito!',
            text: 'El producto se ha registrado correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
        
        guardarProducto(crearProducto());
        document.querySelector("form").reset();
        imgProduct.src = "";
        imgProduct.style.display = 'none';
    } else {
        await Swal.fire({
            title: 'Error de validación',
            html: `
                <div style="text-align: left;">
                    <p>Por favor corrige los siguientes errores:</p>
                    <ul style="margin-left: 20px;">
                        ${Array.from(document.querySelectorAll('.is-invalid'))
                            .map(el => {
                                const label = document.querySelector(`label[for="${el.id}"]`);
                                const fieldName = label ? label.textContent.replace(':', '') : 'Campo';
                                const errorMsg = el.parentElement.querySelector('.text-danger');
                                return `<li><strong>${fieldName}:</strong> ${errorMsg?.textContent || 'Dato inválido'}</li>`;
                            })
                            .join('')}
                    </ul>
                </div>
            `,
            icon: 'error',
            confirmButtonText: 'Entendido',
            customClass: { popup: 'swal-wide' }
        });
    }
});


btnArchivo.addEventListener('click', () => {
    widget_cloudinary.open();
});
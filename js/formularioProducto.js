const btnArchivo = document.querySelector("#btn-archivo");
const imgProduct = document.querySelector("#img-product");
const nombreProducto = document.getElementById("nombreProducto");
const stock = document.getElementById("stock");
const precio = document.getElementById("precio");
const listaCategoria = document.getElementById("listaCategoria");
const listaMarca = document.getElementById("listaMarca");
const descripcion = document.getElementById("descripcion");
const btnEnviar = document.getElementById("btnEnviar");

// Expresiones regulares para validaciones
const regex = {
  nombre: /^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s\-\.]{5,50}$/,
  descripcion: /^[\w\sáéíóúÁÉÍÓÚñÑ.,;:¡!¿?()\-'"]{20,500}$/,
  imagen: /\.(jpg|jpeg|png|gif|webp)$/i,
};

let widget_cloudinary = cloudinary.createUploadWidget(
  {
    cloudName: "deppn8ze4",
    uploadPreset: "clic_test",
  },
  (err, result) => {
    if (!err && result && result.event === "success") {
      console.log("Imagen subida con éxito", result.info);
      imgProduct.src = result.info.secure_url;
      imgProduct.style.display = "block";

      // Limpiar error de imagen si existe
      const grupo = btnArchivo.closest(".mb-3") || btnArchivo.parentElement;
      const errorExistente = grupo.querySelector(".text-danger");
      if (errorExistente) errorExistente.remove();
    }
  }
);

// Función para mostrar errores
function mostrarError(elemento, mensaje) {
  const grupo = elemento.closest(".mb-3") || elemento.parentElement;
  const errorExistente = grupo.querySelector(".text-danger");

  if (errorExistente) errorExistente.remove();

  //Remover la clase is-invalid con la de is-valid
  elemento.classList.remove("is-invalid", "is-valid");

  if (mensaje) {
    const errorElement = document.createElement("div");
    errorElement.className = "text-danger mt-1";
    errorElement.textContent = mensaje;
    grupo.appendChild(errorElement);

    elemento.classList.add("is-invalid");
  } else {
    elemento.classList.remove("is-invalid");
  }
}

// Funciones de validación
function validarNumero(num, esStock = false) {
  const valor = num.value.trim();

  if (valor === "") return "Este campo es obligatorio";
  if (isNaN(valor)) return "Debe ser un número válido";

  if (esStock) {
    if (!/^\d+$/.test(valor) || Number(valor) < 1) {
      return "En el stock debe haber al menos un producto";
    }
  } else {
    if (Number(valor) < 1) return "El precio debe ser mayor a 0";

    if (!/^\d+(\.\d{1,2})?$/.test(valor)) {
      return "El precio debe tener máximo 2 decimales";
    }
  }

  return null;
}

function validarSelect(select) {
  if (!select.value || select.selectedIndex <= 0) {
    return "Debes seleccionar una opción";
  }
  return null;
}

function validarTexto(texto, tipo) {
  const valor = texto.value.trim();

  if (valor === "") return "Este campo es obligatorio";

  switch (tipo) {
    case "nombre":
      if (!regex.nombre.test(valor))
        return "El nombre debe tener entre 5-50 caracteres";
      break;
    case "descripcion":
      if (!regex.descripcion.test(valor))
        return "La descripción debe tener entre 20-500 caracteres";
      break;
  }

  return null;
}

// Validación completa del formulario
function validarFormularioCompleto() {
  let valido = true;

  mostrarError(nombreProducto, validarTexto(nombreProducto, "nombre"));
  mostrarError(descripcion, validarTexto(descripcion, "descripcion"));

  mostrarError(stock, validarNumero(stock, true));
  mostrarError(precio, validarNumero(precio));

  mostrarError(listaCategoria, validarSelect(listaCategoria));
  mostrarError(listaMarca, validarSelect(listaMarca));

  if (!imgProduct.src) {
    const grupo = btnArchivo.closest(".mb-3") || btnArchivo.parentElement;
    const errorExistente = grupo.querySelector(".text-danger");
    if (errorExistente) errorExistente.remove();

    const errorElement = document.createElement("div");
    errorElement.className = "text-danger mt-1";
    errorElement.textContent = "Debes subir una imagen principal";
    grupo.appendChild(errorElement);
    valido = false;
  }

  // Verificar si hay errores
  document.querySelectorAll(".is-invalid").forEach((el) => {
    if (el.classList.contains("is-invalid")) valido = false;
  });

  return valido;
}

//////////////////<-- Inicio agregar producto -->//////////////////

async function guardarProducto() {
  // Obtener datos del formulario ->
  const nombre = nombreProducto.value.trim();
  const descripcionTexto = descripcion.value.trim();
  const precioUnitario = Number(precio.value.trim());
  const stockDisponible = Number(stock.value.trim());
  const imagenPrincipal = imgProduct.src;

  // Crear el objeto que se espera en el backend Java ->
  const producto = {
    nombre: nombre,
    descripcion: descripcionTexto,
    precio: precioUnitario,
    stock: stockDisponible,
    imagen: imagenPrincipal,
  };

  try {
    const response = await fetch("/api/productos/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });

    if (!response.ok) {
      throw new Error(`Error del servidor: ${response.status}`);
    }

    const data = await response.json();
    console.log("Producto guardado en backend:", data);
    alert("Producto guardado correctamente");
    return true;
  } catch (error) {
    console.error("Error al guardar producto:", error);
    alert("Error al guardar el producto");
    return false;
  }
}

//////////////////<-- Fin agregar producto -->//////////////////

//Validaciones

nombreProducto.addEventListener("input", () => {
  const error = validarTexto(nombreProducto, "nombre");
  mostrarError(nombreProducto, error);
  if (!error) nombreProducto.classList.add("is-valid");
});

stock.addEventListener("input", () => {
  const error = validarNumero(stock, true);
  mostrarError(stock, error);
  if (!error) stock.classList.add("is-valid");
});

precio.addEventListener("input", () => {
  const error = validarNumero(precio);
  mostrarError(precio, error);
  if (!error) precio.classList.add("is-valid");
});

listaCategoria.addEventListener("change", () => {
  const error = validarSelect(listaCategoria);
  mostrarError(listaCategoria, error);
  if (!error) listaCategoria.classList.add("is-valid");
});

listaMarca.addEventListener("change", () => {
  const error = validarSelect(listaMarca);
  mostrarError(listaMarca, error);
  if (!error) listaMarca.classList.add("is-valid");
});

descripcion.addEventListener("input", () => {
  const error = validarTexto(descripcion, "descripcion");
  mostrarError(descripcion, error);
  if (!error) descripcion.classList.add("is-valid");
});

btnEnviar.addEventListener("click", async (event) => {
  event.preventDefault();

  // Limpiar validaciones
  document.querySelectorAll(".is-invalid, .is-valid").forEach((el) => {
    el.classList.remove("is-invalid", "is-valid");
  });

  const campos = [
    { element: nombreProducto, name: "Nombre del producto" },
    { element: stock, name: "Stock" },
    { element: precio, name: "Precio" },
    { element: listaCategoria, name: "Categoría" },
    { element: listaMarca, name: "Marca" },
    { element: descripcion, name: "Descripción" },
  ];

  let camposFaltantes = [];
  let mensajesError = [];

  campos.forEach((campo) => {
    const value = campo.element.value ? campo.element.value.trim() : "";
    if (!value) {
      mostrarError(campo.element, "Este campo es obligatorio");
      camposFaltantes.push(campo.element);
      mensajesError.push(campo.name);
    }
  });

  if (!imgProduct.src) {
    mensajesError.push("Imagen principal");
    camposFaltantes.push(btnArchivo);
  }

  if (camposFaltantes.length > 0) {
    camposFaltantes[0].scrollIntoView({ behavior: "smooth", block: "center" });
    camposFaltantes.forEach((campo) => {
      campo.classList.add("campoFaltante");
      setTimeout(() => campo.classList.remove("campoFaltante"), 1000);
    });

    await Swal.fire({
      title: "¡Campos incompletos!",
      html: `
                <div style="text-align: left;">
                    <p>Por favor completa los siguientes campos obligatorios:</p>
                    <ul style="margin-left: 20px;">
                        ${mensajesError
                          .map((mensaje) => `<li>${mensaje}</li>`)
                          .join("")}
                    </ul>
                </div>
            `,
      icon: "error",
      confirmButtonText: "Entendido",
      customClass: { popup: "swal-wide" },
    });
    return;
  }

  // Validación completa de formato
  if (validarFormularioCompleto()) {
    // Guardamos el producto
    if (guardarProducto()) {
      // Limpiamos el formulario
      document.querySelector("form").reset();
      imgProduct.src = "";
      imgProduct.style.display = "none";

      // Quitamos las clases de validación
      document.querySelectorAll(".is-invalid, .is-valid").forEach((el) => {
        el.classList.remove("is-invalid", "is-valid");
      });

      // Actualizamos las cards si estamos en la página de productos
      if (typeof window.fetchingProducts === "function") {
        try {
          window.fetchingProducts();
        } catch (error) {
          console.error("Error al actualizar productos:", error);
        }
      }

      await Swal.fire({
        title: "¡Éxito!",
        text: "El producto se ha registrado correctamente",
        icon: "success",
        confirmButtonText: "Aceptar",
      }).then(() => {
        // Redireccionar a la página de productos
        window.location.href = "productos.html";
      });
    }
  } else {
    await Swal.fire({
      title: "Error de validación",
      html: `
                <div style="text-align: left;">
                    <p>Por favor corrige los siguientes errores:</p>
                    <ul style="margin-left: 20px;">
                        ${Array.from(document.querySelectorAll(".is-invalid"))
                          .map((el) => {
                            const label = document.querySelector(
                              `label[for="${el.id}"]`
                            );
                            const fieldName = label
                              ? label.textContent.replace(":", "")
                              : "Campo";
                            const errorMsg =
                              el.parentElement.querySelector(".text-danger");
                            return `<li><strong>${fieldName}:</strong> ${
                              errorMsg?.textContent || "Dato inválido"
                            }</li>`;
                          })
                          .join("")}
                    </ul>
                </div>
            `,
      icon: "error",
      confirmButtonText: "Entendido",
      customClass: { popup: "swal-wide" },
    });
  }
});

btnArchivo.addEventListener("click", () => {
  widget_cloudinary.open();
});

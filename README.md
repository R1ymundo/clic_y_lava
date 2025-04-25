# Proyecto Integrador Equipo 3 | Click & Lava 🚀

![HTML](https://img.shields.io/badge/HTML-%23E34F26.svg?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-%231572B6.svg?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=flat&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-%23563D7C.svg?style=flat&logo=bootstrap&logoColor=white)

---

### 📌 Contiene:

- Pagina acerca del equipo: Donde se explica acerca de la e-commerce y los servicios.
- Integrantes del equipo, una pequeña descripción y su rol.
- Pagina contáctanos: Donde se muestra un formulario que al llenarlo y enviarlo su contenido se envia al correo del e-commerce.
- Pagina contáctanos: Realiza validaciones con funciones de JS para los tipos de entrada.

### 🧰 Herramientas y tecnologias:

- HTML 5
- CSS
- Bootstrap
- JavaScript
- EmailJs
- Sweetalert2
- Figma (wireframes)

---

### 📝 Codigo para traer la ultima version del proyecto:

```bash
git checkout -b <tu_rama>
git pull origin develop
```

- **git checkout -b <tu_rama>**: ya ubicado en una rama de trabajo general (git checkout <rama>) creada ya por mutuo acuerdo entre todo el equipo, en donde se subirá el codigo de todos de dicha tarea en curso para subir a rama "develop" al final, crea tu sub-rama y te cambia a ella al mismo tiempo con este comando.
- **git pull origin develop**: ya estando en tu sub-rama creada con el anterior comando, se hace el pull desde develop, ya que es la rama principal de desarrollo, para obtener la ultima version del proyecto o de alguna otra rama de la que se quieran traer los ultimos cambios)

- 💡 **Sugerencia adicional**:
**"git fetch --all"**: descarga los cambios y ramas creadas por otros compañeros desde el repositorio remoto a tu repositorio local, esto si es que alguien ya hizo algun cambio o subio algo antes que cualquiera de los integrantes, solo que no los integra en tus sub-ramas locales que hayas creado si es que creaste una rama antes, ahi se tendria que hacer pull desde la rama en donde se hayan hecho adiciones o modificaciones antes.

### 📝 Codigo para actualizar el proyecto:

```bash
git status
git add .
git commit -m "Mensaje del commit"
git push origin <rama o sub-rama a la cual seran subidos los cambios>
```

### 📝 Codigo para hacer merge:

```bash
git status
git add .
git commit -m "Agrega vista y lógica para el registro de usuarios(ejemplo)"
git push origin feature/registro-usuario
git checkout develop (o rama de trabajo de tarea en curso)
git pull origin develop
git merge feature/registro-usuario
git push origin develop
```

- **1. Verifica los cambios locales**
git status
- **2. Agrega los archivos modificados**
git add .
- **3. Realiza el commit**
git commit -m "Mensaje del commit"
- **4. Sube tu rama de trabajo al repositorio remoto (ej. origin)**
git push origin <nombre_de_tu_rama>
- **5. Cambia a la rama de destino donde quieres hacer el merge (por ejemplo develop)**
git checkout develop
- **6. Asegúrarse de tener la versión más reciente de develop o la rama de trabajo general**
git pull origin develop
- **7. Hacer el merge desde tu rama hacia develop o rama de trabajo general**
git merge <nombre-de-tu-rama>
- **8. Resolver conflictos si es que los hay (En Vs Code se pueden resolver)**
- **9. Luego del merge exitoso, sube los cambios a la rama principal (ejemplo develop) o rama de trabajo general**
git push origin develop

---

### 🙌 Equipo de desarrollo:

- [Ana Gabriela García García](https://github.com/gabs-g)
- [Anthony Velázquez Reyes](https://github.com/Anthonyvrc)
- [Eduardo Martínez Juárez](https://github.com/Eduardo-Mtz-Jrz)
- [Jesus Galicia Rueda](https://github.com/Jesus-rg95)
- [Karla Odeth Ruiz Sánchez](https://github.com/Karla-ORS)
- [Raymundo Mendoza Ramirez](https://github.com/R1ymundo)
- [Ricardo Miguel Raya](https://github.com/RicardoMiguelR)
- [Sandra De La Sancha Aguilar](https://github.com/Sandra-De-La-Sancha)

---

### ✅ Vista previa del proyecto

> ![N|Solid](https://raw.githubusercontent.com/R1ymundo/clic_y_lava/refs/heads/acercaNosotros/assets/img/acerca1.webp)
![N|Solid](https://raw.githubusercontent.com/R1ymundo/clic_y_lava/refs/heads/acercaNosotros/assets/img/acerca2.webp)
![N|Solid](https://raw.githubusercontent.com/R1ymundo/clic_y_lava/refs/heads/acercaNosotros/assets/img/acerca3.webp)
![N|Solid](https://raw.githubusercontent.com/R1ymundo/clic_y_lava/refs/heads/paginaContacto/assets/img/contactanos.png)
![N|Solid](https://raw.githubusercontent.com/R1ymundo/clic_y_lava/refs/heads/paginaContacto/assets/img/contactanos.png)
![N|Solid](https://raw.githubusercontent.com/R1ymundo/clic_y_lava/refs/heads/paginaContacto/assets/img/contactanos3.png)

---

### 👉 Créditos

Hecho en Generation México, Cohorte #53

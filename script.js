let currentIndex = 0;

const images = [
    "img/2_DISEÑO DE INTERIOR con madera.jpg",
    "img/1_muebles para baños.jpg",
    "img/3_DISEÑO DE INTERIOR MINIMALISTA.jpg",
]; // Agrega aquí las rutas de tus imágenes

/*function showSlide(index) {
    const carouselImg = document.getElementById("carouselImg");
    currentIndex = (index + images.length) % images.length; // Para asegurar que el índice esté dentro de los límites del array

    carouselImg.src = images[currentIndex];
}*/
function showSlide(index) {
    const carouselImg = document.getElementById("carouselImg");
    const nextImg = document.getElementById("nextImg");

    currentIndex = (index + images.length) % images.length; // Para asegurar que el índice esté dentro de los límites del array

    carouselImg.src = images[currentIndex];
    nextImg.src = images[(currentIndex + 1) % images.length];
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Mostrar la primera imagen al cargar la página
showSlide(currentIndex);
// Cambiar la imagen cada 5 segundos
setInterval(nextSlide, 5000); // 5000 milisegundos = 5 segundos

// Función para abrir el modal
function openModal(imageSrc) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

// Función para cerrar el modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Función para cambiar las imágenes según el ambiente seleccionado
function cambiarAmbiente(ambiente) {
    var galeria = document.getElementById("galeria");
    galeria.innerHTML = ""; // Limpiar galería actual

    // Obtener las imágenes del ambiente seleccionado
    for (var i = 1; i <= 10; i++) {
        var imgSrc = "/img" + ambiente + "/" + i + "_" + ambiente + ".jpg"; // Ruta de la imagen
        var imgElement = document.createElement("img"); // Crear elemento de imagen
        imgElement.src = imgSrc; // Establecer atributo src
        imgElement.classList.add("thumbnail"); // Agregar clase thumbnail
        imgElement.onclick = function () {
            openModal(this.src);
        }; // Asignar función onclick
        galeria.appendChild(imgElement); // Agregar imagen a la galería
    }
}

function validateForm(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Obtener valores de los campos
    var nombre = document.getElementById("nombre").value.trim();
    var correo = document.getElementById("email").value.trim();
    var mensaje = document.getElementById("mensaje").value.trim();

    // Validación de campos vacíos
    if (nombre === "" || correo === "" || mensaje === "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    // Validación del nombre: no permitir números y longitud máxima de 20 caracteres
    var nombreRegex = /^[A-Za-z]{1,20}$/;
    if (!nombreRegex.test(nombre)) {
        alert(
            "Por favor, ingrese un nombre válido sin números y máximo 20 caracteres."
        );
        return false;
    }


    // Si todas las validaciones pasan, el formulario se envía
    alert("Formulario enviado correctamente.");

    // Mostrar los datos enviados en el HTML
    var datosEnviados = document.createElement("div");
    datosEnviados.innerHTML =
        "<h2>Datos Enviados:</h2>" +
        "<p><strong>Nombre:</strong> " +
        nombre +
        "</p>" +
        "<p><strong>Correo:</strong> " +
        correo +
        "</p>" +
        "<p><strong>Mensaje:</strong> " +
        mensaje +
        "</p>";
    document.getElementById("datosEnviados").appendChild(datosEnviados);

    // Limpiar el formulario después del envío
    document.getElementById("contactForm").reset();

    return true;
}
function validateNombre() {
    const nombre = document.getElementById("nombre").value;
    if (!/^[a-zA-Z\s]*$/.test(nombre)) {
        alert("El nombre solo debe contener letras y espacios.");
    }
}

function validateCorreo() {
    const correo = document.getElementById("email");
    if (!correo) {
        alert("El campo de correo electrónico no se encontró en el formulario.");
        return;
    }
    const correoValue = correo.value.trim();
    if (correoValue === "") {
        alert("El correo electrónico no puede estar vacío.");
    } else if (!/\S+@\S+\.\S+/.test(correoValue)) {
        alert("Ingrese un correo electrónico válido.");
    }
}
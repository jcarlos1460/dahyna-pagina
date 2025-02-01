// Seleccionamos el botón "No"
const botonNo = document.getElementById('no');

// Función para mover el botón "No" a una posición aleatoria
function moverBoton() {
    // Obtenemos las dimensiones de la ventana del navegador
    const anchoVentana = window.innerWidth;
    const altoVentana = window.innerHeight;

    // Generamos coordenadas aleatorias dentro de la ventana
    const nuevaX = Math.random() * (anchoVentana - botonNo.offsetWidth);
    const nuevaY = Math.random() * (altoVentana - botonNo.offsetHeight);

    // Movemos el botón a la nueva posición
    botonNo.style.left = `${nuevaX}px`;
    botonNo.style.top = `${nuevaY}px`;
}

// Detectamos cuando el cursor se acerca al botón "No"
botonNo.addEventListener('mouseover', moverBoton);
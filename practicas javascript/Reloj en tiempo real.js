function mostrarReloj() {
    const fecha = new Date();
    const hora = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');
    const segundos = fecha.getSeconds().toString().padStart(2, '0');

    console.log(`${hora}:${minutos}:${segundos}`);
}

// Actualizar el reloj cada segundo
setInterval(mostrarReloj, 1000);

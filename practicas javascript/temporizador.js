function iniciarCuentaRegresiva(segundos) {
    const intervalo = setInterval(() => {
        console.log(`Quedan: ${segundos} segundos`);
        segundos--;

        if (segundos < 0) {
            clearInterval(intervalo);
            console.log("¡Tiempo terminado!");
        }
    }, 1000);
}

// Ejemplo de uso
iniciarCuentaRegresiva(10); // Inicia una cuenta regresiva desde 10 segundos.
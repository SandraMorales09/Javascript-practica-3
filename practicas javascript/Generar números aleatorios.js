function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Ejemplo de uso
console.log(generarNumeroAleatorio(1, 100)); // Resultado: Número aleatorio entre 1 y 100

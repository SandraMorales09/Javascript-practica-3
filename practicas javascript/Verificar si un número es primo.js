function esNumeroPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

// Ejemplo de uso
console.log(esNumeroPrimo(7)); // Resultado: true
console.log(esNumeroPrimo(10)); // Resultado: false

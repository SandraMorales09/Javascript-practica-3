function contarPalabras(texto) {
    const palabras = texto.trim().split(/\s+/);
    return palabras.length;
}

// Ejemplo de uso
const textoEjemplo = "Este es un ejemplo de texto.";
console.log(contarPalabras(textoEjemplo)); // Resultado: 6
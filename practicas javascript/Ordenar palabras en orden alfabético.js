function ordenarPalabras(frase) {
    const palabras = frase.split(" ");
    return palabras.sort().join(" ");
}

// Ejemplo de uso
console.log(ordenarPalabras("manzana pera uva durazno")); 
// Resultado: "durazno manzana pera uva"
function revertirTexto(texto) {
    return texto.split("").reverse().join("");
}

// Ejemplo de uso
const textoOriginal = "Hola Mundo";
console.log(revertirTexto(textoOriginal)); // Resultado: "odnuM aloH"
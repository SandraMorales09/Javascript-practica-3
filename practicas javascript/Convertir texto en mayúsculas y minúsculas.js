function convertirTexto(texto) {
    const mayusculas = texto.toUpperCase();
    const minusculas = texto.toLowerCase();

    return { mayusculas, minusculas };
}

// Ejemplo de uso
const texto = "Hola Mundo";
console.log(convertirTexto(texto));
// Resultado: { mayusculas: "HOLA MUNDO", minusculas: "hola mundo" }
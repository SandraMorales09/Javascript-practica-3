const nombres = ["Ana", "Juan", "Luis", "María", "Pedro"];
const nombresFiltrados = nombres.filter(nombre => nombre.startsWith("M"));

console.log(nombresFiltrados); // Resultado: ["María"]
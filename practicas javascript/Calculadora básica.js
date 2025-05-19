function calculadora(operacion, num1, num2) {
    switch (operacion) {
        case "suma":
            return num1 + num2;
        case "resta":
            return num1 - num2;
        case "multiplicacion":
            return num1 * num2;
        case "division":
            return num1 / num2;
        default:
            return "Operación no válida.";
    }
}

// Ejemplo de uso
console.log(calculadora("suma", 5, 3)); // Resultado: 8
function calcularDiferenciaFechas(fecha1, fecha2) {
    const fechaInicio = new Date(fecha1);
    const fechaFin = new Date(fecha2);

    const diferenciaEnMilisegundos = Math.abs(fechaFin - fechaInicio);
    const dias = diferenciaEnMilisegundos / (1000 * 60 * 60 * 24);

    return dias;
}

// Ejemplo de uso
console.log(calcularDiferenciaFechas("2025-03-01", "2025-03-10")); 
// Resultado: 9
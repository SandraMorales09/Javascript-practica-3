function contarCaracteres(palabra) {
    const contador = {};
    for (let letra of palabra) {
        contador[letra] = (contador[letra] || 0) + 1;
    }
    return contador;
}

// Ejemplo de uso
console.log(contarCaracteres("javascript")); 
// Resultado: { j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }

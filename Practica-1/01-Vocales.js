const contarVocales = (texto) => {
    const vocales = 'aeiou';
    const resultado = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    for (const char of texto.toLowerCase()) {
        if (vocales.includes(char)) {
            resultado[char]++;
        }
    }
    return resultado;
};
console.log(contarVocales("euforia"));
const paresImpares = (arreglo) => {
    const pares = [], impares = [];
    for (const num of arreglo) {
        num % 2 === 0 ? pares.push(num) : impares.push(num);
    }
    return { pares, impares };
};
console.log(paresImpares([1,2,3,4,5]));
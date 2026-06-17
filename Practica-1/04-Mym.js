const obtenerExtremos = (arreglo) => ({
    mayor: Math.max(...arreglo),
    menor: Math.min(...arreglo)
});
console.log(obtenerExtremos([3,1,5,4,2]));
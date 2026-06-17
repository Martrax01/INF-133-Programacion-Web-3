const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Datos extraídos correctamente de la promesa");
    }, 1500);
});
const promesaACallback = (promesa, callback) => {
    promesa
        .then(resultado => callback(null, resultado))
        .catch(error => callback(error, null));
};
promesaACallback(miPromesa, (error, resultado) => {
    if (error) {
        console.error("El Callback atrapó un error:", error);
    } else {
        console.log("El Callback recibió el éxito:", resultado);
    }
});
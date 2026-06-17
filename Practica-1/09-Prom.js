const promesaExito = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Mensaje de éxito");
    }, 3000);
});

promesaExito.then((mensaje) => {
    console.log(mensaje);
});

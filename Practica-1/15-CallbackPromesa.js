function descargar(callback) {
    console.log("Iniciando descarga de archivo...");
    setTimeout(() => {
        const arch = 'imagen_umsa.png';
        callback(null, arch);
    }, 2000);
}
const descargarPromesa = () => {
    return new Promise((resolve, reject) => {
        descargar((err, archivo) => {
            if (err) reject(err);
            else resolve(archivo);
        });
    });
};
descargarPromesa()
    .then(archivo => console.log("Resultado de la Promesa:", archivo))
    .catch(error => console.error(error));
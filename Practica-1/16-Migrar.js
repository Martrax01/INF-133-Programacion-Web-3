const obtenerDatosEstudiante = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve({ nombre: "Eduardo", carrera: "Informática" }), 1500);
    });
};
const mostrarInfo = async () => {
    console.log("Consultando datos...");
    const estudiante = await obtenerDatosEstudiante();
    console.log(`Estudiante: ${estudiante.nombre} de la carrera de ${estudiante.materia || 'Informática'}`);
};
mostrarInfo();
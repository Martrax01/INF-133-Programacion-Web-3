const obtenerUsuario = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("1. Usuario obtenido de la BD...");
            resolve({ id: 101, nombre: "Eduardo" }); 
        }, 1000);
    });
};
const obtenerPermisos = (idUsuario) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`2. Buscando permisos para el ID: ${idUsuario}...`);
            resolve(["lectura", "escritura", "admin"]);
        }, 1500);
    });
};
const procesoComplejo = async () => {
    try {
        const usuario = await obtenerUsuario(); 
        
        const permisos = await obtenerPermisos(usuario.id); 
        
        console.log("3. Resultado final:", permisos);
    } catch (error) {
        console.error("Hubo un error en el proceso:", error);
    }
};
procesoComplejo();
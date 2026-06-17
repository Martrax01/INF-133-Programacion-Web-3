const t1Promesa = () => new Promise(resolve => setTimeout(() => { console.log("Primero"); resolve(); }, 2000));
const t2Promesa = () => new Promise(resolve => setTimeout(() => { console.log("Segundo"); resolve(); }, 1000));
const t3Promesa = () => new Promise(resolve => setTimeout(() => { console.log("Tercero"); resolve(); }, 2000));

// Migracion
const ejecutarTareas = async () => {
    await t1Promesa(); // Espera 2 seg
    await t2Promesa(); // Espera 1 seg
    await t3Promesa(); // Espera 2 seg
    console.log("Tareas listas :)");
};

ejecutarTareas();
const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', {
        descripcion: {
            alias: 'd',
            describe: 'Descripción de la tarea',
            demandOption: true
        }
    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion: {
            alias: 'd',
            describe: 'Descripción de la tarea',
            demandOption: true
        },
        completado: {
            alias: 'c',
            default: true,
            describe: 'Marca la tarea como completada',
            demandOption: true
        }
    })
    .command('borrar', 'Borra una tarea', {
        descripcion: {
            alias: 'd',
            describe: 'Descripción de la tarea',
            demandOption: true
        }
    })
    .help()
    .argv;


module.exports = {
    argv
}
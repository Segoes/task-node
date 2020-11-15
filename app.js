const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crear, getListado, actualizar, borrar } = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = crear(argv.descripcion);
        break;
    case 'listar':
        let listado = getListado();
        for (let tarea of listado) {
            console.log('========= Por hacer ========='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('=============================\n'.green);
        }
        break;
    case 'actualizar':
        let actualizado = actualizar(argv.descripcion, argv.completado);
        console.log(actualizado)
        break;
    case 'borrar':
        let borrado = borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido');
}
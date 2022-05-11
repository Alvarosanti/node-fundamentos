const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('yargs').argv;

console.clear();


console.log(process.argv)
console.log(argv)



// const [, , arg3] = process.argv;
// const [, num = 0] = arg3.split('=');


// crearArchivo(num)
//     .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
//     .catch(err => console.log(err))

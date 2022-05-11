const fs = require('fs');


const crearArchivo = async (num = 0) => {
    try {
        let salida = ''
        for (let i = 1; i <= 10; i++) {
            salida += `${num} x ${i} = ${i * num}\n`
        }
        console.log(salida)

        fs.writeFileSync(`tabla_del_${num}.txt`, salida)

        return (`tabla_del_${num}.txt creada`)
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}
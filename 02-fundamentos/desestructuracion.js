const deadpool = {
    nombre: 'wade',
    apellido: 'winston',
    poder: 'regeneracion',
    edad: 10,
    getNombre() {
        return ` ${this.nombre} ${this.apellido}`
    }
}

// const nombre = deadpool.nombre
// const apellido = deadpool.apellido
// const poder = deadpool.poder


function imprimeHeroe(heror) {

    const { nombre, apellido, poder, edad=0 } = deadpool;
    console.log(nombre, apellido, poder, edad)

}

// imprimeHeroe(deadpool)

const heroes = ['Deadpoo','superman','batman']
const [,,h3] = heroes;
console.log()
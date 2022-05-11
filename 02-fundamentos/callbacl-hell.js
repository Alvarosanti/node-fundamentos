const empleados = [
    {
        id: 1,
        nombre: 'bob'
    },
    {
        id: 2,
        nombre: 'Arenita'
    },
    {
        id: 3,
        nombre: 'Patricio'
    },
    {
        id: 4,
        nombre: 'Calamardo'
    },
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    },
    {
        id: 3,
        salario: 3000
    },

];

const getEmpleadoById = (id, callback) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre
    if (empleado) {
        callback(null, empleado)
    } else {
        callback(`Empleado con id ${id} no existe`)
    }
    return empleado
}

const getSalario = (id, callback) => {
    const salario = salarios.find((e) => e.id === id)?.salario
    if (salario) {
        callback(null, salario)
    } else {
        callback(`Salario con id ${id} no existe`)
    }
}


const id = 4
getEmpleadoById(id, (err, empleado) => {
    if (err) {
        console.log('ERROR!')
        return console.log(err)
    }
    getSalario(id, (err, salario) => {
        if (err) {
            return console.log(err)
        }
        console.log('El empleado:', empleado, ' tiene un salario de: ', salario)
    })
})

// console.log(getSalario(4))

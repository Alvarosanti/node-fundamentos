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

const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)?.nombre;
        (empleado) ? resolve(empleado) : reject(`No existe empleado con id ${id}`);
    });
}

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find((s) => s.id === id)?.salario;
        (salario) ? resolve(salario) : reject(`No existe salario con id ${id}`);
    });
}

const getInfoUsuario = async (id) => {
    try {
        const empleado = await getEmpleado(id)
        const salario = await getSalario(id)
        return `El empleado ${empleado} tiene un salario de ${salario}`
    } catch (error) {
        throw error;
    }
}
const id = 4;

getInfoUsuario(id)
    .then(msg => {
        console.log('Todo beim')
        console.log(msg)
    })
    .catch(err => {
        console.log('Todo mal')
        console.log(err)
    })

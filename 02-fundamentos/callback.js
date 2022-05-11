// setTimeout(function () {
//     console.log('hello world')
// }, 3000);

const getUsuarioById = (id, callback) => {
    const user = {
        id,
        nombre: 'Bob'
    }
    setTimeout(() => {
        callback(user)
    }, 1500)
}

getUsuarioById(10, (usuario) => {
    console.log(usuario.id)
    console.log(usuario.nombre.toUpperCase())
})
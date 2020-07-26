const alumnos = [
    {
        id: 1,
        nombre: 'Juan',
        apellido: 'Gonzalez',
        comision: 'dwfs'
    },
    {
        id: 2,
        nombre: 'Pedro',
        apellido: 'Martinez',
        comision: 'dwfs'
    },
    {
        id: 3,
        nombre: 'Pedro',
        apellido: 'Fernandez',
        comision: 'dwfs'
    },
    {
        id: 4,
        nombre: 'Esteban',
        apellido: 'Moreno',
        comision: 'dwa'
    },
    {
        id: 5,
        nombre: 'Pedro',
        apellido: 'Estevez',
        comision: 'dwa'
    },
    {
        id: 6,
        nombre: 'Lucas',
        apellido: 'Suarez',
        comision: 'dwa'
    },
    {
        id: 7,
        nombre: 'Esteban',
        apellido: 'Andrade',
        comision: 'bigdata'
    },
    {
        id: 8,
        nombre: 'Sebastian',
        apellido: 'Hernandez',
        comision: 'bigdata'
    },
    {
        id: 9,
        nombre: 'Lucas',
        apellido: 'Manso',
        comision: 'bigdata'
    }
];

function getUsers(){
    return alumnos
}

function getUsersByComision(data){
    let users = alumnos.filter(a => a.comision == data.comision);
    return users
}

function getUsersByComisionAndId(data){
    for (let i = 0; i < alumnos.length; i++) {
        if ((alumnos[i].id == data.id) && (alumnos[i].comision == data.comision)) {
            let alumno = alumnos[i]
            return alumno
        }
    }
}

function deleteUser(data){
    let user = alumnos.filter(a => (a.comision == data.comision) && (a.id == data.id))
    return user 
}

module.exports = {
    getUsers: getUsers,
    getUsersByComision: getUsersByComision,
    getUsersByComisionAndId: getUsersByComisionAndId,
    deleteUser: deleteUser
}

let usuarioBorrado = {
    id: 6,
    nombre: 'Lucas',
    apellido: 'Suarez',
    comision: 'dwa'
}
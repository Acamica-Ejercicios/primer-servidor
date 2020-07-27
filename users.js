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
    for (let i = 0; i < alumnos.length; i++) {
        if((alumnos[i].id == data.id) && (alumnos[i].comision == data.comision)){
            let alumno = alumnos[i]
            let index = alumnos.indexOf(alumno)
            alumnos.splice(index, 1)
            return 'ok'
        }
    } 
}

function addUserAlumno (data) {
    //id, nombre, apellido,comision
    alumnos.push(data)
    return "ok"
}

module.exports = {
    getUsers: getUsers,
    getUsersByComision: getUsersByComision,
    getUsersByComisionAndId: getUsersByComisionAndId,
    deleteUser: deleteUser,
    addUserAlumno: addUserAlumno
}

const express = require('express')
const server = express()
const users = require("./users")
const middlewares = require('./middlewares')

server.use(express.json())
server.use(middlewares.agregarLogs)

server.get('/acamica/alumnos', (req, res)=>{
    let result = users.getUsers()
    res.status(200)
    res.json(result)
})

server.get("/acamica/:comision/alumnos", (req, res)=>{
    let data = req.params
    let query = req.query
    let result = users.getUsersByComision(data)
    if(query > 0){
        let filter = result.filter(a => a.nombre == query.nombre)
        if(filter < 1){
            res.status(404).send('No se encotró alumno con ese nombre en la comisión seleccionada')
        }
        res.status(200)
        res.json(filter)
    } 
    if(result.length < 1){
        res.status(404)
        return res.send('No se encontró esa comisión o no hay alumnos en esa comisión')
    }

    res.status(200)
    res.json(result)
})

server.get('/acamica/:comision/alumnos/:id', (req, res) => {
    let data = req.params 
    let result = users.getUsersByComisionAndId(data)
    if(result < 1){
        res.status(404).send('No se encontró al alumno')
    }
    res.status(404)
    res.json(result)
})

server.delete('/acamica/:comision/alumnos/:id', (req, res) => {
    let data = req.params
    let result = users.deleteUser(data)
    if(result == 'ok'){
        res.status(200).send('usuario eliminado con éxcito')
    }
    res.status(404).send('Usuario no exsite')
})

server.use((err, req, res, next)=>{
    if(!err){
        return next()
    }else {
        console.log(err.message)
        res.status(500).send('Se ha producido un error inesperado')
    }
})

server.post('/newusers', (req, res) =>{
    let data = req.body
    let result = users.addUserAlumno(data)
    if(result == 'ok'){
        res.status(200).send(data)
    } else {
        throw new Error ('No se ha podido crear el usuario')
    }
})

server.listen(3000, ()=>{
    console.log('Servidor iniciado')
})
const express = require('express')
const server = express()
const users = require("./users")
const { deleteUser } = require('./users')

server.get('/acamica/alumnos', (req, res)=>{
    let result = users.getUsers()
    res.status(200)
    res.json(result)
})

server.get("/acamica/:comision/alumnos", (req, res)=>{
    let data = req.params
    let query = req.query
    let result = users.getUsersByComision(data)
    if(query){
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
    let result = deleteUser(data)
})

server.listen(3000, ()=>{
    console.log('Servidor iniciado')
})
const express = require('express')
const server = express()
const users = require("./users")

server.listen(3000, ()=>{
    console.log('Servidor iniciado')
})
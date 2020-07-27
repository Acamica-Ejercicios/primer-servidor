const fs = require('fs')
const moment = require('moment')
const users = require('./users')

function log(message){
    let fileName = "logs.txt";
    let existFile = fs.existsSync(fileName)
    if(!existFile){
        fs.writeFileSync(fileName, "")
    }
    fs.readFile(fileName, (err, data) => {
        if(err){
            console.error('Error on get file' + fileName)
            return;
        }
        let text = data.toString()
        text += '\n' + message
        fs.writeFileSync(fileName, text)
    })
}

function agregarLogs(req, res, next){
    let logMessage = moment(new Date()).format("DD/MM/YYYY hh:mm:ss") + "\n"
    logMessage += `Ruta accedida: ${req.path} \n`
    log(logMessage)
    next();
}

function validatePost(req, res, next){
    let body = req.body
    if(!body.id || !body.nombre || !body.apellido || !body.comision){
        res.status(400).json('Falta información')
    } else{
        next();
    }
}

function validateExistingUSer(req, res, next){
    let body = req.body
    let alumnos = users.getUsers()
    for (let i = 0; i < alumnos.length; i++) {
        if((alumnos[i].id === body.id)){
            res.status(409).send('El alumno ya existe')
        }
    }
    next()
}

module.exports = {
    agregarLogs: agregarLogs,
    validatePost: validatePost,
    validateExistingUSer: validateExistingUSer
}
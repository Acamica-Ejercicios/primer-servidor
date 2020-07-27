const fs = require('fs')
const moment = require('moment')

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
    logMessage += 'Ruta accedida:' + req.path + '\n'
    log(logMessage)
    next();
}

module.exports = {
    agregarLogs: agregarLogs
}
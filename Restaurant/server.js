const http = require('http')
const PORT = 3000
const app = require('./config/express')

http.createServer(app).listen(PORT, (req,res)=>{
    console.log('Servidor iniciado')
})

const express = require('express')
const app = express()
const path = require('path')

// Pegando as API routes
const api = require('./server/routes/api')

// Usando middleware
app.use(express.static(path.join(__dirname + 'dist')))
app.use('/api', api)

// Pegando todas os routes requests e retornando eles para o index.html
app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, 'dist/restaurant/index.html'))
})

const port = process.env.PORT || 8080;

app.listen(8080, (req,res)=>{
    console.log('+ Servidor rodando na porta: ' + port)
})

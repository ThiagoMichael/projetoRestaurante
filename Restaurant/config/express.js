const express = require('express')
const app = express()

app.use(express.static('./src'))
// Configuração do Express

module.exports = app;
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Welcome Condo Track App!'))

module.exports = app

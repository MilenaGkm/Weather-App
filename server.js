const express = require('express')
const api = require('./server/routes/api')
const app = express()
const path = require('path')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/WeatherAppDB', { useNewUrlParser: true, useUnifiedTopology: true })

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'dist')))

app.use('/', api)



const port = 9001
app.listen(port, function(){
    console.log(`Running server on port ${port}, ITS OVER 9000!!!`)
})
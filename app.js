const express = require('express')
const app = express(); 
const volleyball = require('volleyball')
const bodyParser = require ('body-parser')

app.use(volleyball)
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, () => {
    console.log("Server is listening on port 3000")
})
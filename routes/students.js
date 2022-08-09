const express = require('express')
const students = require('../students')
const app = express()

app.get('/', (req, res) => {
    res.json(students)
  })


app.post('/', (req, res) => {
    const student = {
      name: req.body.name
    }
  
students.push(student)
  
res.json(student)

})


module.exports = app

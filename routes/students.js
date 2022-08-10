const express = require('express')
const students = require('../students')
const app = express()

app.get('/', (req, res) => {
    res.json(students)
  })

app.get('/:name'), (req, res) => {
  const { name } = req.params
  const student = students.find(student => {

  })
}


app.post('/', (req, res) => {
    const student = {
      name: req.body.name
    }
    const { name } = req.body

    const existingStudent = students.find(student => {
      return student.name === name
    })

    if (!existingStudent) {
      students.push(student)
    } else {
      res.status(409).json("student already exists")
    }

  
      
    res.json(student)

})


module.exports = app

const express = require('express')
const app = express()
const port = 5000
const students = require('./routes/students')
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.listen(port, () => {
    console.log(`Server running on ${port}`)
  })
  
app.use('/students', students)


console.log("kavach");

require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('This is my twitter handle')
  })

app.get('/login', (req,res) => {
    res.send('<h1>Please Login at kavach </h1>')
})

app.get('/Youtube',(req,res) =>{
    res.send('<h2>Hello Youtube</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
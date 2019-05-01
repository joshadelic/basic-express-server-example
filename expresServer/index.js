const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')
const userRoutes = require('./user.route')
const cors = require('cors')
const mongoose = require('mongoose')


mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true}).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
)

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.send("<h1>Yo yo yo</h1>")
})

app.use('/user/', userRoutes)

app.post("/data", (req, res) => {
  if (typeof(req.body.name) === "string")  {
    setName(req.body.name)
    res.send("Hello " + req.body.name )
  }
})

app.post("/slack", (req, res) => {
  if (req.body.token) {
    const userName = req.body.userName
  }
})

app.listen(port, () => console.log(`Server listening on port ${port}`))

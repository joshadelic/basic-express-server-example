const express = require('express')
const userRoutes = express.Router()

userRoutes.route('/').get( (req, res) => {
  res.status(200).send('yo')
})

userRoutes.route('/add').post( (req, res) => {
  if (!req.name) {
    res.status(400).send("invalid data, must have name")
  } else {
    res.status(200).send(req.body)
  }
})

module.exports = userRoutes

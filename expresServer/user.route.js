const express = require('express')
const userRoutes = express.Router()

const Kitten = require('./kitty.model')

const kittenQuery = Kitten.find({})

userRoutes.route('/kittens').get( (req, res) => {
  kittenQuery.exec( (err, kittens) => {
    if (err) throw err
    else {
      res.status(200).send(kittens)
    }
  })
})

userRoutes.route('/add').post( (req, res) => {
  if (!req.name) {
    res.status(400).send("invalid data, cocktail must have name")
  } else {
    res.status(200).send(req.body)
  }
})

module.exports = userRoutes

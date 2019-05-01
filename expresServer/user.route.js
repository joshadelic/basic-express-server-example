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
  const newKitten = new Kitten({name: req.body.kitten})
  newKitten.save()
  res.status(200).send(req.body.kitten + " saved")
})

module.exports = userRoutes

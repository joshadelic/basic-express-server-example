const mongoose = require('mongoose')
const Schema = mongoose.Schema

var kittySchema = new Schema({
  name: String
});

var Kitten = mongoose.model('Kitten', kittySchema, 'kittens');

module.exports = Kitten

const mongoose = require('mongoose')
const Schema = mongoose.Schema


let Hero = new Schema({
    image: {
        type: String
    },
    name: {
        type: String
    }
})

module.exports = mongoose.model('Hero', Hero)
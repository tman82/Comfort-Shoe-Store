const mongoose = require('mongoose')
const Schema = mongoose.Schema


let Shoe = new Schema({
    image: {
        type: String
    },
    cartImage: {
        type: String
    },
    name: {
        type: String
    },
    color: {
        type: String
    },
    price: {
        type: Number
    },
    mainColor: {
        type: String
    },
    midImage: {
        type: String
    },
    heroFeatured: {
        type: Boolean
    },
    message: {
        type: String
    }
})


module.exports = mongoose.model('Shoe', Shoe)
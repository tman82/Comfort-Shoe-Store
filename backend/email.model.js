const mongoose = require('mongoose')
const Schema = mongoose.Schema


let EmailSchema = new Schema({
    email: {
        type: String
    }
})


module.exports = mongoose.model('EmailSchema', EmailSchema)
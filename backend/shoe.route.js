const express = require('express')
const shoeRouter = express.Router()

const Shoe = require('./shoe.model')


shoeRouter.route('/shoes').get((req, res) => {
    Shoe.find((err, shoes) => {
        if(err) {
            console.log(err)
        } else {
            res.json(shoes)
        }
    })
})

shoeRouter.route('/shoes/:id').get((req, res) => {
    let id = req.params.id
    Shoe.findById(id, (err, shoe) => {
        res.json(shoe)
    })
})


module.exports = shoeRouter
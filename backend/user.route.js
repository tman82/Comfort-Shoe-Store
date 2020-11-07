const express = require('express')
const userRouter = express.Router()

const User = require('./user.model')


userRouter.route('/users').get((req, res) => {
    User.find((err, users) => {
        if(err) {
            console.log(err)
        } else {
            res.json(users)
        }
    })
})


userRouter.route('/signup').post((req, res) => {
    let user = new User(req.body)
    
    user.email = req.body.email
    user.password = req.body.password
    user.firstName = req.body.firstName
    user.lastName = req.body.lastName

    user.save()
        .then(user => {
            res.status(200).json({'user': 'user added successfully'})
        })
        .catch(err => {
            res.status(400).send('adding new user failed')
        })
})


userRouter.route('/signin').post(async (req, res) => {
    const { email, password, firstName, lastName } = req.body
    const user = await User.find({ email, password, firstName, lastName })
    if(user) {
        res.json({
            message: 'You are successfully logged in',
            auth: true
        })
    } else {
        res.json({
            message: 'Unable to log in',
            auth: false
        })
    }
    console.log(user)
})


module.exports = userRouter
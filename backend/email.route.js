const express = require('express')
const emailRouter = express.Router()

const Email = require('./email.model')


emailRouter.route('/emails').get((req, res) => {
    Email.find((err, emails) => {
        if(err) {
            console.log(err)
        } else {
            res.json(emails)
        }
    })
})

emailRouter.route('/postemail').post((req, res) => {
    let newEmail = new Email(req.body)

    newEmail.save()
        .then(newEmail => {
            res.status(200).json({'email': 'email added successfully'})
        })
        .catch(err => {
            res.status(400).send('adding new email failed')
        })
})

module.exports = emailRouter
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')
const shoeRouter = require('./shoe.route')
const userRouter = require('./user.route')
const emailRouter = require('./email.route')
//const routes = express.Router()


const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://tre1238:c4t0ugCOi411boy1@trecluster-e058a.mongodb.net/test.shoes?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true })
const connection = mongoose.connection

connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})


app.use('/', shoeRouter)
app.use('/', userRouter)
app.use('/', emailRouter)

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('build'))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'build', 'index.html'))
    })
}


app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
})

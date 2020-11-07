const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const shoeRouter = require('./shoe.route')
const userRouter = require('./user.route')
const emailRouter = require('./email.route')
//const routes = express.Router()


const PORT = 4000

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


mongoose.connect('mongodb+srv://tre1238:c4t0ugCOi411boy1@trecluster-e058a.mongodb.net/test?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true })
const connection = mongoose.connection

connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})


app.use('/', shoeRouter)
app.use('/', userRouter)
app.use('/', emailRouter)


app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
})
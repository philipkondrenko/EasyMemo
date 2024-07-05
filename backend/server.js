const express = require('express')
const mongoose = require('mongoose')
const app = express()
const noteRoutes = require('./routes/notes')
require('dotenv').config()

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use(express.json())
app.use('/api/notes', noteRoutes)

mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Connected to Database, Server started...")
    })
}).catch((error) => {
    console.log(error)
})

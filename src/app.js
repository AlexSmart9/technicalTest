const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const router = require('./routes')
const errorHandler = require('./utils/errorHandler')
require('dotenv').config()

const app = express()

//Middlewares before routes
app.use(express.json())
app.use(helmet())
app.use(cors())

//Routes 
app.use("/api/v1", router)

app.get("/", (req, res) => {
    return res.send("Welcome to express")
} ) 

//Middlewares after routes
app.use(errorHandler)

module.exports = app


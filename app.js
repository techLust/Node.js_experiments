const express = require("express");
const app = express();
require('./config/database')
const router = require('./routers/mainRouter')
const morgan = require('morgan')
const createDbConnection  = require('./config/database')
const dotenv = require('dotenv').config()

const PORT = process.env.SERVER_PORT || 8080

app.use(express.json())
app.use(morgan('dev'))


// USE CUSTOM REQUEST LOGGER
// app.use(morgan('combined'))
// app.use(morgan(':method :url :status :response-time ms'));

app.use('/', router)

app.listen(PORT, () => console.log(`Server running on ${PORT}`))


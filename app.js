const express = require("express");
const app = express();
require('./config/database')
const router = require('./routers/mainRouter')
const morgan = require('morgan')

app.use(express.json())

app.use(morgan('dev'))


// USE CUSTOM REQUEST LOGGER
// app.use(morgan('combined'))
// app.use(morgan(':method :url :status :response-time ms'));

app.use('/', router)

app.listen(3000, () => console.log('Server running on 3000'))


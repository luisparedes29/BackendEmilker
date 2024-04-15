const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const connectDB = require('../src/connectionDB')
const cors = require('cors')
const compression = require('compression')
const helmet = require('helmet')

require('dotenv').config()

connectDB()

//const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.disable('x-powered-by')
app.use(compression())
app.use(helmet())

//app.use('/', indexRouter)
app.use('/users', usersRouter)

module.exports = app

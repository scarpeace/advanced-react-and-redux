//Main starting point of our aplication (First thing that executes when server runs)

const express = require('express');
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const mongoose = require('mongoose')

// Fixing console error
mongoose.set('useCreateIndex', true);

// DB Setup
// This command make sure that mongose create a database. The name is /auth. Change that to rename.
// The aditional parameters are there because the console said to put them because of deprecation.
mongoose.connect('mongodb://localhost/auth',{ useNewUrlParser: true, useUnifiedTopology: true  })

const router = require('./router')

const app = express()

// APP SETUP (How the application is gonna work)
// *Middlewares
app.use(morgan('combined'))
app.use(bodyParser.json({type: '*/*'}))
// Linking Routes
router(app);

// SERVER SETUP (How the application is gonna interact with the outter world)
const port = process.env.PORT || 3090
const server = http.createServer(app)
server.listen(port);
console.log('Server Listening on :', port)
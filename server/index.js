// Ponto incial da aplicação, é aqui que configuramos o servidor.

// 
const express = require('express');
const http = require('http')
const bodyParser = require('body-parser')
// Ferramenta de Logging (console.log)
const morgan = require('morgan')
const cors = require('cors')

// Faz a conexão e cria as entidades no banco de dados
const mongoose = require('mongoose')

// Fixing console error
mongoose.set('useCreateIndex', true);

// DB Setup
// Esse comando faz com que o mongoose conecte e crie a entidade AUTH. O ultimo route param vai ser o nome da tabela no banco.
// The aditional parameters are there because the console said to put them because of deprecation.
mongoose.connect('mongodb://localhost/auth',{ useNewUrlParser: true, useUnifiedTopology: true  })

// Importando as rotas da aplicação
const router = require('./router')

const app = express()

// APP SETUP (How the application is gonna work)
// *Middlewares
app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}));
// 
app.use(cors());
// Linking Routes
router(app);

// SERVER SETUP (How the application is gonna interact with the outter world)
const port = process.env.PORT || 3090
const server = http.createServer(app)
server.listen(port);
console.log('Server Listening on :', port)
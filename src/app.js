const express = require('express');
const app = express();
const cors = require('cors')
const handlebars = require('express-handlebars')
process.env.PWD = process.cwd()

app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(cors())
app.use(express.static(process.env.PWD + '/src/compiler'));
app.use(express.static(process.env.PWD + '/src/images'));
app.use(express.static(process.env.PWD + '/src/sass'));

module.exports = app;
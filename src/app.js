const express = require('express');
const app = express();
const cors = require('cors')
const handlebars = require('express-handlebars')
process.env.PWD = process.cwd()

app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(cors())
app.use(express.static(process.env.PWD + '/src/style/css'));
app.use(express.static(process.env.PWD + '/src/images'));

app.use(express.static(process.env.PWD + '/node_modules/font-awesome/css'));
app.use(express.static(process.env.PWD + '/node_modules/bootstrap/compiler'));


app.use(express.static(process.env.PWD + '/node_modules/jquery/dist'));
app.use(express.static(process.env.PWD + '/node_modules/popper.js/dist/umd'));
app.use(express.static(process.env.PWD + '/node_modules/bootstrap/dist/js'));

module.exports = app;
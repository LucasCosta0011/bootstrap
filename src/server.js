const app =  require('./app')
const fs = require('fs');
const ytdl = require('ytdl-core');
const PORTA = process.env.PORT || 3000
var path = require('path');

app.get('/', function (req, res) {

	res.render('body')
})

app.listen(PORTA, function(){
	console.log(`running at ${PORTA}`)
})
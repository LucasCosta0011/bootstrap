const app =  require('./app')
const PORTA = process.env.PORT || 3000

app.get('/', function (req, res) {

	res.render('body')
})

app.listen(PORTA, function(){
	console.log(`running at ${PORTA}`)
})
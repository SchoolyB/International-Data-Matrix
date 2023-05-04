// 'Import' the Express module instead of http
const express = require('express')
// Initialize the Express application
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const deepl = require('deepl-node')
const path = require('path')
const { default: countries } = require('./routes/countriesRoute')

dotenv.config() //allows server to read DB key from a .env file

const PORT = process.env.PORT || 4042 // we use || to provide a default value
const app = express()

mongoose.connect(process.env.DATA_BASE)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Connection Error:'))
db.once(
	'open',
	console.log.bind(console, 'Successfully connected to database!'),
)

const logging = (request: any, response: any, next: any) => {
	console.log(`${request.method} ${request.url}`)
	next()
}

// CORS Middleware
const cors = (req: any, res: any, next: any) => {
	res.setHeader(
		'Access-Control-Allow-Headers',
		'X-Requested-With,content-type, Accept,Authorization,Origin',
	)
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, OPTIONS, PUT, PATCH, DELETE',
	)
	res.setHeader('Access-Control-Allow-Credentials', true)
	next()
}

app.get('/status', (request: any, response: any) => {
	response.send(JSON.stringify({ message: 'Service healthy' }))
})

// using post method to post user input for translation to deepl API then get a result back
app.post('/translator', (request: any, response: any) => {
	const translator = new deepl.Translator(process.env.TRANSLATOR_KEY)
	const sourceText = request.body.sourceText //user input for translation
	const outputLanguage = request.body.outputLanguage //the language we want the output to be

	translator
		.translateText(sourceText, null, outputLanguage)
		.then((result: any) => {
			console.log(result.text)
			const responseBody = {
				//if a key in an obj doesnt have a colon anf a value JS auto assumes that the value is itself
				// same as writting sourceText: sourceText
				text: result.text, //this
			}
			response.json(responseBody)
		})
		.catch((error: any) => {
			response.status(500).json({ message: 'Translation Failed' })
			console.error(error)
		})
})

// CALLING ALL EXPRESS .use methods
app.use(cors)
app.use(express.json())
app.use(logging)
app.use('/Countries', countries)

//Listen for what port server is running on and log it.
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

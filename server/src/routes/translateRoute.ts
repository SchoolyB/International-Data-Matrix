const newDeepl = require('deepl-node')
const newApp = require('app')

app.post('/translator', (request: any, response: any) => {
	const translator = new newDeepl.Translator(process.env.TRANSLATION_KEY)

	const sourceText = request.body.sourceText
	const outputLanguage = request.body.outputLanguage //the language we want the output to be

	translator
		.translateText(sourceText, null, outputLanguage)
		.then((result: any) => {
			const responseBody = {
				//if a key in an obj doesn't have a colon and a value JS auto assumes that the value is itself
				// same as writing sourceText: sourceText
				text: result.text, //this
			}
			response.json(responseBody)
		})
		.catch((error: any) => {
			console.error(error)
		})
})

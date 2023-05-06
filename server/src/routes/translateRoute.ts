import { Router } from 'express'
import * as deepl from 'deepl-node'

const router = Router()
router.post('', async (request: any, response: any) => {
	const outputLanguage = request.body.outputLanguage //the language we want the output to be
	const sourceText = request.body.sourceText
	const translator = new deepl.Translator(`${process.env.TRANSLATOR_KEY}`)

	const results = await translator
		.translateText(sourceText, null, outputLanguage)
		.then((result: any) => {
			console.log(result.text)
			// get response on page
			const responseBody = {
				text: result.text,
			}
			response.json(responseBody)
		})
		.catch((error: any) => {
			console.error(error)
		})
})

export default router

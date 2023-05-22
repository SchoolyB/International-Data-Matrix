import * as deepl from 'deepl-node'
import { FastifyInstance } from 'fastify/types/instance'
import dotenv from 'dotenv'

dotenv.config()

export async function translateRoute(instance: FastifyInstance) {
  instance.post('/', async (request: any, response: any) => {
    const outputLanguage = request.body.outputLanguage //the language we want the output to be
    const sourceText = request.body.sourceText
    const translator = new deepl.Translator(`${process.env.TRANSLATOR_KEY}`)

    const results = await translator
      .translateText(sourceText, null, outputLanguage)
      // console.log(results)
      .then((result: any) => {
        const responseBody = {
          text: result.text,
        }
        // get response on page
        response.send(responseBody)
      })
      .catch((error: any) => {
        console.error(error)
      })
  })
}

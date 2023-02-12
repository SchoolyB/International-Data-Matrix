const Router = require("express");
const deepl = require("deepl-node");
app.post("/translator", (request, response) => {
  const translator = new deepl.Translator(process.env.TRANSLATION_KEY);

  const sourceText = request.body.sourceText;
  const outputLanguage = request.body.outputLanguage; //the language we want the output to be

  translator
    .translateText(sourceText, null, outputLanguage)
    .then((result) => {
      console.log(result.text); // Bonjour, le monde !

      const responseBody = {
        //if a key in an obj doesnt have a colon anf a value JS auto assumes that the value is itself
        // same as writting sourceText: sourceText
        text: result.text, //this
      };

      response.json(responseBody);
    })
    .catch((error) => {
      console.error(error);
    });
});

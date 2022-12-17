import * as deepl from "deepl-node";
import dotenv from "dotenv";

dotenv.config();

const authKey = `${process.env.TRANSLATION_KEY}`;
const translator = new deepl.Translator(authKey);

//declaring an unnamed async function
(async () => {
  // using null below allows auto-language detection
  // can us a 2-letter country code to specify lang
  const result = await translator.translateText("world!", null, "es");
  console.log(result.text); // console logs result of the translation
})(); //pretty sure this is function invocation/calling

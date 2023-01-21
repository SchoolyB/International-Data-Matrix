import React from 'react'

export default function Translator() {
  return (
<div>
  <form id="fullTranslateContainer">
{/*   <!-- change name to translateForm --> */}
    <div id="translatorContainer">
      <div id="inputSide">
        <div>
          <textarea
            id="translateInput"
            placeholder="Please enter a word or phrase to translate"
          ></textarea>
        </div>
      </div>

      <div>
        <button title="submitButton" type="submit" id="translateBtn"></button>
      </div>

      <div id="outputSide">
        <select title="languageSelection" className="langSelect" id="outputLangSelect">
          <option value="bg">Bulgarian</option>
          <option value="zh">Chinese</option>
          <option value="da">Danish</option>
          <option value="nl">Dutch</option>
          <option value="es-us">English(American)</option>
          <option value="en-gb">English(British)</option>
          <option value="et">Estonian</option>
          <option value="fi">Finnish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="el">Greek</option>
          <option value="hu">Hungarian</option>
          <option value="id">Indonesian</option>
          <option value="it">Italian</option>
          <option value="ja">Japanese</option>
          <option value="lt">Lithuanian</option>
          <option value="lv">Latvian</option>
          <option value="pl">Polish</option>
          <option value="pt-br">Portuguese(Brazilian)</option>
          <option value="pt-pt">Portuguese(Portugal)</option>
          <option value="ro">Romanian</option>
          <option value="ru">Russian</option>
          <option value="sk">Slovak</option>
          <option value="sl">Slovenian</option>
          <option value="es">Spanish</option>
          <option value="sw">Swedish</option>
          <option value="tr">Turkish</option>
          <option value="es">Ukrainian</option>
        </select>
        <div>
          <textarea title="commentArea" id="translateOutput" readOnly> </textarea>
        </div>
      </div>
    </div>
  </form>
  <h2 id="translateGuide">
    To start a translation click the button between the two boxes
  </h2>
</div>
  )
}

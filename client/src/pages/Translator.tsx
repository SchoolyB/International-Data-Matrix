import React, { useState } from 'react'
import { api } from '../includes/api'

export default function Translator() {
	const [sourceText, setSourceText] = useState('')
	const [outputLanguage, setOutputLanguage] = useState('bg')
	const [outputText, setOutputText] = useState('')

	async function handleTranslation(event: React.FormEvent) {
		event.preventDefault()
		try {
			const res = await api.post('translator', {
				sourceText,
				outputLanguage,
			})

			setOutputText(res.data.text)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div>
			<form id="fullTranslateContainer" onSubmit={handleTranslation}>
				{/*   <!-- change name to translateForm --> */}
				<div id="translatorContainer">
					<div id="inputSide">
						<div>
							<textarea
								id="translateInput"
								placeholder="Please enter a word or phrase to translate"
								value={sourceText}
								onChange={(event) => setSourceText(event.target.value)}
							/>
						</div>
					</div>

					<div>
						<button title="Submit" type="submit" id="translateBtn"></button>
					</div>

					<div id="outputSide">
						<select
							title="Language Select"
							className="langSelect"
							id="outputLangSelect"
							value={outputLanguage}
							onChange={(event) => setOutputLanguage(event.target.value)}
						>
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
							<textarea
								title="output"
								id="translateOutput"
								readOnly
								value={outputText}
							>
								{' '}
							</textarea>
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

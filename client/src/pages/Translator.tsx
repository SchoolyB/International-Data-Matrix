import React, { useState } from 'react'
import { translatorAPICall } from '../includes/translator'
import translateIcon from '../../assets/translatorPageImages/translation.png'
import home from '../../assets/footerIcons/home.png'
import contact from '../../assets/footerIcons/contact.png'
import documentation from '../../assets/footerIcons/documentation.png'
import translator from '../../assets/footerIcons/translate.png'
import map from '../../assets/footerIcons/map.png'
import faq from '../../assets/footerIcons/faq.png'

export default function Translator() {
  const [sourceText, setSourceText] = useState('')
  const [outputLanguage, setOutputLanguage] = useState('bg')
  const [outputText, setOutputText] = useState('')

  async function handleTranslation(event: React.FormEvent) {
    event.preventDefault()
    try {
      const res = await translatorAPICall.post('Translator', {
        sourceText,
        outputLanguage,
      })

      setOutputText(res.data.text)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className='translatorContainer'>
        <form className='translatorForm' onSubmit={handleTranslation}>
          <div className='translatorBoxes'>
            <div id='inputSide' className='boxContainer'>
              <div>
                <textarea
                  className='translatorTextAreas'
                  placeholder='Please enter a word or phrase to translate'
                  value={sourceText}
                  onChange={event => setSourceText(event.target.value)}
                />
              </div>
            </div>
            <div className='languageSelectContainer'>
              <div className='submission'>
                <div>
                  <button title='Submit' type='submit' className='translateBtn'>
                    <img
                      alt='A submit button'
                      className='translateIcon'
                      src={translateIcon}
                    />
                  </button>
                </div>
              </div>

              <select
                title='Language Select'
                className='langSelect'
                value={outputLanguage}
                onChange={event => setOutputLanguage(event.target.value)}
              >
                <option value='bg'>Bulgarian</option>
                <option value='zh'>Chinese</option>
                <option value='da'>Danish</option>
                <option value='nl'>Dutch</option>
                <option value='es-us'>English</option>
                <option value='et'>Estonian</option>
                <option value='fi'>Finnish</option>
                <option value='fr'>French</option>
                <option value='de'>German</option>
                <option value='el'>Greek</option>
                <option value='hu'>Hungarian</option>
                <option value='id'>Indonesian</option>
                <option value='it'>Italian</option>
                <option value='ja'>Japanese</option>
                <option value='lt'>Lithuanian</option>
                <option value='lv'>Latvian</option>
                <option value='pl'>Polish</option>
                <option value='pt-br'>Portuguese(Brazilian)</option>
                <option value='pt-pt'>Portuguese(Portugal)</option>
                <option value='ro'>Romanian</option>
                <option value='ru'>Russian</option>
                <option value='sk'>Slovak</option>
                <option value='sl'>Slovenian</option>
                <option value='es'>Spanish</option>
                <option value='sw'>Swedish</option>
                <option value='tr'>Turkish</option>
                <option value='es'>Ukrainian</option>
              </select>
            </div>

            <div id='outputSide' className='boxContainer'>
              <div>
                <textarea
                  title='output'
                  className='translatorTextAreas'
                  readOnly
                  value={outputText}
                >
                  {' '}
                </textarea>
              </div>
            </div>
          </div>
        </form>
      </div>
      <footer>
        {/* author name */}
        <ul id='webPageInfo'>
          <li>Author: Marshall Burns</li>
        </ul>
        {/*footer icons*/}

        <ul id='footerIconContainer'>
          {/* home icon */}
          <li>
            <a title='Home' href='/'>
              <img
                title='Home'
                className='footerIcon'
                id='homeIcon'
                src={home}
              />
            </a>
          </li>

          {/* translator icon */}
          <li>
            <a title='Translator' href='Translator'>
              <img
                title='Translator'
                className='footerIcon'
                id='translateIcon'
                src={translator}
              />
            </a>
          </li>

          {/* contact icon */}
          <li id='footerContactIcon'>
            <a title='Contact' href='Contact'>
              <img
                title='Contact'
                className='footerIcon'
                id='ContactIcon'
                src={contact}
              />
            </a>
          </li>
          {/* map icon */}
          <li>
            <a title='Map' href='Map'>
              <img title='Map' className='footerIcon' id='MapIcon' src={map} />
            </a>
          </li>
          {/* faq icon */}
          <li>
            <a title='FAQ' href='FAQ'>
              <img title='FAQ' className='footerIcon' id='FAQIcon' src={faq} />
            </a>
          </li>

          {/* documentation icon */}
          <li>
            <a
              title='Documentation'
              href='https://github.com/SchoolyB/Capstone/blob/master/README.md'
            >
              <img
                title='Documentation'
                className='footerIcon'
                id='docIcon'
                src={documentation}
              />
            </a>
          </li>
        </ul>
      </footer>
    </>
  )
}

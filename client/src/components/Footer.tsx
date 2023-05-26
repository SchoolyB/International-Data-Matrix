import home from '../../assets/footerIcons/home.png'
import contact from '../../assets/footerIcons/contact.png'
import documentation from '../../assets/footerIcons/documentation.png'
import translator from '../../assets/footerIcons/translate.png'
import map from '../../assets/footerIcons/map.png'
import faq from '../../assets/footerIcons/faq.png'
import React from 'react'

export default function Footer() {
  return (
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
            <img title='Home' className='footerIcon' id='homeIcon' src={home} />
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
  )
}

import axios from 'axios'
import Container from '../components/helpers/Container'
import home from '../../assets/footerIcons/home.png'
import contact from '../../assets/footerIcons/contact.png'
import documentation from '../../assets/footerIcons/documentation.png'
import translator from '../../assets/footerIcons/translate.png'
import map from '../../assets/footerIcons/map.png'
import faq from '../../assets/footerIcons/faq.png'
import React from 'react'

export default function Home() {
  return (
    <Container>
      <div id='welcomeContainer'>
        <h1 id='welcomeMainHeading'>The Entire World All In One Place</h1>
        <p id='welcomeParagraph'>
          The International Data Matrix is a resource that anyone can use to
          learn about a country's historical, cultural, religious, geographical,
          geo-economical and geo-political information.
        </p>

        <p id='welcomeParagraph'>
          To learn more about a country you can click on the button below or
          click on "Country Selection" in the nav menu above.
        </p>
        <div id='welcomeBtnContainer'>
          <a href='Countries' role='button' id='welcomeBtn'>
            View Countries
          </a>
        </div>
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
    </Container>
  )
}

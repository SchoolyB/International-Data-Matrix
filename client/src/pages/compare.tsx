import home from '../../assets/footerIcons/home.png'
import contact from '../../assets/footerIcons/contact.png'
import documentation from '../../assets/footerIcons/documentation.png'
import translator from '../../assets/footerIcons/translate.png'
import mapIcon from '../../assets/footerIcons/map.png'
import faq from '../../assets/footerIcons/faq.png'

import React from 'react'
import countryDropdown from '../components/countryDropdown'

export default function compare() {
  return (
    <>
      <div className='comparisonContainer'>
        {/* start of left country container */}
        <div className='leftCountryContainer'>
          <div className='leftCountryName'>
            <h3>Left Country Placeholder</h3>
            {countryDropdown()} {/* injects the country dropdown component */}
          </div>
          <div className='leftCountryFlag'></div>
        </div>
        {/* end of left country container */}

        {/* start of right country container */}
        <div className='rightCountryContainer'>
          <div className='rightCountryName'>
            <h3>Right Country Placeholder</h3>
            {countryDropdown()} {/* injects the country dropdown component */}
          </div>
          <div className='rightCountryFlag'></div>
        </div>
        {/*end of right country container */}
      </div>

      {/* Start of stats container */}
      <div className='statsContainer'>
        {/* start of left side stats */}
        <div className='leftSideStats'></div>
        {/* end of left side stats */}

        {/* start of stat names in middle of page */}
        <div className='statNames'>
          Population
          <br />
          <hr />
          Number of Timezones
          <br />
          <hr />
          Year Founded
          <br />
          <hr />
          Government Type
          <br />
          <hr />
          Year of Independence
          <br />
          <hr />
          Area
          <br />
          <hr />
        </div>
        {/* end of stat names in middle of page */}

        {/* start of right side stats */}
        <div className='rightSideStats'></div>
        {/* end of right side stats */}
      </div>
      {/* end of stats */}

      {/* footer */}
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
              <img
                title='Map'
                className='footerIcon'
                id='MapIcon'
                src={mapIcon}
              />
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

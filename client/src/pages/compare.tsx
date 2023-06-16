import home from '../../assets/footerIcons/home.png'
import contact from '../../assets/footerIcons/contact.png'
import documentation from '../../assets/footerIcons/documentation.png'
import translator from '../../assets/footerIcons/translate.png'
import mapIcon from '../../assets/footerIcons/map.png'
import faq from '../../assets/footerIcons/faq.png'

import React, { useCallback, useEffect, useState } from 'react'
import countryDropdown from '../components/countryDropdown'
import { useParams } from 'react-router-dom'
import { comparisonData } from '../types/comparisonData'

// USING VITE'S GLOB METHOD TO STORE FLAG IMAGES FROM FOLDER INTO VARIABLE
const countryComparisonFlags = import.meta.glob('../../assets/flags/*.png', {
  eager: true, //eager loading
})

export default function compare(
  leftAlt: string | undefined,
  rightAlt: string | undefined,
) {
  const { id } = useParams<{ id: string }>() // this gets the 2 letter country code from the url and stores it in the id variable
  const [state, setState] = useState<comparisonData>({
    name: '',
    flag: '',
    flagAlt: '',
    population: 0,
    number_of_timezones: 0,
    timezones: [],
    area: '',
    year_founded: 0,
    year_of_independence: 0,
    government_type: '',
    link: '',
  })

  // todo - add error handling, store data in state, and display data on page

  //this function set the alt attributes for the each country flag that will populate on the page
  const setDynamicAltAttributes = () => {
    const lefty = document.getElementById('leftCountryFlag')

    if (lefty != null) {
      lefty.setAttribute('alt', `The flag of ${state.flag}`) //todo: fix this
      const leftAlt: any = lefty.attributes[1] // this uses the second attribute of the flag element, which is the alt attribute
    }
    const righty = document.getElementById('rightCountryFlag')
    if (righty != null) {
      righty.setAttribute('alt', `The flag of ${state.flag}`) //todo: fix this
      const rightAlt: any = righty.attributes[1] // this uses the second attribute of the flag element, which is the alt attribute
    }
  }

  setDynamicAltAttributes() // call the dynamic alt attribute function

  return (
    <>
      <div className='comparisonContainer'>
        {/* start of left country container */}
        <div className='leftCountryContainer'>
          <div className='leftCountryHeading'>
            <h3>Left Country Placeholder</h3>
            <div className='leftCountryFlagContainer'>
              {/* images of each flag needs to load dynamically */}
              <img />
            </div>
            {countryDropdown()}
            {/* injects the country dropdown component to left side */}
          </div>
        </div>
        {/* end of left country container */}

        {/* start of right country container */}
        <div className='rightCountryContainer'>
          <div className='rightCountryHeading'>
            <h3>Right Country Placeholder</h3>
            <div className='rightCountryFlagContainer'>
              {/* images of each flag needs to load dynamically */}
              <img />
            </div>
            {countryDropdown()}
            {/* injects the country dropdown component to right side */}
          </div>
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

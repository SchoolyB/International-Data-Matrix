import home from '../../assets/footerIcons/home.png'
import contact from '../../assets/footerIcons/contact.png'
import documentation from '../../assets/footerIcons/documentation.png'
import translator from '../../assets/footerIcons/translate.png'
import mapIcon from '../../assets/footerIcons/map.png'
import faq from '../../assets/footerIcons/faq.png'

import React from 'react'

export default function compare() {
  return (
    <>
      <div className='comparisonContainer'>
        {/* start of left country container */}
        <div className='leftCountryContainer'>
          <div className='leftCountryName'>
            <h3>
              <input type='text' placeholder='Left Country' readOnly />
            </h3>
          </div>
          <div className='leftCountryFlag'></div>
          <div className='leftCountryStats'>
            <h4 className='countryStats populationStat' id='leftPopulation'>
              <input type='text' placeholder='population' readOnly />
            </h4>
            <h4
              className='countryStats number_of_timezones_stat'
              id='leftNumOfTimezones'
            >
              <input type='text' placeholder='number of timezones' readOnly />
            </h4>
            <h4 className='countryStats yearFoundedStat' id='leftYearFounded'>
              <input type='text' placeholder='year founded' readOnly />
            </h4>
            <h4 className='countryStats governmentTypeStat' id='leftGovType'>
              <input type='text' placeholder='government type' readOnly />
            </h4>
            <h4
              className='countryStats yearOfIndependenceStat'
              id='leftIndependenceYear'
            >
              <input type='text' placeholder='year of independence' readOnly />
            </h4>
            <h4 className='countryStats areaStat' id='leftArea'>
              <input type='text' placeholder='area' readOnly />
            </h4>
          </div>
        </div>
        {/* end of left country container */}

        {/* start of right country container */}
        <div className='rightCountryContainer'>
          <div className='rightCountryName'>
            <h3>
              <input type='text' placeholder='Right Country' readOnly />
            </h3>
          </div>
          <div className='rightCountryFlag'></div>
          <div className='rightCountryStats'>
            <h4 className='countryStats populationStat' id='rightPopulation'>
              <input type='text' placeholder='population' readOnly />
            </h4>
            <h4
              className='countryStats number_of_timezones_stat'
              id='rightNumOfTimezones'
            >
              <input type='text' placeholder='number of timezones' readOnly />
            </h4>
            <h4 className='countryStats yearFoundedStat' id='rightYearFounded'>
              <input type='text' placeholder='year founded' readOnly />
            </h4>
            <h4 className='countryStats governmentTypeStat' id='rightGovType'>
              <input type='text' placeholder='government type' readOnly />
            </h4>
            <h4
              className='countryStats yearOfIndependenceStat'
              id='rightIndependenceYear'
            >
              <input type='text' placeholder='year of independence' readOnly />
            </h4>
            <h4 className='countryStats areaStat' id='rightArea'>
              <input type='text' placeholder='area' readOnly />
            </h4>
          </div>
        </div>
        {/*end of right country container */}
      </div>

      {/* Start of stats */}
      <div className='statsContainer'>
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

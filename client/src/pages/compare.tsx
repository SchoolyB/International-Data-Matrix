import React, { createContext, useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { comparisonListData } from '../types/comparisonListData'
import Footer from '../components/Footer'
import { comparisonData } from '../includes/comparisonDataAPI'
import CountryDropdown from '../components/Comparison-Components/countryDropdown'
import Stats from '../components/Comparison-Components/stats'
// USING VITE'S GLOB METHOD TO STORE FLAG IMAGES FROM FOLDER INTO VARIABLE
const countryComparisonFlags = import.meta.glob('../../assets/flags/*.png', {
  eager: true, //eager loading
})

export default function compare(
  leftAlt: string | undefined,
  rightAlt: string | undefined,
) {
  const { id } = useParams<{ id: string }>() // this gets the 2 letter country code from the url and stores it in the id variable
  const [leftState, setLeftState] = useState<comparisonListData>({
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

  const [rightState, setRightState] = useState<comparisonListData>({
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
      lefty.setAttribute('alt', `The flag of ${leftState.flag}`) //todo: fix this
      const leftAlt: any = lefty.attributes[1] // this uses the second attribute of the flag element, which is the alt attribute
    }
    const righty = document.getElementById('rightCountryFlag')
    if (righty != null) {
      righty.setAttribute('alt', `The flag of ${rightState.flag}`) //todo: fix this
      const rightAlt: any = righty.attributes[1] // this uses the second attribute of the flag element, which is the alt attribute
    }
  }

  setDynamicAltAttributes() // call the dynamic alt attribute function

  useEffect(() => {
    comparisonData
      .get('/Compare')
      .then(res => {
        setLeftState(res.data)
        console.log(res.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return (
    <>
      <div className='comparisonContainer'>
        {/* start of left country container */}
        <div className='leftCountryContainer'>
          <div className='leftCountryHeading'>
            <h3>{leftState.name}</h3>
            <div className='leftCountryFlagContainer'>
              {/* images of each flag needs to load dynamically */}
              <a href={leftState.link}>
                <img src={leftState.flag} />
              </a>
            </div>
            <CountryDropdown />

            {/* injects the country dropdown component to left side */}
          </div>
        </div>
        {/* end of left country container */}

        {/* start of right country container */}
        <div className='rightCountryContainer'>
          <div className='rightCountryHeading'>
            <h3>{rightState.name}</h3>
            <div className='rightCountryFlagContainer'>
              {/* images of each flag needs to load dynamically */}
              <a href={rightState.link}>
                <img src={rightState.flag} />
              </a>
            </div>
            <CountryDropdown />
            {/* injects the country dropdown component to right side */}
          </div>
        </div>
        {/*end of right country container */}
      </div>

      {/* overall stats container */}
      <div className='statsOverallContainer'>
        <Stats /> {/* injects the stats component */}
      </div>

      <Footer />
    </>
  )
}

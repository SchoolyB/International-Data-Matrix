import axios from 'axios'
import { count } from 'console';
import React, { useCallback, useEffect, useState } from 'react'
import { api } from '../includes/api'
import { CountryListData } from '../types/countryListData'
// import * as flags from "../../assets/countrySelectionFlags";

const countryListDataFlags = import.meta.glob('../../assets/countryPageFlags/svgs/*.svg', {
  eager: true
});


export default function Countries() {

// console.log(countryListDataFlags)
  const [countryList, setCountryList] = useState<CountryListData[]>([])

const fetchCountryList = useCallback(() => {
  return api.get('/Countries').then(res => {
    setCountryList(res.data)
  }).catch(error => {
        console.error(error)
    });
  },[])
  useEffect(() => {
  fetchCountryList()
  }, [fetchCountryList])
  console.log(countryList)


  const countryName = countryList.map((country) => {
    return <div>{country.name}</div>
  })

  const countryGDP = countryList.map((country) => {
    return <p>{country.gdp}</p>
  })

  const countryLandMass = countryList.map((country) => {
  return <p>{country.landMass}</p>
  })

  const countryFlag = countryList.map((country) => {
    return <a href={country.link}><img className='flag'
    src={country.flag} alt={country.flagAlt} /></a>
  })

  return (
    <>
      <div id='container'>
        <div id='overAllContainer'>
          <div className='country'>
            <h3 className='countryHeading'>{countryName}</h3>
            {countryFlag}
            <div className="countrySubHeading">
                {countryGDP}
                {countryLandMass}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

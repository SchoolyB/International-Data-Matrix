import React, { useCallback, useEffect, useState } from 'react'
import { api } from '../includes/api'
import { CountryListData } from '../types/countryListData'

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


  const createCountry = countryList.map((country) => {
    return <div className='country'>
      <h3 className='countryHeading'>{country.name}</h3>
      <a href={country.link}>
        <img className='flag'src= {country.flag} alt={country.flagAlt}/>
      </a>
      <div className='data'>
        <p>{country.region}</p>
        <p>{country.population}</p>
        <p>{country.gdp}</p>
        {/* <p>{country.area}</p> */}
      </div>
    </div>
  })

  return (
    <div>
      {/* <div id='container'> */}
        <div id='overAllContainer'>
          {createCountry}
        </div>
      {/* </div> */}
    </div>
  )
}

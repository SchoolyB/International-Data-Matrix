import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { api } from '../includes/api'
import { CountryListData } from '../types/countryListData'
// import * as flags from "../../assets/countrySelctionFlags";




export default function Countries() {



const [countryList, setCountryList] = useState<CountryListData[]>([])

const fetchCountryList = useCallback(() => {
  return api.get('/Countries').then(res => {

    console.log(res.data)
  }).catch(error => {
        console.error(error)
    });
  },[])
  useEffect(() => {
  fetchCountryList()
}, [fetchCountryList])



  return (
    <div>

  <div id="container">
    {/* {state.filteredData
      .map(country => {
          <div id="overAllContainer">
            <div className="country" id="{country._id}">
              <h3 className="countryHeading">{country.name}</h3>
              <a href="{country.link}">
                <img
                  className="flag"
                  src={flags[country.name]}
                  alt={country.flagAlt}
                />
              </a>
              <div className="data">
                <p>{country.population}</p>
                <p>{country.gdp}</p>
                <p>{country.landMass}</p>
                <p></p>
              </div>
            </div>
          </div>
      })
      .join("")} */}



  </div>




    </div>
  )
}

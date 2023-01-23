import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getCountry } from '../../includes/countries';
import { CountryData } from '../../types/countryData';

export default function countryPage() {
  const {id} = useParams<{id:string}>()

  const [state, setState] = useState<CountryData>({
    name: '',
    nativeName: '',
    region: '',
    alpha2Code:  0,
    alpha3Code: 0,
    subRegion: '',
    capital: '',
    population: 0,
    timezones: '',
    demonym: '',
    currencies: '',
    independent: true



    //the required properties are here and population had a '?' so its not required
  })


//a '!' after a variable means this is definitely defined
  const fetchData = useCallback(() => getCountry(id!).then(setState),[]);
  useEffect(() => {
    console.log('hello')
  fetchData()
},[fetchData])
  return (

    <div className='overallCountryInfoCOntainer'>
      <div className="countryInfo" id="AfghanistanInfo">
        <img className="longCountryInfoFlag"
          id="AfghanistanInfoFlag"
          // src={flag}TODO:work on adding dynamic flags
          alt="The
        Flag
        of
        {id}"/>
      </div>

      <div className="genInformationContainer">
        <p className="genInfoRegion">
          {/* <u>${name}</u> Is Located In The Region of */}
          <u>{state.name}</u><br />
          And The Subregion of <u>${}</u>
        </p>

        <p className='genInfoLocationAndWeather'>
          The Capitol of <u>${}</u> is
          <u>${state.capital}</u><br /><br />
          <u>${}</u> is located at<br /> Lat: <u>${

          }</u> Lon: <u>${}</u><br /><br />
          Here is a look at the current weather in <br /><u>${
            }</u>: <br /><br />
          The Temperature is currently: °F ${}<br />
          But it feels like: °F ${} <br /> and
          {/* ${.map(weatherBlock)} */}
        </p>

        <p className='genInfoPopulation'>
          The Population of <u>${}</u> is is approx.
          <u>${}</u>
        </p>

        <p className="genInfoISOCodes ">
          <u>${}'s</u> 2 Digit Alpha code is:
          <u>${}</u><br />
          <u>${}'s</u> 3 Digit Alpha code is:
          <u>${}</u>
        </p>
        <p className="genInfoCurrency">
          The National Currency of ${} Is: <br />
          {/* The <u>${[0].name}</u> Represented As: */}
          {/* <u>${[0].symbol}</u> & */}
          {/* <u>${[0].code}</u> */}
        </p>
        <p className="genInfoCallingCodes">
          <u>${}'s</u> calling code is
          <u>${}</u>
        </p>
        <p className="genInfoTimezones">
          Timezones: <u>${state.timezones}</u>
        </p>
      </div>
    </div>

  )
}

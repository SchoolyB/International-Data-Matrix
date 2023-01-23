import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getCountry } from '../../includes/countries';
import { CountryData } from '../../types/countryData';

export default function countryPage(bar: string | undefined) {
  const {id} = useParams<{id:string}>()

  const [state, setState] = useState<CountryData>({
    name: '',
    nativeName: '',
    region: '',
    alpha2Code:  0,
    alpha3Code: 0,
    subregion: '',
    capital: '',
    population: 0,
    timezones: '',
    demonym: '',
    currencies: '',
    independent: true
    //population has a '?' so its not required
  })


//a '!' after a variable means this is definitely defined
  const fetchData = useCallback(() => getCountry(id!).then(setState),[]);
  useEffect(() => {
    console.log()
  fetchData()
},[fetchData])

  // function to make and display dynamic <img> alt attributes for each country
const dynamicImgAttribute = () => {
  const foo = document.getElementById('countryInfoFlag');
  if (foo != null) {
    foo.setAttribute('alt', `The Flag of ${state.name}`)
    const bar:any = foo.attributes[1]
   }

}
  dynamicImgAttribute();
  return (

    <div className='overallCountryInfoContainer'>
      <div id="countryInfo">
        <img id="countryInfoFlag"
          // src={flag}TODO:work on adding dynamic flags sources
          alt= {bar}/>
      </div>

      <div className="genInformationContainer">
        <p className="genInfoRegion">
          <u>{state.name}</u> Is Located In The Region of
          <u>{state.region}</u><br />
          And The Subregion of <u>{state.subregion}</u>
        </p>

        <p className='genInfoLocationAndWeather'>
          The Capitol of <u>{state.name}</u> is
          <u>{state.capital}</u><br /><br />
          <u>{}</u> is located at<br /> Lat: <u>{

          }</u> Lon: <u>{}</u><br /><br />
          Here is a look at the current weather in <br /><u>{
            }</u>: <br /><br />
          The Temperature is currently: °F {}<br />
          But it feels like: °F {} <br /> and
          {/* {.map(weatherBlock)} */}
        </p>

        <p className='genInfoPopulation'>
          The Population of <u>{state.name}</u> is is approx.
          <u>{state.population}</u>
        </p>

        <p className="genInfoISOCodes ">
          <u>{state.name}'s</u> 2 Digit Alpha code is:
          <u>{state.alpha2Code}</u><br />
          <u>{state.name}'s</u> 3 Digit Alpha code is:
          <u>{state.alpha3Code}</u>
        </p>
        <p className="genInfoCurrency">
          The National Currency of {state.name} Is: <br />
          {/* The <u>{.name}</u> Represented As: */}
          {/* <u>{state.currencies}</u> & */}
          {/* <u>{[0].code}</u> */}
        </p>
        <p className="genInfoCallingCodes">
          <u>{}'s</u> calling code is
          <u>{}</u>
        </p>
        <p className="genInfoTimezones">
          Timezones: <u>{state.timezones}</u>
        </p>
      </div>
    </div>

  )
}

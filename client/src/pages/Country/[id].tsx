import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CountryData } from '../../types/countryData';
import { WeatherData } from '../../types/weatherData';
import { getCountry } from '../../includes/countries';
import { getWeather } from '../../includes/openWeather'
import { countrySelectionData } from '../../types/countrySelectionData';
import CountryWeather from '../../components/CountryWeather';

export default function countryPage(bar: string | undefined) {

  const { id } = useParams<{ id: string }>()

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
  }, [fetchData])


  // function to make and display dynamic <img> alt attributes for each country
const dynamicImgAttribute = () => {
  const foo = document.getElementById('countryInfoFlag');
  if (foo != null) {
    foo.setAttribute('alt', `The Flag of ${state.name}`)
    const bar:any = foo.attributes[1]}
}

  // const independentNation = (CountryData:any) => {
  //   if()
  // }
  dynamicImgAttribute();

  return (

    <div className='overallCountryInfoContainer'>
      <div id="countryInfo">
        <h1  id='countryEnglishName'>{state.name}</h1>
        <h3 id='countryNativeName'>{ state.nativeName}</h3>
      </div>
      {/* TOPICS */}
      <div>
        <section className='topic'><h3>Geography</h3></section>
        <section className='topic'><h3>History</h3></section>
        <section className='topic'><h3>Demographics</h3></section>
        <section className='topic'><h3>Culture</h3></section>
        <section className='topic'><h3>Religion</h3></section>
        <section className='topic'><h3>Current Events</h3></section>
      </div>

      <div className="metaDataContainer">
        <img id="countryInfoFlag"
          // src={flag}TODO:work on adding dynamic flags sources
          alt= {bar}/>
        <p className="genInfoRegion">
          <u>{state.name}</u> Is Located In The Region of
          <u>{state.region}</u><br />
          And The Subregion of <u>{state.subregion}</u>
        </p>
        <CountryWeather capital={state.capital} name= {state.name} />

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
          The <u>{state.name}</u> Represented As:
          {/* <u>{state.currencies}</u> & */}
          {/* <u>{[0].code}</u> */}
        </p>
        <p className="genInfoCallingCodes">
          <u>{state.name}'s</u> calling code is
          <u></u>
        </p>
        <p className="genInfoTimezones">
          Timezones: <u>{state.timezones}</u>
        </p>
        {/* <p id="independentNation">
          {state.name} is an independent nation
        </p> */}
      </div>
    </div>
  )
}

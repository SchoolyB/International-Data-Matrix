import React from 'react'
import flag from '../../../assets/countryPageFlags'


export default function El_Salvador() {
  return (
    <div className='overallCountryInfoCOntainer'>
      <div className="countryInfo" id="El_SalvadorInfo">
        <img className="longCountryInfoFlag"
        id="El_SalvadorInfoFlag"
        src={flag}
        alt="The
        Flag
        of
        El_Salvador"/>
      </div>

      <div className="genInformationContainer">
        <p className="genInfoRegion">
          <u>${state.info.name}</u> Is Located In The Region of
          <u>${state.info.region}</u><br />
          And The Subregion of <u>${state.info.subregion}</u>
        </p>

        <p className='genInfoLocationAndWeather'>
          The Capitol of <u>${state.info.name}</u> is
          <u>${state.info.Capital}</u><br/><br/>
          <u>${state.info.Capital}</u> is located at<br/> Lat: <u>${
          state.Weather.lat
          }</u> Lon: <u>${state.Weather.lon}</u><br/><br/>
          Here is a look at the current weather in <br/><u>${
          state.info.Capital}</u>: <br/><br/>
          The Temperature is currently: °F ${state.main.temp}<br/>
          But it feels like: °F ${state.main.feels_like} <br/> and
          ${state.Weather.description.map(weatherBlock)}
        </p>

        <p className='genInfoPopulation'>
          The Population of <u>${state.info.name}</u> is is approx.
          <u>${state.info.population}</u>
        </p>

        <p className="genInfoISOCodes ">
          <u>${state.info.name}'s</u> 2 Digit Alpha code is:
          <u>${state.info.Alpha2Code}</u><br />
          <u>${state.info.name}'s</u> 3 Digit Alpha code is:
          <u>${state.info.Alpha3Code}</u>
        </p>
        <p className="genInfoCurrency">
          The National Currency of ${state.info.name} Is: <br />
          The <u>${state.info.Currency[0].name}</u> Represented As:
          <u>${state.info.Currency[0].symbol}</u> &
          <u>${state.info.Currency[0].code}</u>
        </p>
        <p className="genInfoCallingCodes">
          <u>${state.info.name}'s</u> calling code is
          <u>${state.info.callingCodes}</u>
        </p>
        <p className="genInfoTimezones">
          Timezones: <u>${state.info.timezones}</u>
        </p>
      </div>
    </div>

  )
}

import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CountryData } from '../../types/countryData'
import { getCountry } from '../../includes/countries'
import CountryWeather from '../../components/CountryWeather'
import getCountryTopic from '../../includes/countryTopicImports/countryTopics'
import MarkdownIt from 'markdown-it'
import PageNotFound from '../[...pathname]'
import download from '../../../assets/downloadBtn.png'

// USING VITE'S GLOB METHOD TO STORE IMAGES FROM FOLDERS INTO VARIABLES
const simpleCountryMaps = import.meta.glob('../../../assets/simpleMaps/*.png', {
  eager: true,
})

const locatorCountryMap = import.meta.glob(
  '../../../assets/locatorMaps/*.png',
  {
    eager: true,
  },
)

export default function countryPage(
  simpleMapAlter: string | undefined,
  locatorMapAlter: string | undefined,
) {
  const { id } = useParams<{ id: string }>()
  const md = new MarkdownIt()
  const [state, setState] = useState<CountryData>({
    name: '',
    nativeName: '',
    region: '',
    alpha2Code: 0,
    alpha3Code: 0,
    subregion: '',
    capital: '',
    population: 0,
    timezones: '',
    demonym: '',
    currencies: [],
    flags: {
      svg: '',
      png: '',
    },
    //population has a '?' so its not required
  })

  const [error, setError] = useState<any>(null)

  //A Record is a built in type that allows you to create an object with a key and value
  const [topics, setTopics] = useState<Record<string, string>>({
    history: '',
    culture: '',
    government: '',
    economy: '',
    geography: '',
    religion: '',
    demographics: '',
  })

  // Declaring several async functions that take the id of the current page as a param. Within the async functions we create a variable called new... that awaits the response the respective countryTopicImports includes file. We then call the set... functions and pass them the variable from the line above
  const showAllTopics = async () => {
    for (const topic of Object.keys(topics)) {
      const data = await getCountryTopic(id!, topic).catch(
        () => 'No Data Found', //if there is an error, fall back to 'No Data Found'
      )
      topics[topic] = md.render(data || '#### - Data Not Found -') //if data is undefined, fall back to 'No Data Found'
    }
    setTopics({ ...topics })
  }

  // CALLING THE show...FUNCTIONS AND PASSING THE ID OF THE THE CURRENT COUNTRY PAGE THAT THE USER IS ON

  //a '!' after a variable means this is definitely defined
  const fetchData = useCallback(
    () => getCountry(id!).then(setState, setError).then(showAllTopics),
    [],
  )
  useEffect(() => {
    fetchData()
  }, [fetchData])

  // A function that dynamically generates all the alt attributes of images on a country page
  const setDynamicAltAttributes = () => {
    const newSimpleMap = document.getElementById('simpleMap')
    if (newSimpleMap != null) {
      newSimpleMap.setAttribute('alt', `A map of ${state.name}`)
      const MapAlter: any = newSimpleMap.attributes[1]
    }
    const newLocatorMap = document.getElementById('locatorMap')
    if (newLocatorMap != null) {
      newLocatorMap.setAttribute('alt', `A locator map of ${state.name}`)
      const locatorMapAlter: any = newLocatorMap.attributes[1]
    }
  }
  setDynamicAltAttributes()

  //function that finds a simple map image based off the current url
  const foundSimpleMap = Object.entries(simpleCountryMaps).find(
    ([file_path, url]) => {
      const simpleMapPath = file_path.replace('../../../assets/simpleMaps/', '')

      return simpleMapPath.startsWith(id!)
    },
  ) as any
  const CurrentCountrySimpleMap = foundSimpleMap
    ? foundSimpleMap[1].default
    : null

  //function that finds a locator map image based off the current url
  const foundLocatorMap = Object.entries(locatorCountryMap).find(
    ([file_path, url]) => {
      const locatorMapPath = file_path.replace(
        '../../../assets/locatorMaps/',
        '',
      )
      return locatorMapPath.startsWith(id!)
    },
  ) as any

  const CurrentCountryLocatorMap = foundLocatorMap
    ? foundLocatorMap[1].default
    : null

  // extracts the object from the currency array
  const currencyInfo = state.currencies[0]
  // extract key value from flags obj
  const flagsInfo = state.flags.svg
  // set 'alt' attribute for each flag
  const flagAltValue = `The Flag of ${state.name}`

  // DOWNLOAD BUTTON STUFF
  const downloadBtn = document.getElementById('downloadBtn') // targets download button
  downloadBtn?.addEventListener('click', () => {
    print() // opens browser print dialog
  })

  // if there is an error when trying to go to load
  // data for a country  that does not exist,
  // return the PageNotFound component
  if (error) {
    return <PageNotFound />
  }

  return (
    // COUNTRY HEADER INFO
    <div className='overallCountryInfoContainer'>
      <div className='countryInfo'>
        <h1 id='countryEnglishName'>{state.name}</h1>
        <h4 id='countryNativeName'>{state.nativeName}</h4>
      </div>

      {/* Start of information right side of screen */}
      <div className='metaDataContainer'>
        <div className='countryFlagsAndMaps'>
          <img id='countryInfoFlag' src={state.flags.svg} alt={flagAltValue} />
          <img
            id='simpleMap'
            src={CurrentCountrySimpleMap}
            alt={simpleMapAlter}
          />
          <img
            id='locatorMap'
            src={CurrentCountryLocatorMap}
            alt={locatorMapAlter}
          />
        </div>

        {/* START OF META DATA CONTAINER TEXT */}

        {/* region & sub region information */}
        <div className='genInfoRegionAndSubregion metaDataSection'>
          <div className='region'>
            <h6>Region</h6> <u>{state.region}</u>
          </div>
          <div className='subregion'>
            <h6>Subregion</h6> <u>{state.subregion}</u>
          </div>
        </div>

        {/* population information */}
        <div className='genInfoPopulation metaDataSection'>
          <h6>Population</h6>
          Approx.<u>{state.population}</u>
        </div>

        {/* demonym information */}
        <div className='genInfoDemonym metaDataSection'>
          <h6>Demonym</h6>
          <u>{state.demonym}</u>
        </div>

        {/* iso code information */}
        <div className='genInfoISOCodes metaDataSection'>
          <div className='alpha2Code'>
            <h6>ISO 2 Code</h6>
            <u>{state.alpha2Code}</u>
          </div>
          <div className='alpha3Code'>
            <h6>ISO 3 Code</h6>
            <u>{state.alpha3Code}</u>
          </div>
        </div>

        {/* Start of weather component from '../../components/CountryWeather.tsx' */}
        <CountryWeather capital={state.capital} name={state.name} />
        {/* End of weather component from '../../components/CountryWeather.tsx' */}

        {/* start of currency information */}
        <div className='genInfoCurrency metaDataSection'>
          <div className='currencyName'>
            <h6>Currency Name</h6>
            <u>{currencyInfo?.name}</u>
          </div>
          <div className='currencySymbol'>
            <h6>Currency Symbol</h6>
            <u>{currencyInfo?.symbol}</u>
          </div>
          <div className='currencyCode'>
            <h6>Currency Code</h6>
            <u>{currencyInfo?.code}</u>
          </div>
        </div>

        {/* start of timezone information */}
        <div className='genInfoTimezones metaDataSection'>
          <h6>Timezones</h6>
          <li className='timeZoneListItem'>{state.timezones[0]}</li>
          <li className='timeZoneListItem'>{state.timezones[1]}</li>
          <li className='timeZoneListItem'>{state.timezones[2]}</li>
          <li className='timeZoneListItem'>{state.timezones[3]}</li>
          <li className='timeZoneListItem'>{state.timezones[4]}</li>
          <li className='timeZoneListItem'>{state.timezones[5]}</li>
          <li className='timeZoneListItem'>{state.timezones[6]}</li>
          <li className='timeZoneListItem'>{state.timezones[7]}</li>
          <li className='timeZoneListItem'>{state.timezones[8]}</li>
          <li className='timeZoneListItem'>{state.timezones[9]}</li>
          <li className='timeZoneListItem'>{state.timezones[10]}</li>
          <li className='timeZoneListItem'>{state.timezones[11]}</li>
          <li className='timeZoneListItem'>{state.timezones[12]}</li>
        </div>

        <div className='downloadBtnContainer'>
          <a>
            <img id='downloadBtn' src={download} alt='Download Button' />
          </a>
        </div>
      </div>

      {/* END OF META DATA CONTAINER TEXT */}

      {/* TOPICS */}

      {/* Geography */}
      <div id='topic'>
        <section className='topic' id='geography'>
          <h3>Geography</h3>
          <p dangerouslySetInnerHTML={{ __html: topics.geography }}></p>
        </section>

        {/* History */}
        <section className='topic' id='history'>
          <h3>History</h3>
          <p dangerouslySetInnerHTML={{ __html: topics.history }}></p>
        </section>

        {/* Demographics */}
        <section className='topic' id='demographics'>
          <h3>Demographics</h3>
          <p dangerouslySetInnerHTML={{ __html: topics.demographics }}></p>
        </section>

        {/* Culture */}
        <section className='topic' id='culture'>
          <h3>Culture</h3>
          <p dangerouslySetInnerHTML={{ __html: topics.culture }}></p>
        </section>

        {/* Religion */}
        <section className='topic' id='religion'>
          <h3>Religion</h3>
          <p dangerouslySetInnerHTML={{ __html: topics.religion }}></p>
        </section>
        {/* Government */}
        <section className='topic' id='government'>
          <h3>Government</h3>
          <p dangerouslySetInnerHTML={{ __html: topics.government }}></p>
        </section>

        {/* Economy */}
        <section className='topic' id='economy'>
          <h3>Economy</h3>
          <p dangerouslySetInnerHTML={{ __html: topics.economy }}></p>
        </section>
      </div>
    </div>
  )
}

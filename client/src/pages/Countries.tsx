import { useContext } from 'react'
import { CountryContext, SearchContext } from '../App'
import home from '../../assets/footerIcons/home.png'
import contact from '../../assets/footerIcons/contact.png'
import documentation from '../../assets/footerIcons/documentation.png'
import translator from '../../assets/footerIcons/translate.png'
import map from '../../assets/footerIcons/map.png'
import faq from '../../assets/footerIcons/faq.png'
import Footer from '../components/Footer'

export default function Countries() {
  const countryList = useContext(CountryContext)
  const search = useContext(SearchContext)

  const countryElement = countryList
    .filter(country => {
      return country.name.toLowerCase().includes(search.value.toLowerCase())
    })
    .map((country, index) => {
      return (
        <div key={index} className='country'>
          <h3 className='countryHeading'>{country.name}</h3>
          <a href={country.link}>
            <img
              className='flag'
              src={country.flag}
              alt={country.flagAlt}
              loading='lazy'
            />
          </a>
        </div>
      )
    })
  return (
    <div>
      <div id='searchBox'>
        <div id='searchContainer'>
          <form id='countryFilterForm' className='searchForm '>
            <input
              placeholder='Search Countries'
              id='countryFilter'
              name='countryFilter'
              type='text'
              required
              value={search.value}
              onChange={event => {
                search.value = event.target.value
              }}
            ></input>
          </form>
        </div>
        <br />
        <br />
      </div>
      <div id='overAllContainer'>{countryElement}</div>
      <Footer />
    </div>
  )
}

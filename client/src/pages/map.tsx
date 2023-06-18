import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'
import { useMemo } from 'react'
import home from '../../assets/footerIcons/home.png'
import contact from '../../assets/footerIcons/contact.png'
import documentation from '../../assets/footerIcons/documentation.png'
import translator from '../../assets/footerIcons/translate.png'
import mapIcon from '../../assets/footerIcons/map.png'
import faq from '../../assets/footerIcons/faq.png'

const mapKey = import.meta.env.VITE_MAP_KEY

const map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: `${mapKey}` || '',
  })
  const center = useMemo(() => ({ lat: 0, lng: 0 }), [])

  return (
    <>
      <div className='map'>
        {!isLoaded ? (
          <div className='mapLoading'>Loading...</div>
        ) : (
          <GoogleMap
            mapContainerClassName='map-container'
            center={center}
            zoom={3.4}
          ></GoogleMap>
        )}
      </div>

      <footer>
        {/* author name */}
        <ul id='webPageInfo'>
          <li>Author: Marshall Burns</li>
        </ul>
        {/*footer icons*/}

        <ul id='footerIconContainer'>
          {/* home icon */}
          <li>
            <a title='Home' href='/'>
              <img
                title='Home'
                className='footerIcon'
                id='homeIcon'
                src={home}
              />
            </a>
          </li>

          {/* translator icon */}
          <li>
            <a title='Translator' href='Translator'>
              <img
                title='Translator'
                className='footerIcon'
                id='translateIcon'
                src={translator}
              />
            </a>
          </li>

          {/* contact icon */}
          <li id='footerContactIcon'>
            <a title='Contact' href='Contact'>
              <img
                title='Contact'
                className='footerIcon'
                id='ContactIcon'
                src={contact}
              />
            </a>
          </li>
          {/* map icon */}
          <li>
            <a title='Map' href='Map'>
              <img
                title='Map'
                className='footerIcon'
                id='MapIcon'
                src={mapIcon}
              />
            </a>
          </li>
          {/* faq icon */}
          <li>
            <a title='FAQ' href='FAQ'>
              <img title='FAQ' className='footerIcon' id='FAQIcon' src={faq} />
            </a>
          </li>

          {/* documentation icon */}
          <li>
            <a
              title='Documentation'
              href='https://github.com/SchoolyB/Capstone/blob/master/README.md'
            >
              <img
                title='Documentation'
                className='footerIcon'
                id='docIcon'
                src={documentation}
              />
            </a>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default map

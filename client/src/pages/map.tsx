import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'
import { useMemo } from 'react'
import home from '../../assets/footerIcons/home.png'
import contact from '../../assets/footerIcons/contact.png'
import documentation from '../../assets/footerIcons/documentation.png'
import translator from '../../assets/footerIcons/translate.png'
import mapIcon from '../../assets/footerIcons/map.png'
import faq from '../../assets/footerIcons/faq.png'
import Footer from '../components/Footer'

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
          <h1 id='mapLoading'>Loading...</h1>
        ) : (
          <GoogleMap
            mapContainerClassName='map-container'
            center={center}
            zoom={3.5}
          ></GoogleMap>
        )}
      </div>
      <Footer />
    </>
  )
}

export default map

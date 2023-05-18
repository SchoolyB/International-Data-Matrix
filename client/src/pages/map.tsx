import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'
import { useMemo } from 'react'
const mapKey = import.meta.env.VITE_MAP_KEY

const map = () => {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: `${mapKey}` || '',
	})
	const center = useMemo(() => ({ lat: 0, lng: 0 }), [])

	return (
		<div className="map">
			{!isLoaded ? (
				<h1>Loading...</h1>
			) : (
				<GoogleMap
					mapContainerClassName="map-container"
					center={center}
					zoom={3.5}
				></GoogleMap>
			)}
		</div>
	)
}

export default map

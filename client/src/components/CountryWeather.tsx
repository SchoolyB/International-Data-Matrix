import React, { useCallback, useEffect, useState } from 'react'
import { getWeather } from '../includes/openWeather'
import { WeatherData } from '../types/weatherData'

interface Props {
  capital: string
  name: string
}

export default function CountryWeather(props: Props) {
  const [weather, setWeather] = useState<WeatherData>({
    main: '',
    description: '',
    temp: 0,
    feels_like: 0,
    lat: 0,
    lon: 0,
  })

  const fetchWeather = useCallback(async () => {
    if (!props.capital.length) {
      return
    }
    const data = await getWeather(props.capital)

    setWeather({
      main: data.weather.main, //TODO: weather.main not working anymore. used to say 'cloudy, sunny, rainy'
      description: data.weather.id,
      temp: data.main.temp,
      feels_like: data.main.feels_like,
      lat: data.coord.lat,
      lon: data.coord.lon,
    })
  }, [props.capital])
  useEffect(() => {
    fetchWeather()
  }, [props.capital])

  return (
    <div className='genInfoLocationAndWeather metaDataSection'>
      <div className='capital'>
        <h6>Capital</h6>
        {props.capital}
      </div>
      <br />
      {/* start of location information */}
      <div className='location'>
        <h6>Location of Capital</h6>
        Latitude:{weather.lat} Longitude: {weather.lon}
      </div>
      <br />
      {/* start of weather information */}
      <div className='weather'>
        <h6>Current Weather In {props.capital}</h6>
        
        Currently {weather.temp}°F
        <br />
        Feels like {weather.feels_like}°F
      </div>
    </div>
  )
}

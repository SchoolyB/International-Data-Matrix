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
			main: data.weather.main,
			description: data.weather.id,
			temp: data.main.temp,
			feels_like: data.main.feels_like,
			lat: data.coord.lat,
			lon: data.coord.lon,
		})
	}, [props.capital])
	useEffect(() => {
		fetchWeather()
	}, [fetchWeather, props.capital])

	return (
		<p className="genInfoLocationAndWeather">
			The Capitol of <u>{props.name}</u> is:
			<u> {props.capital}</u>
			<br />
			<u>{props.capital}</u> is located at
			<br /> Latitude:<u>{weather.lat}</u> Longitude: <u>{weather.lon}</u>
			<br />
			<br />
			Here is a look at the current weather in <u>{props.capital}</u>
			<u></u>: {weather.main}
			<br />
			<br />
			The Temperature is currently:<u>{weather.temp}°F</u> <br />
			But it feels like:<u>{weather.feels_like}°F</u> <br />
		</p>
	)
}

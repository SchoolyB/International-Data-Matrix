import axios from "axios";
import { WeatherData } from "../types/weatherData";
const weatherKey = import.meta.env.VITE_OPEN_WEATHER_KEY

export const getWeather = (capital:string) => {
	return axios
						.get(
							`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${weatherKey}&units=imperial`,
						)
						.then((res) => res.data)
				}



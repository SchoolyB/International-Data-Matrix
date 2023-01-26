import axios from "axios";
<<<<<<< HEAD
import { WeatherData } from "../types/weatherData";
const weatherKey = import.meta.env.VITE_OPEN_WEATHER_KEY

export const getWeather = (capital:string) => {
	return axios
						.get(
							`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${weatherKey}&units=imperial`,
						)
=======
// import { WeatherData } from "../types/weatherData";
const baseUrl = import.meta.env.VITE_OPEN_WEATHER_KEY
import { WeatherData } from "../types/weatherData";

export const getWeather = () => {
	return axios
						.get<WeatherData>(
							`https://api.openweathermap.org/data/2.5/weather?q=canberra&appid=${baseUrl}`)
>>>>>>> 587a48dd11a33d1de18fdb694637128021b5b364
						.then((res) => res.data)
				}

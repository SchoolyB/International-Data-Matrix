import axios from "axios";
// import { WeatherData } from "../types/weatherData";
const baseUrl = import.meta.env.VITE_OPEN_WEATHER_KEY
import { WeatherData } from "../types/weatherData";

export const getWeather = () => {
	return axios
						.get<WeatherData>(
							`https://api.openweathermap.org/data/2.5/weather?q=canberra&appid=${baseUrl}`)
						.then((res) => res.data)
				}

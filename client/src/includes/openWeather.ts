import axios from "axios";
import { WeatherData } from "../types/weatherData";
const baseUrl = import.meta.env.VITE_OPEN_WEATHER_KEY

export const getWeather = (id: string) => {
	return axios
						.get<WeatherData>(
							`https://api.openweathermap.org/data/2.5/weather?q={baseUrl}`,
						)
						.then((res) => res.data)
				}



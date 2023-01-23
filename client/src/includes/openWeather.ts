import axios from "axios";
import { WeatherData } from "../types/weatherData";

export const getWeather = (id: any) => {
					axios
						.get<WeatherData>(
							'https://api.openweathermap.org/data/2.5/weather?q=',
						)
						.then((res) => res.data)
				}



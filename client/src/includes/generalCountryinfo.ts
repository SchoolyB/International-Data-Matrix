import axios from "axios";


export const getWeather = (capital: string) => {
	return axios
		.get(`https://api.api-ninjas.com/v1/country?name=`)
		.then((res) => res.data)
}
// TODO: need to build country selection page use https://api-ninjas.com/api/country

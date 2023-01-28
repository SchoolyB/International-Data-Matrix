import axios from "axios";
const countryKey = import.meta.env.VITE_COUNTRY_API_KEY

export const getCountrySelectionData = () => {
	return axios
		.get(
			`https://countryapi.io/api/all?apikey=${countryKey}`,
		)
		.then((res) => res.data)
}


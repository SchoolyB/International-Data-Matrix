// this file is used to create an axios instance with the baseURL set to the countryDataAPI url that I @SchoolyB made
import axios from 'axios'
const baseURL = import.meta.env.VITE_API_URL // this is the same as process.env.VITE_COUNTRY_DATA_API_URL
export const countryData = axios.create({ baseURL }) //exporting an axios instance with the baseURL set to the countryDataAPI url

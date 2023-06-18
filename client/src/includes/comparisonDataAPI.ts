// this file is used to create an axios instance with the baseURL set to the comparisonDataAPI url that I @SchoolyB made
import axios from 'axios'
const baseURL = import.meta.env.VITE_API_URL // this is the same as process.env.VITE_COMPARISON_DATA_API_URL
export const comparisonData = axios.create({ baseURL }) //exporting an axios instance with the baseURL set to the comparisonDataAPI url

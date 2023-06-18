import axios from 'axios'
const baseURL = import.meta.env.VITE_TRANSLATOR_CALL_URL
export const translatorAPICall = axios.create({ baseURL })

import { Route, BrowserRouter as Router, useRoutes } from 'react-router-dom'
import Header from './components/Header'
import routes from '~react-pages'
import { countryData } from './includes/countryDataAPI'
import { CountryListData } from '../src/types/countryListData'
import React, { createContext, useCallback, useEffect, useState } from 'react'

// VERCEL ANALYTICS STUFF
import { inject } from '@vercel/analytics'
inject()
// VERCEL ANALYTICS STUFF

export function useCoolerState<Value>(initialValue: Value) {
  const [value, setValue] = useState(initialValue)

  return {
    get value() {
      return value
    },
    set value(value) {
      setValue(value)
    },
  }
}

type ContextType = {
  countryList: CountryListData[]
  isLoading: boolean
}

export const CountryContext = createContext<ContextType>({
  countryList: [],
  isLoading: false,
})

export const SearchContext = createContext<StateRef<string>>({
  value: '',
})

export type StateRef<Value> = {
  value: Value
}

const App = () => {
  const [countryList, setCountryList] = useState([])
  const search = useCoolerState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    countryData
      .get('/Countries')
      .then(res => {
        setCountryList(res.data)
      })
      .catch(error => {
        console.error(error)
      })
    setIsLoading(false)
  }, [])

  return (
    <CountryContext.Provider value={{ countryList, isLoading }}>
      <SearchContext.Provider value={search}>
        <Header />
        {useRoutes(routes)}
      </SearchContext.Provider>
    </CountryContext.Provider>
  )
}
export default App

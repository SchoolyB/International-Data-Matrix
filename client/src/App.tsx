import { Route, BrowserRouter as Router, useRoutes } from 'react-router-dom'
import Header from './components/Header'
import routes from '~react-pages'
import { CountryListData } from '../src/types/countryListData'
import React, { createContext, useCallback, useEffect, useState } from 'react'
import { api } from './includes/api'

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

export const CountryContext = createContext<CountryListData[]>([])

export const SearchContext = createContext<StateRef<string>>({
  value: '',
})

export type StateRef<Value> = {
  value: Value
}

const App = () => {
  const [countryList, setCountryList] = useState([])
  const search = useCoolerState('')

  useEffect(() => {
    api
      .get('/Countries')
      .then(res => {
        setCountryList(res.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return (
    <CountryContext.Provider value={countryList}>
      <SearchContext.Provider value={search}>
        <Header />
        {useRoutes(routes)}
      </SearchContext.Provider>
    </CountryContext.Provider>
  )
}
export default App

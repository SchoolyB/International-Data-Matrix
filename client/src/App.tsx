import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import Header from './components/Header'
import routes from '~react-pages'
import Footer from './components/Footer'
import { CountryListData } from '../src/types/countryListData'
import HomeIcon from '@rsuite/icons/legacy/Home'
import CogIcon from '@rsuite/icons/legacy/Cog'
import { Navbar, Nav, Toggle } from 'rsuite'
import React, { createContext, useCallback, useEffect, useState } from 'react'
import { api } from './includes/api'

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
	const [countryList, setCountryList] = useState<CountryListData[]>([])
	const search = useCoolerState('')

	const fetchCountryList = useCallback(() => {
		return api
			.get('/Countries')
			.then((res) => {
				setCountryList(res.data)
			})
			.catch((error) => {
				console.error(error)
			})
	}, [])
	useEffect(() => {}, [fetchCountryList])
	fetchCountryList()

	return (
		<CountryContext.Provider value={countryList}>
			<SearchContext.Provider value={search}>
				<Header />
				{search.value}
				{useRoutes(routes)}
				<Footer />
			</SearchContext.Provider>
		</CountryContext.Provider>
	)
}

export default App

import React, { useCallback, useContext, useEffect, useState } from 'react'
import { api } from '../includes/api'
import { CountryListData } from '../types/countryListData'
import { CountryContext } from '../App'
import { SearchContext } from '../App'

export default function Countries() {
	const countryList = useContext(CountryContext)
	const search = useContext(SearchContext)

	const countryElement = countryList
		.filter((country) => {
			return country.name.toLowerCase().includes(search.value.toLowerCase())
		})
		.map((country) => {
			return (
				<div className="country">
					<h3 className="countryHeading">{country.name}</h3>
					<a href={country.link}>
						<img className="flag" src={country.flag} alt={country.flagAlt} />
					</a>
				</div>
			)
		})

	return (
		<div>
			<div id="overAllContainer">{countryElement}</div>
		</div>
	)
}

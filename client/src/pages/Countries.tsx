import { useContext } from 'react'
import { CountryContext, SearchContext } from '../App'

export default function Countries() {
	const countryList = useContext(CountryContext)
	const search = useContext(SearchContext)

	const countryElement = countryList
		.filter((country) => {
			return country.name.toLowerCase().includes(search.value.toLowerCase())
		})
		.map((country) => {
			console.log(country)
			return (
				<div className="country">
					<h3 className="countryHeading">{country.name}</h3>
					<a href={country.link}>
						<img className="flag" src={country.flag} alt={country.flagAlt} loading="lazy" />
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

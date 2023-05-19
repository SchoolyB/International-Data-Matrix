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
			return (
				<div className="country">
					<h3 className="countryHeading">{country.name}</h3>
					<a href={country.link}>
						<img
							className="flag"
							src={country.flag}
							alt={country.flagAlt}
							loading="lazy"
						/>
					</a>
				</div>
			)
		})
	return (
		<div>
			<div id="searchBox">
				<div id="searchContainer">
					<form
						id="countryFilterForm"
						className="searchForm "
					>
						<input
							placeholder="Search Countries"
							id="countryFilter"
							name="countryFilter"
							type="text"
							required
							value={search.value}
							onChange={(event) => {
								search.value = event.target.value
							}}
						></input>
					</form>
				</div>
				<br />
				<br />
			</div>
			<div id="overAllContainer">{countryElement}</div>
		</div>
	)
}

import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CountryData } from '../../types/countryData'
import { getCountry } from '../../includes/countries'
import CountryWeather from '../../components/CountryWeather'
'../../../public/assets/backgroundImage/svgs/*.svg'

import getCountryHistory from '../../includes/countryTopicImports/countryHistory'
import getCountryCulture from '../../includes/countryTopicImports/countryCulture'
import getCountryGovernment from '../../includes/countryTopicImports/countryGovernment'
import getCountryEconomy from '../../includes/countryTopicImports/countryEconomy'
import getCountryReligion from '../../includes/countryTopicImports/countryReligion'
import getCountryDemographics from '../../includes/countryTopicImports/countryDemographics'
import getCountryGeography from '../../includes/countryTopicImports/countryGeography'
//countryFlags is an object which keys are a the path to the image. .glob is a vite feature that tells the program to glob up all the files in that path and imports them
const countryFlags = import.meta.glob(
	'../../../assets/countryPageFlags/svgs/*.svg',
	{
		eager: true,
	},
)

export default function countryPage(bar: string | undefined) {
	const { id } = useParams<{ id: string }>()

	const [state, setState] = useState<CountryData>({
		name: '',
		nativeName: '',
		region: '',
		alpha2Code: 0,
		alpha3Code: 0,
		subregion: '',
		capital: '',
		population: 0,
		timezones: '',
		demonym: '',
		currencies: '',
		independent: true,
		//population has a '?' so its not required
	})

	// BELOW THIS COMMENT Stores the data from the countryTopicData includes into state
	const [culture, setCulture] = useState('')
	const [demographics, setDemographics] = useState('')
	const [economy, setEconomy] = useState('')
	const [government, setGovernment] = useState('')
	const [history, setHistory] = useState('')
	const [religion, setReligion] = useState('')
	const [geography, setGeography] = useState('')

	// ABOVE THIS COMMENT Stores the data from the countryTopicData includes into state

	// Declaring several async functions that take the id of the current page as a param. Within the async functions we create a variable called new... that awaits the response the respective countryTopicImports includes file. We then call the set... functions and pass them the variable from the line above
	const showHistory = async (id: string) => {
		const newHistory = await getCountryHistory(id)
		setHistory(newHistory)
	}

	const showCulture = async (id: string) => {
		const newCulture = await getCountryCulture(id)
		setCulture(newCulture)
	}

	const showEconomy = async (id: string) => {
		const newEconomy = await getCountryEconomy(id)
		setEconomy(newEconomy)
	}

	const showGeography = async (id: string) => {
		const newGeography = await getCountryGeography(id)
		setGeography(newGeography)
	}
	const showGovernment = async (id: string) => {
		const newGovernment = await getCountryGovernment(id)
		setGovernment(newGovernment)
	}

	const showReligion = async (id: string) => {
		const newReligion = await getCountryReligion(id)
		setReligion(newReligion)
	}

	const showDemographics = async (id: string) => {
		const newDemographics = await getCountryDemographics(id)
		setDemographics(newDemographics)
	}

	// CALLING THE show... FUNCTIONS AND PASSING THE ID OF THE THE CURRENT COUNTRY PAGE THAT  THE USER IS ON
	showCulture(id!)
	showDemographics(id!)
	showEconomy(id!)
	showGeography(id!)
	showGovernment(id!)
	showHistory(id!)
	showReligion(id!)

	//a '!' after a variable means this is definitely defined
	const fetchData = useCallback(() => getCountry(id!).then(setState), [])
	useEffect(() => {
		fetchData()
	}, [fetchData])

	// function to make and display dynamic <img> alt attributes for each country this will show in the case that an image of a flag doesn't load
	const dynamicImgAttribute = () => {
		const foo = document.getElementById('countryInfoFlag')
		if (foo != null) {
			foo.setAttribute('alt', `The Flag of ${state.name}`)
			const bar: any = foo.attributes[1]
		}
	}
	dynamicImgAttribute()

	const FoundFlag = Object.entries(countryFlags).find(([file_path, url]) => {
		const shortPath = file_path.replace(
			'../../../assets/countryPageFlags/svgs/',
			'',
		)

		return shortPath.startsWith(id!)
	}) as any //using "as any" is known as type casting
	const CurrentCountryFlag = FoundFlag ? FoundFlag[1].default : null

	return (
		<div className="overallCountryInfoContainer">
			<div className="countryInfo">
				<h1 id="countryEnglishName">{state.name}</h1>
				<h3 id="countryNativeName">a.k.a {state.nativeName}</h3>
			</div>

			{/* TOPICS */}

			{/* Geography */}
			<div id="topic">
				<section className="topic" id="geography">
					<h3>Geography</h3>
					<p>{geography}</p>
				</section>

				{/* History */}
				<section className="topic" id="history">
					<h3>History</h3>
					<p>{history}</p>
				</section>

				{/* Demographics */}
				<section className="topic" id="demographics">
					<h3>Demographics</h3>
					<p>{demographics}</p>
				</section>

				{/* Culture */}
				<section className="topic" id="culture">
					<h3>Culture</h3>
					<p>{culture}</p>
				</section>

				{/* Religion */}
				<section className="topic" id="religion">
					<h3>Religion</h3>
					<p>{religion}</p>
				</section>

				{/* Government */}
				<section className="topic" id="government">
					<h3>Government</h3>
					<p>{government}</p>
				</section>

				{/* Economy */}
				<section className="topic" id="economy">
					<h3>Economy</h3>
					<p>{economy}</p>
				</section>
			</div>

			{/* Start of information right side of screen */}
			<div className="metaDataContainer">
				<img id="countryInfoFlag" src={CurrentCountryFlag} alt={bar} />
				<p className="genInfoRegion">
					<u>{state.name}</u> is located in the
					<u>{state.subregion}</u> subregion of the <u>{state.region}</u>
					<br />
					<p className="genInfoPopulation">
						The Population of <u>{state.name}</u> is is approx.
						<u>{state.population}</u>
					</p>
				</p>
				<p className="genInfoISOCodes ">
					<u>{state.name}'s</u> 2 Digit Alpha code is:
					<u>{state.alpha2Code}</u> and it's 3 Digit Alpha code is:
					<u>{state.alpha3Code}</u>
				</p>

				{/* Start of weather component from '../../components/CountryWeather.tsx' */}
				<CountryWeather capital={state.capital} name={state.name} />
				<p className="genInfoCurrency">
					The National Currency of {state.name} Is: <br />
					The <u>{state.name}</u> Represented As:
				</p>
				{/* End of weather component from '../../components/CountryWeather.tsx' */}

				<p className="genInfoTimezones">
					Timezones: <u>{state.timezones}</u>
				</p>
			</div>
		</div>
	)
}

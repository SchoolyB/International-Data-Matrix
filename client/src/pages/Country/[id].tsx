import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CountryData } from '../../types/countryData'
import { getCountry } from '../../includes/countries'
import CountryWeather from '../../components/CountryWeather'
import getCountryTopic from '../../includes/countryTopicImports/countryTopics'
import MarkdownIt from 'markdown-it'

// USING VITE'S GLOB METHOD TO STORE IMAGES FROM FOLDERS INTO VARIABLES
const simpleCountryMaps = import.meta.glob('../../../assets/simpleMaps/*.png', {
	eager: true,
})

const locatorCountryMap = import.meta.glob(
	'../../../assets/locatorMaps/*.png',
	{
		eager: true,
	},
)

export default function countryPage(
	simpleMapAlter: string | undefined,
	locatorMapAlter: string | undefined,
) {
	const { id } = useParams<{ id: string }>()
	const md = new MarkdownIt()
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
		currencies: [],
		flags: {
			svg: '',
			png: '',
		},
		//population has a '?' so its not required
	})

	const [error, setError] = useState<any>(null)

	//A Record is a built in type that allows you to create an object with a key and value
	const [topics, setTopics] = useState<Record<string, string>>({
		history: '',
		culture: '',
		government: '',
		economy: '',
		geography: '',
		religion: '',
		demographics: '',
	})
	// Declaring several async functions that take the id of the current page as a param. Within the async functions we create a variable called new... that awaits the response the respective countryTopicImports includes file. We then call the set... functions and pass them the variable from the line above
	const showAllTopics = async () => {
		for (const topic of Object.keys(topics)) {
			const data = await getCountryTopic(id!, topic).catch(
				() => 'No Data Found', //if there is an error, fall back to 'No Data Found'
			)
			topics[topic] = md.render(data || '#### - Data Not Found -') //if data is undefined, fall back to 'No Data Found'
		}
		setTopics({ ...topics })
	}

	// CALLING THE show...FUNCTIONS AND PASSING THE ID OF THE THE CURRENT COUNTRY PAGE THAT THE USER IS ON

	//a '!' after a variable means this is definitely defined
	const fetchData = useCallback(
		() => getCountry(id!).then(setState, setError).then(showAllTopics),
		[],
	)
	useEffect(() => {
		fetchData()
	}, [fetchData])

	// A function that dynamically generates all the alt attributes of images on a country page
	const setDynamicAltAttributes = () => {
		const newSimpleMap = document.getElementById('simpleMap')
		if (newSimpleMap != null) {
			newSimpleMap.setAttribute('alt', `A map of ${state.name}`)
			const MapAlter: any = newSimpleMap.attributes[1]
		}
		const newLocatorMap = document.getElementById('locatorMap')
		if (newLocatorMap != null) {
			newLocatorMap.setAttribute('alt', `A locator map of ${state.name}`)
			const locatorMapAlter: any = newLocatorMap.attributes[1]
		}
	}
	setDynamicAltAttributes()

	//function that finds a simple map image based off the current url
	const foundSimpleMap = Object.entries(simpleCountryMaps).find(
		([file_path, url]) => {
			const simpleMapPath = file_path.replace('../../../assets/simpleMaps/', '')

			return simpleMapPath.startsWith(id!)
		},
	) as any
	const CurrentCountrySimpleMap = foundSimpleMap
		? foundSimpleMap[1].default
		: null

	//function that finds a locator map image based off the current url
	const foundLocatorMap = Object.entries(locatorCountryMap).find(
		([file_path, url]) => {
			const locatorMapPath = file_path.replace(
				'../../../assets/locatorMaps/',
				'',
			)
			return locatorMapPath.startsWith(id!)
		},
	) as any

	const CurrentCountryLocatorMap = foundLocatorMap
		? foundLocatorMap[1].default
		: null

	// extracts the object from the currency array
	const currencyInfo = state.currencies[0]
	// extract key value from flags obj
	const flagsInfo = state.flags.svg
	// set 'alt' attribute for each flag
	const flagAltValue = `The Flag of ${state.name}`

	if (error) {
		return (
			<div>
				<h1 id="pageNotFound">404 - This Page Could Not Be Found</h1>
			</div>
		)
	}

	return (
		// COUNTRY HEADER INFO
		<div className="overallCountryInfoContainer">
			<div className="countryInfo">
				<h1 id="countryEnglishName">{state.name}</h1>
				<h4 id="countryNativeName">{state.nativeName}</h4>
			</div>

			{/* Start of information right side of screen */}
			<div className="metaDataContainer">
				<div className="countryFlagsAndMaps">
					<img
						id="countryInfoFlag"
						src={state.flags.svg}
						alt={flagAltValue}
					/>
					<img
						id="simpleMap"
						src={CurrentCountrySimpleMap}
						alt={simpleMapAlter}
					/>
					<img
						id="locatorMap"
						src={CurrentCountryLocatorMap}
						alt={locatorMapAlter}
					/>
				</div>
				<div className="genInfoRegion">
					<u>{state.name}</u> is located in the
					<u>{state.subregion}</u> subregion of <u>{state.region}</u>
					<br />
					<p className="genInfoPopulation">
						The Population of <u>{state.name}</u> is is approx.
						<u>{state.population}</u>
					</p>
				</div>
				<p className="genInfoISOCodes ">
					<u>{state.name}'s</u> 2 Digit Alpha code is:
					<u>{state.alpha2Code}</u> and it's 3 Digit Alpha code is:
					<u>{state.alpha3Code}</u>
				</p>

				{/* Start of weather component from '../../components/CountryWeather.tsx' */}
				<CountryWeather
					capital={state.capital}
					name={state.name}
				/>
				{/* End of weather component from '../../components/CountryWeather.tsx' */}

				<p className="genInfoCurrency">
					The National Currency of {state.name} Is: <br />
					The <u>{currencyInfo?.name}</u> Represented As:
					<u>
						{currencyInfo?.symbol} and <u>{currencyInfo?.code}</u>
					</u>
					<br />
				</p>
				<p className="genInfoTimezones">
					Timezones:
					<br />
					<u>{state.timezones}</u>
				</p>
			</div>

			{/* TOPICS */}

			{/* Geography */}
			<div id="topic">
				<section
					className="topic"
					id="geography"
				>
					<h3>Geography</h3>
					<p dangerouslySetInnerHTML={{ __html: topics.geography }}></p>
				</section>

				{/* History */}
				<section
					className="topic"
					id="history"
				>
					<h3>History</h3>
					<p dangerouslySetInnerHTML={{ __html: topics.history }}></p>
				</section>

				{/* Demographics */}
				<section
					className="topic"
					id="demographics"
				>
					<h3>Demographics</h3>
					<p dangerouslySetInnerHTML={{ __html: topics.demographics }}></p>
				</section>

				{/* Culture */}
				<section
					className="topic"
					id="culture"
				>
					<h3>Culture</h3>
					<p dangerouslySetInnerHTML={{ __html: topics.culture }}></p>
				</section>

				{/* Religion */}
				<section
					className="topic"
					id="religion"
				>
					<h3>Religion</h3>
					<p dangerouslySetInnerHTML={{ __html: topics.religion }}></p>
				</section>
				{/* Government */}
				<section
					className="topic"
					id="government"
				>
					<h3>Government</h3>
					<p dangerouslySetInnerHTML={{ __html: topics.government }}></p>
				</section>

				{/* Economy */}
				<section
					className="topic"
					id="economy"
				>
					<h3>Economy</h3>
					<p dangerouslySetInnerHTML={{ __html: topics.economy }}></p>
				</section>
			</div>
		</div>
	)
}

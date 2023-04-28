import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CountryData } from '../../types/countryData'
import { WeatherData } from '../../types/weatherData'
import { getCountry } from '../../includes/countries'
import { getWeather } from '../../includes/openWeather'
import { countrySelectionData } from '../../types/countrySelectionData'
import CountryWeather from '../../components/CountryWeather'
'../../../public/assets/backgroundImage/svgs/*.svg'
//countryFlags is an object which keys are a the path to the image. .glob is a vite feature that tells the program to glob up all the files in that path and imports them
const countryFlags = import.meta.glob(
	'../../../assets/countryPageFlags/svgs/*.svg',
	{
		eager: true,
	},
)

const countryTopic = import.meta.glob(
	'../../../public/countryTopics/txts/*txt',
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

	//a '!' after a variable means this is definitely defined
	const fetchData = useCallback(() => getCountry(id!).then(setState), [])
	useEffect(() => {
		fetchData()
	}, [fetchData])

	// function to make and display dynamic <img> alt attributes for each country
	const dynamicImgAttribute = () => {
		const foo = document.getElementById('countryInfoFlag')
		if (foo != null) {
			foo.setAttribute('alt', `The Flag of ${state.name}`)
			const bar: any = foo.attributes[1]
		}
	}

	dynamicImgAttribute()
	// console.log(state.currencies[0])

	const FoundFlag = Object.entries(countryFlags).find(([file_path, url]) => {
		const shortPath = file_path.replace(
			'../../../assets/countryPageFlags/svgs/',
			'',
		)
		return shortPath.startsWith(id!)
	}) as any //using "as any" is known as type casting
	const CurrentCountryFlag = FoundFlag ? FoundFlag[1].default : null

	const FoundTopic = Object.entries(countryTopic).find(([file_path, url]) => {
		const shortPath = file_path.replace(
			'../../../assets/countryTopics/txts',
			'',
		)
		return shortPath.startsWith(id!)
	}) as any //using "as any" is known as type casting
	const CurrentCountryTopic = FoundTopic ? FoundTopic[1].default : null

	return (
		<div className="overallCountryInfoContainer">
			<div className="countryInfo">
				<h1 id="countryEnglishName">{state.name}</h1>
				<h3 id="countryNativeName">a.k.a {state.nativeName}</h3>
			</div>
			{/* TOPICS */}
			<div id="topic">
				<section className="topic">
					<h3>Geography</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Perferendis, quam magni? Neque iste distinctio provident ab eligendi
						ut quas magni eos alias veniam, expedita veritatis! Ab commodi totam
						quod aliquid.
					</p>
				</section>
				<section className="topic">
					<h3>History</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iusto
						eius ratione nisi placeat obcaecati. Accusamus cupiditate inventore
						commodi illo, modi quia! Incidunt dolorem delectus magni
						praesentium, sit ipsum dicta.
					</p>
				</section>
				<section className="topic">
					<h3>Demographics</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
						consequuntur accusantium omnis magni, soluta eos doloremque
						inventore error quos sed, recusandae sunt incidunt ullam repudiandae
						tenetur voluptatibus iure? Excepturi, eum.
					</p>
				</section>
				<section className="topic">
					<h3>Culture</h3>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
						deleniti libero beatae aliquid harum corporis non nobis eum nostrum
						repellendus voluptatem rem, debitis vel! Voluptas omnis sunt
						doloremque commodi culpa!
					</p>
				</section>
				<section className="topic">
					<h3>Religion</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
						sed nobis, quos vero odio debitis harum cum dolores voluptatum
						aperiam aliquid dolore, mollitia aut, aliquam qui earum! Libero,
						laborum veritatis?
					</p>
				</section>
				<section className="topic">
					<h3>Current Events</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
						esse sunt harum ducimus error nostrum id iure ex commodi quaerat
						perspiciatis necessitatibus, neque inventore, doloribus quis
						nesciunt excepturi animi cumque.
					</p>
				</section>
			</div>

			<div className="metaDataContainer">
				<img id="countryInfoFlag" src={CurrentCountryFlag} alt={bar} />
				<p className="genInfoRegion">
					<u>{state.name}</u> is located in the
					<u>{state.subregion}</u> subregion of the <u>{state.region}</u> region{' '}
					<br />
					The capital of <u>{state.name}</u> is
				</p>
				<CountryWeather capital={state.capital} name={state.name} />

				<p className="genInfoPopulation">
					The Population of <u>{state.name}</u> is is approx.
					<u>{state.population}</u>
				</p>
				<p className="genInfoISOCodes ">
					<u>{state.name}'s</u> 2 Digit Alpha code is:
					<u>{state.alpha2Code}</u>
					<br />
					<u>{state.name}'s</u> 3 Digit Alpha code is:
					<u>{state.alpha3Code}</u>
				</p>
				<p className="genInfoCurrency">
					The National Currency of {state.name} Is: <br />
					The <u>{state.name}</u> Represented As:
				</p>
				<p className="genInfoTimezones">
					Timezones: <u>{state.timezones}</u>
				</p>
			</div>
		</div>
	)
}

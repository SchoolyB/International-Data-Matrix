//TODO: add more properties from country object
//types need to be in pascal case
//an interface is a description of an object
export interface CountryData {
	name: string
	alpha2Code: number
	alpha3Code: number
	nativeName: string
	region: string
	subregion: string
  capital: string
  population?: number //the '?' means that the property population is possibly undefined
  timezones: string
  demonym: string
  currencies: string
  independent: boolean
}

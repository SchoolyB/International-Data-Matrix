export interface comparisonData {
  name: string // name of country
  flag: string // url of flag
  flagAlt: string // alt text for flag
  population: number // population
  number_of_timezones: number // number of timezones a country has
  timezones: string[] // the different timezones //todo - could this be one string/an array of strings?
  area: string // todo - area in km^2 or mi^2...undecided
  year_founded: number // year country was founded (if applicable)
  year_of_independence: number // year country gained independence (if applicable)
  government_type: string // type of government
  link: string // link to country International Data Matrix page
}

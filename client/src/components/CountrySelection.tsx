import React, { useState, useCallback, useEffect} from 'react'
import { getCountrySelectionData } from '../includes/countrySelectionData'
import { countrySelectionData } from '../types/countrySelectionData'




export default function CountrySelection  () {

  const [countrySelectionData, setSelectionData] = useState<countrySelectionData>({
    Area: 0,
    Population: 0,
    Continent: '',
    Official_Name: ''
  })


  return (
    <div>CountrySelection</div>
  )
}

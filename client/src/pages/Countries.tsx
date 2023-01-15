
import React from 'react'
import * as flags from "../../assets/";

export default function Countries() {
  return (
    <div>

  <div id="container">
    ${state.filteredData
      .map(country => {
          <div id="overAllContainer">
            <div className="country" id="${country._id}">
              <h3 className="countryHeading">${country.name}</h3>
              <a href="${country.link}">
                <img
                  className="flag"
                  src={flags[country.name]}
                  alt={country.flagAlt}
                />
              </a>
              <div className="data">
                <p>${country.population}</p>
                <p>${country.gdp}</p>
                <p>${country.landMass}</p>
                <p></p>
              </div>
            </div>
          </div>
      })
      .join("")}
  </div>




    </div>
  )
}

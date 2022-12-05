import html from "html-literal";
import { countryInfo } from "../store/CountryData/homeScreenCountryData";

const createCountry = countryObj => {
  //dereferencing
  const {
    countryClass,
    countryID,
    countryName,
    countryLink,
    countryFlag,
    countryFlagAltText,
    countryPopulation, //correct later possibly use data from API
    countryGrossDomesticProduct,
    countryLandMass
  } = countryObj;

  return `

<div id="overAllContainer">
    <div class= "country" id="${countryID}">
    <h3 class="countryHeading">${countryName}</h3>
    <a href="${countryLink}">
      <img
        class="flag"
        src=${countryFlag}
        alt=${countryFlagAltText}
      />
    </a>
      <div class="data">
        <p>Population: ${countryPopulation}</p>
        <p> ${countryGrossDomesticProduct} </p>
        <p>Land Mass: ${countryLandMass}</p>
        <p>
      </div>
  </div>
</div>


    `;
};

let countryFilter = "";

const params = window.location.search;
const getParams = new URLSearchParams(params);

if (params) {
  countryFilter = getParams.get("countryFilter").toUpperCase();
  console.log(`paramFilter: ${countryFilter}`);
}

let countriesArr = countryInfo;

if (countryFilter) {
  countriesArr = countryInfo.filter(country =>
    country.countryName.toUpperCase().includes(countryFilter)
  );
  console.log(countriesArr);
}

const render = countriesArr.map(country => createCountry(country));

export default () =>
  html`
    <div id="container">
      ${render}
    </div>
  `;

// everything below this line is JS for the NAV menu


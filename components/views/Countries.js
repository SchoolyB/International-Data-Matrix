import html from "html-literal";
import * as flags from "../../assets/images";

export default state => html`
  <div id="container">
    ${state.filteredData
      .map(country => {
        return html`
          <div id="overAllContainer">
            <div class="country" id="${country._id}">
              <h3 class="countryHeading">${country.name}</h3>
              <a href="${country.link}">
                <img
                  class="flag"
                  src=${flags[country.name]}
                  alt=${country.flagAlt}
                />
              </a>
              <div class="data">
                <p>${country.gdp}</p>
                <p>${country.landMass}</p>
                <p></p>
              </div>
            </div>
          </div>
        `;
      })
      .join("")}
  </div>
`;

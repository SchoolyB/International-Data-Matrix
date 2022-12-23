import html from "html-literal";
import flag from "../../assets/images/grc.png";
export default state => html`
  <div class="countryInfo" id="greeceInfo">
    <div class="metaDataContainer">
      <img
        class="shortCountryInfoFlag"
        id="greeceInfoFlag"
        src=${flag}
        alt="The
        Flag
        of
        Greece"
      />
      <div class="genInformationContainer">
        <p class="genInfoRegion">
          Region: ${state.info.region}<br />
          Subregion: ${state.info.subregion}
        </p>
        <p class="genInfoSubRegion"></p>
        <p class="genInfoCapitolCity">
          The Capitol of ${state.info.name} is: ${state.info.Capital}
        </p>

        <p>National Population: ${state.info.population} approx.</p>
        <p class="genInfoISOCodes ">
          ${state.info.name}'s Alpha 2 code is: ${state.info.Alpha2Code}<br />
          ${state.info.name}'s Alpha 3 code is: ${state.info.Alpha3Code}
        </p>
        <p class="genInfoCurrency">
          The Currency of ${state.info.name} is ${state.info.Currency}
        </p>
        <p class="genInfoCallingCodes">
          ${state.info.name}'s calling code is ${state.info.callingCodes}
        </p>
        <p class="genInfoTimezones">
          Timezones: ${state.info.timezones}
        </p>
      </div>
    </div>
    <div>
      <h1 class="countryNameHeader">${state.info.name}</h1>
      <h2 class="nativeName">${state.info.nativeName}</h2>
    </div>
    <section class="history topic" id="greeceHistory">
      <h3>
        History
      </h3>
      <p>
        ${state.history}
      </p>
    </section>

    <section class="government, topic" id="greeceGovernment">
      <h3>
        Government
      </h3>
      <p>
        ${state.government}
      </p>
    </section>
    <section class="economy topic" id="greeceEconomy">
      <h3>
        Economy
      </h3>
      <p>TEST</p>
    </section>

    <section class="demographics topic" id="greeceDemographics">
      <h3>
        Demographics
      </h3>
      <p>
        ${state.demographics}
      </p>
    </section>

    <section class="culture topic" id="greeceCulture">
      <h3>
        Culture
      </h3>
      <p>
        ${state.culture}
      </p>
    </section>

    <section class="currentEvents topic" id="greeceCurrentEvents">
      <h3>
        Current Events
      </h3>
      <h6>
        ${state.headlines[0]}
      </h6>
      <h6>
        ${state.headlines[1]}
      </h6>
      <h6>
        ${state.headlines[2]}
      </h6>
      <h6>
        ${JSON.stringify(state.headlines[3])}
      </h6>
    </section>
  </div>
`;

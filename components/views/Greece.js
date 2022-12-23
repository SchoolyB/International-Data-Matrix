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
        <p class="genInfoISOCodes">ISO CODE PLACEHOLDER</p>
        <p class="genInfoCapitolCity">CAPITOL CITY PLACEHOLDER</p>
        <p class="genInfoCurrency">CURRENCY PLACEHOLDER</p>
      </div>
    </div>
    <div>
      <h1 class="countryNameHeader">Greece</h1>
      <h2 class="nativeName">Ελλάδα</h2>
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
      <p>
        ${state.currentEvents}
      </p>
    </section>
  </div>
`;

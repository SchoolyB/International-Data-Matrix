import html from "html-literal";
import flag from "../../assets/images/usa.png";
export default state => html`
  <div class="countryInfo" id="usaInfo">
    <div class="metaDataContainer">
      <img
        class="longCountryInfoFlag"
        id="usaInfoFlag"
        src=${flag}
        alt="The
        Flag
        of
        USA"
      />
      <div class="genInformationContainer">
        <p class="genInfoISOCodes">ISO CODE PLACEHOLDER</p>
        <p class="genInfoCapitolCity">CAPITOL CITY PLACEHOLDER</p>
        <p class="genInfoCurrency">CURRENCY PLACEHOLDER</p>
      </div>
    </div>

    <div>
      <h1 class="countryNameHeader">The United States of America</h1>
      <h2 class="nativeName">The United States of America</h2>
    </div>
    <section class="history topic" id="usaHistory">
      <h3>
        History
      </h3>
      <p>
        ${state.history}
      </p>
    </section>

    <section class="government, topic" id="usaGovernment">
      <h3>
        Government
      </h3>
      <p>
        ${state.history}
      </p>
    </section>
    <section class="economy topic" id="usaEconomy">
      <h3>
        Economy
      </h3>
      <p>
        ${state.economy}
      </p>
    </section>

    <section class="demographics topic" id="usaDemographics">
      <h3>
        Demographics
      </h3>
      <p>
        ${state.demographics}
      </p>
    </section>

    <section class="culture topic" id="usaCulture">
      <h3>
        Culture
      </h3>
      <p>
        ${state.culture}
      </p>
    </section>

    <section class="currentEvents topic" id="usaCurrentEvents">
      <h3>
        Current Events
      </h3>
      <p>
        ${state.currentEvents}
      </p>
    </section>
  </div>
`;

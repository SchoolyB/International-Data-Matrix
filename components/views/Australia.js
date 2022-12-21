import html from "html-literal";
import flag from "../../assets/images/aus.png";
export default state => html`
  <div class="countryInfo" id="australiaInfo">
    <div class="metaDataContainer">
      <img
        class="longCountryInfoFlag"
        id="australiaInfoFlag"
        src=${flag}
        alt="The
        Flag
        of
        Australia"
      />
      <div class="genInformationContainer">
        <p class="genInfoISOCodes">ISO CODE PLACEHOLDER</p>
        <p class="genInfoCapitolCity">CAPITOL CITY PLACEHOLDER</p>
        <p class="genInfoCurrency">CURRENCY PLACEHOLDER</p>
      </div>
    </div>
    <div>
      <h1 class="countryNameHeader">Australia</h1>
      <h2 class="nativeName">Australia</h2>
    </div>
    <section class="history topic" id="australiaHistory">
      <h3>
        History
      </h3>
      <p>
        ${state.history}
        <!-- space -->
      </p>
    </section>

    <section class="government, topic" id="australiaGovernment">
      <h3>
        Government
      </h3>
      <p>
        ${state.government}
      </p>
    </section>
    <section class="economy topic" id="australiaEconomy">
      <h3>
        Economy
      </h3>
      <p>
        ${state.economy}
      </p>
    </section>

    <section class="demographics topic" id="australiaDemographics">
      <h3>
        Demographics
      </h3>
      <p>
        ${state.demographics}
      </p>
    </section>

    <section class="culture topic" id="australiaCulture">
      <h3>
        Culture
      </h3>
      <p>
        ${state.culture}
      </p>
    </section>

    <section class="currentEvents topic" id="australiaCurrentEvents">
      <h3>Current Events</h3>
      <p>
        ${state.currentEvents}
      </p>
    </section>
  </div>
`;

import html from "html-literal";
import flag from "../../assets/images/mar.png";
export default state => html`
  <div class="countryInfo" id="moroccoInfo">
    <div class="metaDataContainer">
      <img
        class="shortCountryInfoFlag"
        id="moroccoInfoFlag"
        src=${flag}
        alt="The
        Flag
        of
        Morocco"
      />
      <div class="genInformationContainer">
        <p class="genInfoISOCodes">ISO CODE PLACEHOLDER</p>
        <p class="genInfoCapitolCity">CAPITOL CITY PLACEHOLDER</p>
        <p class="genInfoCurrency">CURRENCY PLACEHOLDER</p>
      </div>
    </div>
    <div>
      <h1 class="countryNameHeader">Morocco</h1>
      <h2 class="nativeName">المملكة المغربية</h2>
    </div>
    <section class="history topic" id="moroccoHistory">
      <h3>
        History
      </h3>
      <p>
        ${state.history}
      </p>
    </section>

    <section class="government, topic" id="moroccoGovernment">
      <h3>
        Government
      </h3>
      <p>
        ${state.government}
      </p>
    </section>
    <section class="economy topic" id="moroccoEconomy">
      <h3>
        Economy
      </h3>
      <p>
        ${state.economy}
      </p>
    </section>

    <section class="demographics topic" id="moroccoDemographics">
      <h3>
        Demographics
      </h3>
      <p>
        ${state.demographics}
      </p>
    </section>

    <section class="culture topic" id="moroccoCulture">
      <h3>
        Culture
      </h3>
      <p>
        ${state.culture}
      </p>
    </section>

    <section class="currentEvents topic" id="moroccoCurrentEvents">
      <h3>
        Current Events
      </h3>
      <p>
        ${state.currentEvents}
      </p>
    </section>
  </div>
`;

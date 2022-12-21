import html from "html-literal";
import flag from "../../assets/images/blr.png";
export default state => html`
  <div class="countryInfo" id="belarusInfo">
    <div class="metaDataContainer">
      <img
        class="longCountryInfoFlag"
        id="belarusInfoFlag"
        src=${flag}
        alt="The
        Flag
        of
        Belarus"
      />
      <div class="genInformationContainer">
        <p class="genInfoISOCodes">ISO CODE PLACEHOLDER</p>
        <p class="genInfoCapitolCity">CAPITOL CITY PLACEHOLDER</p>
        <p class="genInfoCurrency">CURRENCY PLACEHOLDER</p>
      </div>
    </div>
    <div>
      <h1 class="countryNameHeader">Belarus</h1>
      <h2 class="nativeName">Рэспубліка Беларусь</h2>
    </div>
    <section class="history topic" id="belarusHistory">
      <h3>
        History
      </h3>
      <p>
        ${state.history}
      </p>
    </section>

    <section class="government, topic" id="belarusGovernment">
      <h3>
        Government
      </h3>
      <p>
        ${state.government}
      </p>
    </section>
    <section class="economy topic" id="belarusEconomy">
      <h3>
        Economy
      </h3>
      <p>
        ${state.economy}
      </p>
    </section>

    <section class="demographics topic" id="belarusDemographics">
      <h3>
        Demographics
      </h3>
      <p>${state.demographics}</p>
    </section>

    <section class="culture topic" id="belarusCulture">
      <h3>
        Culture
      </h3>
      <p>
        ${state.culture}
      </p>
    </section>

    <section class="currentEvents topic" id="belarusCurrentEvents">
      <h3>
        Current Events
      </h3>
      <p>
        ${state.currentEvents}
      </p>
    </section>
  </div>
`;

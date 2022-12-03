import html from "html-literal";
import flag from "../../assets/images/flag-of-Sudan.png";
export default () => html`
  <div class="countryInfo" id="sudanInfo">
    <img
      class="countryInfoFlag"
      id="sudanInfoFlag"
      src=${flag}
      alt="The
      Flag
      of
      Sudan"
    />
    <h1>Sudan</h1>

    <section class="history" id="sudanHistory">
      <h3>
        History
      </h3>
      <p></p>
    </section>

    <section class="government" id="sudanGovernment">
      <h3>
        Government
      </h3>
      <p></p>
    </section>
    <section class="economy" id="sudanEconomy">
      <h3>
        Economy
      </h3>
      <p></p>
    </section>

    <section class="demographics" id="sudanDemographics">
      <h3>
        Demographics
      </h3>
      <p></p>
    </section>

    <section class="culture" id="sudanCulture">
      <h3>
        Culture
      </h3>
      <p></p>
    </section>

    <section class="currentEvents" id="sudanCurrentEvents">
      <h3>
        Current Events
      </h3>
      <p></p>
    </section>
  </div>
`;

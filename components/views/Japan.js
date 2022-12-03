import html from "html-literal";
import flag from "../../assets/images/flag-of-Japan.png";
export default () => html`
  <div class="countryInfo" id="japanInfo">
    <img
      class="countryInfoFlag"
      id="japanInfoFlag"
      src=${flag}
      alt="The Flag
    of Japan"
    />
    <h1>Japan</h1>
    <section class="history" id="japanHistory">
      <h3>
        History
      </h3>
      <p></p>
    </section>

    <section class="government" id="japanGovernment">
      <h3>
        Government
      </h3>
      <p></p>
    </section>
    <section class="economy" id="japanEconomy">
      <h3>
        Economy
      </h3>
      <p></p>
    </section>

    <section class="demographics" id="japanDemographics">
      <h3>
        Demographics
      </h3>
      <p></p>
    </section>

    <section class="culture" id="japanCulture">
      <h3>
        Culture
      </h3>
      <p></p>
    </section>

    <section class="currentEvents" id="japanCurrentEvents">
      <h3>
        Current Events
      </h3>
      <p></p>
    </section>
  </div>
`;

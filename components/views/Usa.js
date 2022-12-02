import html from "html-literal";
import flag from "../../assets/images/flag-of-United-States-of-America.png";
export default () => html`
  <div class="countryInfo" id="moroccoInfo">
    <img
      class="countryInfoFlag"
      id="usaInfoFlag"
      src=${flag}
      alt="The
      Flag
      of
      The
      United
      States
      of
      America"
    />
    <h1>The United States Of America</h1>

    <section class="history" id="usaHistory">
      <h3>
        History
      </h3>
      <p></p>
    </section>

    <section class="government" id="usaGovernment">
      <h3>
        Government
      </h3>
      <p></p>
    </section>
    <section class="economy" id="usaEconomy">
      <h3>
        Economy
      </h3>
      <p></p>
    </section>

    <section class="demographics" id="usaDemographics">
      <h3>
        Demographics
      </h3>
      <p></p>
    </section>

    <section class="culture" id="usaCulture">
      <h3>
        Culture
      </h3>
      <p></p>
    </section>

    <section class="currentEvents" id="usaCurrentEvents">
      <h3>
        Current Events
      </h3>
      <p></p>
    </section>
  </div>
`;

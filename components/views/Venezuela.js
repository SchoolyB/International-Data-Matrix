import html from "html-literal";
import flag from "../../assets/images/flag-of-Venezuela.png";
export default () => html`
  <div class="countryInfo" id="venezuelaInfo">
    <img
      class="countryInfoFlag"
      id="venezuelaInfoFlag"
      src=${flag}
      alt="The
      Flag
      of
      Venezuela"
    />
    <h1>Venezuela</h1>

    <section class="history" id="venezuelaHistory">
      <h3>
        History
      </h3>
      <p></p>
    </section>

    <section class="government" id="venezuelaGovernment">
      <h3>
        Government
      </h3>
      <p></p>
    </section>
    <section class="economy" id="venezuelaEconomy">
      <h3>
        Economy
      </h3>
      <p></p>
    </section>

    <section class="demographics" id="venezuelaDemographics">
      <h3>
        Demographics
      </h3>
      <p></p>
    </section>

    <section class="culture" id="venezuelaCulture">
      <h3>
        Culture
      </h3>
      <p></p>
    </section>

    <section class="currentEvents" id="venezuelaCurrentEvents">
      <h3>
        Current Events
      </h3>
      <p></p>
    </section>
  </div>
`;

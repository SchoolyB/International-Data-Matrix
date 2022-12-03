import html from "html-literal";
import flag from "../../assets/images/flag-of-Greece.png";
export default () => html`
  <div class="countryInfo" id="greeceInfo">
    <img
      class="countryInfoFlag"
      id="greeceInfoFlag"
      src=${flag}
      alt="The
      Flag
      of
      Greece"
    />
    <h1>Greece</h1>

    <section class="history" id="greeceHistory">
      <h3>
        History
      </h3>
      <p></p>
    </section>

    <section class="government" id="greeceGovernment">
      <h3>
        Government
      </h3>
      <p></p>
    </section>
    <section class="economy" id="greeceEconomy">
      <h3>
        Economy
      </h3>
      <p></p>
    </section>

    <section class="demographics" id="greeceDemographics">
      <h3>
        Demographics
      </h3>
      <p></p>
    </section>

    <section class="culture" id="greeceCulture">
      <h3>
        Culture
      </h3>
      <p></p>
    </section>

    <section class="currentEvents" id="greeceCurrentEvents">
      <h3>
        Current Events
      </h3>
      <p></p>
    </section>
  </div>
`;

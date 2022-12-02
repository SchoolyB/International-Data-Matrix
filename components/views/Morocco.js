import html from "html-literal";
import flag from "../../assets/images/flag-of-Morocco.png";
export default () => html`
  <div class="countryInfo" id="moroccoInfo">
    <img
      class="countryInfoFlag"
      id="moroccoInfoFlag"
      src=${flag}
      alt="The
      Flag
      of
      Morocco"
    />
    <h1>Morocco | المملكة المغربية</h1>
    <section class="history" id="moroccoHistory">
      <h3>
        History
      </h3>
      <p></p>
    </section>

    <section class="government" id="moroccoGovernment">
      <h3>
        Government
      </h3>
      <p></p>
    </section>
    <section class="economy" id="moroccoEconomy">
      <h3>
        Economy
      </h3>
      <p></p>
    </section>

    <section class="demographics" id="moroccoDemographics">
      <h3>
        Demographics
      </h3>
      <p></p>
    </section>

    <section class="culture" id="moroccoCulture">
      <h3>
        Culture
      </h3>
      <p></p>
    </section>

    <section class="currentEvents" id="moroccoCurrentEvents">
      <h3>
        Current Events
      </h3>
      <p></p>
    </section>
  </div>
`;

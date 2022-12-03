import html from "html-literal";
import flag from "../../assets/images/flag-of-Australia.png";
export default () => html`
  <div class="countryInfo" id="australiaInfo">
    <img
      class="countryInfoFlag"
      id="australiaInfoFlag"
      src=${flag}
      alt="The
      Flag
      of
      Australia"
    />
    <h1>Australia</h1>

    <section class="history" id="australiaHistory">
      <h3>
        History
      </h3>
      <p></p>
    </section>

    <section class="government" id="australiaGovernment">
      <h3>
        Government
      </h3>
      <p></p>
    </section>
    <section class="economy" id="australiaEconomy">
      <h3>
        Economy
      </h3>
      <p></p>
    </section>

    <section class="demographics" id="australiaDemographics">
      <h3>
        Demographics
      </h3>
      <p></p>
    </section>

    <section class="culture" id="australiaCulture">
      <h3>
        Culture
      </h3>
      <p></p>
    </section>

    <section class="currentEvents" id="australiaCurrentEvents">
      <h3>
        Current Events
      </h3>
      <p></p>
    </section>
  </div>
`;

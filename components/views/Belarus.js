import html from "html-literal";
import flag from "../../assets/images/flag-of-Belarus.png";
export default () => html`
  <div class="countryInfo" id="belarusInfo">
    <img
      class="countryInfoFlag"
      id="belarusInfoFlag"
      src=${flag}
      alt="The
      Flag
      of
      Belarus"
    />
    <h1>Belarus</h1>

    <section class="history" id="belarusHistory">
      <h3>
        History
      </h3>
      <p></p>
    </section>

    <section class="government" id="belarusGovernment">
      <h3>
        Government
      </h3>
      <p></p>
    </section>
    <section class="economy" id="belarusEconomy">
      <h3>
        Economy
      </h3>
      <p></p>
    </section>

    <section class="demographics" id="belarusDemographics">
      <h3>
        Demographics
      </h3>
      <p></p>
    </section>

    <section class="culture" id="belarusCulture">
      <h3>
        Culture
      </h3>
      <p></p>
    </section>

    <section class="currentEvents" id="belarusCurrentEvents">
      <h3>
        Current Events
      </h3>
      <p></p>
    </section>
  </div>
`;

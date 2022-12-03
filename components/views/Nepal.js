import html from "html-literal";
import flag from "../../assets/images/flag-of-Nepal.png";
export default () => html`
  <div class="countryInfo" id="nepalInfo">
    <img
      class="countryInfoFlag"
      id="nepalInfoFlag"
      src=${flag}
      alt="The
      Flag
      of
      Nepal"
    />
    <h1>Nepal</h1>

    <section class="history" id="nepalHistory">
      <h3>
        History
      </h3>
      <p></p>
    </section>

    <section class="government" id="nepalGovernment">
      <h3>
        Government
      </h3>
      <p></p>
    </section>
    <section class="economy" id="nepalEconomy">
      <h3>
        Economy
      </h3>
      <p></p>
    </section>

    <section class="demographics" id="nepalDemographics">
      <h3>
        Demographics
      </h3>
      <p></p>
    </section>

    <section class="culture" id="nepalCulture">
      <h3>
        Culture
      </h3>
      <p></p>
    </section>

    <section class="currentEvents" id="nepalCurrentEvents">
      <h3>
        Current Events
      </h3>
      <p></p>
    </section>
  </div>
`;

import html from "html-literal";
import flag from "../../assets/images/grc.png";
export default state => html`
  <div class="countryInfo" id="greeceInfo">
    <div class="metaDataContainer">
      <img
        class="shortCountryInfoFlag"
        id="greeceInfoFlag"
        src=${flag}
        alt="The
        Flag
        of
        Greece"
      />
      <div class="genInformationContainer">
      <p class="genInfoRegion">
          <u>${state.info.name}</u> Is Located In The Region of
          <u>${state.info.region}</u><br />
          And The Subregion of <u>${state.info.subregion}</u>
        </p>
        <p class="genInfoSubRegion"></p>
        <p class="genInfoCapitolCity">
          The Capitol of <u>${state.info.name}</u> is
          <u>${state.info.Capital}</u><br></br>
          <u>${state.info.Capital}</u> is located at<br> Lat: <u>${
  state.Weather.lat
}</u> Lon: <u>${state.Weather.lon}</u><br><br>

          Here is a look at the current weather in <br><u>${
            state.info.Capital
          }</u>: <br><br>
          The Temperature is currently: °F ${state.main.temp}<br>
          But it feels like: °F ${state.main.feels_like} <br> and
         ${state.Weather.description.map(weatherBlock)}


        <p>
          The Population of <u>${state.info.name}</u> is is approx.
          <u>${state.info.population}</u>
        </p>
        <p class="genInfoISOCodes ">
          <u>${state.info.name}'s</u> 2 Digit Alpha code is:
          <u>${state.info.Alpha2Code}</u><br />
          <u>${state.info.name}'s</u> 3 Digit Alpha code is:
          <u>${state.info.Alpha3Code}</u>
        </p>
        <p class="genInfoCurrency">
          The National Currency of ${state.info.name} Is: <br />
          The <u>${state.info.Currency[0].name}</u> Represented As:
          <u>${state.info.Currency[0].symbol}</u> &
          <u>${state.info.Currency[0].code}</u>
        </p>
        <p class="genInfoCallingCodes">
          <u>${state.info.name}'s</u> calling code is
          <u>${state.info.callingCodes}</u>
        </p>
        <p class="genInfoTimezones">
          Timezones: <u>${state.info.timezones}</u>
        </p>
      </div>
    </div>
      <div>
        <h1 class="countryNameHeader">${state.info.name}</h1>
        <h2 class="nativeName">${state.info.nativeName}</h2>
      </div>
      <section class="history topic" id="greeceHistory">
        <h3>
          History
        </h3>
        <p>
          sdfsdfsdf
        </p>
      </section>
      <section class="currentEvents topic" id="greeceCurrentEvents">
        <h3>Headlines About ${state.info.name}</h3>
        <p>${state.news.data.map(newsCard)}</p>
      </section>
    </div>
  </div>
`;
const newsCard = data =>
  html`
    <h1>
      ${data.title}
    </h1>
    <a href="${data.url}">Click Here To Learn More</a>
  `;
const weatherBlock = weather =>
  html`
    <u>${weather.description}</u>
  `;

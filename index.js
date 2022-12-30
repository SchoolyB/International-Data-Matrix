import { Header, Main, Footer } from "./components";
import * as store from "./store"; //importing everything from "./store" as an object called "store"
import Navigo from "navigo"; //the navigo library is what imports the router.hooks({}):before, router.on(), and .resolve()
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/"); //initiating the "router" variable. uses the navigo library

// declaring what the render() will do
//if params are not defined defaults to empty object
function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `

  ${Header(state)}
  ${Main(state)}
  ${Footer(state)}
  `;
  afterRender(state);
  router.updatePageLinks(); //navigo stuff for links
}

function afterRender(state) {
  // console.log(params);
  // console.log(params.countryFilter);
  document
    .getElementById("countryFilterForm")
    .addEventListener("submit", event => {
      event.preventDefault();

      axios
        .get("https://theinternationaldatamatrix.onrender.com/countries")
        .then(response => {
          const inputs = event.target.elements;
          console.log(inputs.countryFilter.value);
          store.Countries.filteredData = response.data.filter(country =>
            country.name
              .toUpperCase()
              .includes(inputs.countryFilter.value.toUpperCase())
          );
          console.log(store.Countries.filteredData);
          render(store.Countries);
        })
        .catch(err => console.log(err));

      const inputs = event.target.elements;
      console.log(inputs.countryFilter.value);
      store.Countries.filteredData = store.Countries.countryData.filter(
        country =>
          country.name
            .toUpperCase()
            .includes(inputs.countryFilter.value.toUpperCase())
      );
      console.log(store.Countries.filteredData);
      router.navigate("/countries");
    });

  switch (state.view) {
    case "Translator":
      const form = document.getElementById("fullTranslateContainer");
      const output = document.getElementById("translateOutput");
      form.addEventListener("submit", event => {
        event.preventDefault();
        const inputs = event.target.elements;
        const sourceText = inputs.translateInput.value;
        const outputLanguage = inputs.outputLangSelect.value;
        const requestBody = {
          sourceText,
          outputLanguage
        };
        axios
          .post(
            "https://theinternationaldatamatrix.onrender.com/translator",
            requestBody
          )
          .then(response => {
            store.Translator.outputText = response.data.text;
            console.log(store.Translator.stuffs);
            output.value = response.data.text;
          });
      });
      break;
  }
}

// router hooks({}) need a switch case statement to tell the program to specify what data should appear on what particular view
// router.hooks({}) :before does all the data collection before the render method is executed
// thats why our APIs usually are called within the function
// WITHIN THE ROUTER.HOOKS() ALL COUNTRIES ARE IN ALPHABETICAL ORDER
router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    switch (view) {
      case "Countries":
        axios
          .get("https://theinternationaldatamatrix.onrender.com/countries")
          .then(response => {
            store.Countries.filteredData = response.data;

            done();
          })
          .catch(err => console.log(err));
        break;
      case "Australia":
        Promise.all([
          axios.get("https://restcountries.com/v2/alpha/au"),
          axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=canberra&appid=${process.env.WEATHER_KEY}&units=imperial`
          ),
          axios.get(
            `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.NEWS_KEY}&language=en&limit=3&language=en&search=australia`
          )
        ])
          .then(responses => {
            const [info, weather, news] = responses;
            store.Australia.info = info.data;
            store.Australia.info.Alpha2Code = info.data.alpha2Code;
            store.Australia.info.Alpha3Code = info.data.alpha3Code;
            store.Australia.info.CallingCodes = info.data.callingCodes;
            store.Australia.info.Capital = info.data.capital;
            store.Australia.info.Currency = info.data.currencies;
            store.Australia.info.Native = info.data.nativeName;
            store.Australia.info.Name = info.data.name;
            store.Australia.info.Region = info.data.region;
            store.Australia.info.Timezones = info.data.timezones;
            store.Australia.info.SubRegion = info.data.subRegion;
            store.Australia.info.Population = info.data.population;

            store.Australia.Weather = weather.data;
            store.Australia.Weather.lat = weather.data.coord.lat;
            store.Australia.Weather.lon = weather.data.coord.lon;
            store.Australia.Weather.description = weather.data.weather;
            store.Australia.main = weather.data.main;

            store.Australia.news = news.data;
            store.Australia.news.data = news.data.data;
            done();
          })
          .catch(err => console.log(err));

        break;
      case "Belarus":
        Promise.all([
          axios.get("https://restcountries.com/v2/alpha/by"),
          axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=minsk&appid=${process.env.WEATHER_KEY}&units=imperial`
          ),
          axios.get(
            `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.NEWS_KEY}&language=en&limit=3&language=en&search=belarus`
          )
        ])
          .then(responses => {
            const [info, weather, news] = responses;
            store.Belarus.info = info.data;
            store.Belarus.info.Alpha2Code = info.data.alpha2Code;
            store.Belarus.info.Alpha3Code = info.data.alpha3Code;
            store.Belarus.info.CallingCodes = info.data.callingCodes;
            store.Belarus.info.Capital = info.data.capital;
            store.Belarus.info.Currency = info.data.currencies;
            store.Belarus.info.Native = info.data.nativeName;
            store.Belarus.info.Name = info.data.name;
            store.Belarus.info.Region = info.data.region;
            store.Belarus.info.Timezones = info.data.timezones;
            store.Belarus.info.SubRegion = info.data.subRegion;
            store.Belarus.info.Population = info.data.population;

            store.Belarus.Weather = weather.data;
            store.Belarus.Weather.lat = weather.data.coord.lat;
            store.Belarus.Weather.lon = weather.data.coord.lon;
            store.Belarus.Weather.description = weather.data.weather;
            store.Belarus.main = weather.data.main;

            store.Belarus.news = news.data;
            store.Belarus.news.data = news.data.data;
            done();
          })
          .catch(err => console.log(err));

        break;
      case "Greece":
        Promise.all([
          axios.get("https://restcountries.com/v2/alpha/gr"),
          axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=athens&appid=${process.env.WEATHER_KEY}&units=imperial`
          ),
          axios.get(
            `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.NEWS_KEY}&language=en&limit=3&language=en&search=greece`
          )
        ])
          .then(responses => {
            const [info, weather, news] = responses;
            store.Greece.info = info.data;
            store.Greece.info.Alpha2Code = info.data.alpha2Code;
            store.Greece.info.Alpha3Code = info.data.alpha3Code;
            store.Greece.info.CallingCodes = info.data.callingCodes;
            store.Greece.info.Capital = info.data.capital;
            store.Greece.info.Currency = info.data.currencies;
            store.Greece.info.Native = info.data.nativeName;
            store.Greece.info.Name = info.data.name;
            store.Greece.info.Region = info.data.region;
            store.Greece.info.Timezones = info.data.timezones;
            store.Greece.info.SubRegion = info.data.subRegion;
            store.Greece.info.Population = info.data.population;

            store.Greece.Weather = weather.data;
            store.Greece.Weather.lat = weather.data.coord.lat;
            store.Greece.Weather.lon = weather.data.coord.lon;
            store.Greece.Weather.description = weather.data.weather;
            store.Greece.main = weather.data.main;

            store.Greece.news = news.data;
            store.Greece.news.data = news.data.data;
            done();
          })
          .catch(err => console.log(err));
        break;
      case "Japan":
        Promise.all([
          axios.get("https://restcountries.com/v2/alpha/jp"),
          axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=${process.env.WEATHER_KEY}&units=imperial`
          ),
          axios.get(
            `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.NEWS_KEY}&language=en&limit=3&language=en&search=japan`
          )
        ])
          .then(responses => {
            const [info, weather, news] = responses;
            store.Japan.info = info.data;
            store.Japan.info.Alpha2Code = info.data.alpha2Code;
            store.Japan.info.Alpha3Code = info.data.alpha3Code;
            store.Japan.info.CallingCodes = info.data.callingCodes;
            store.Japan.info.Capital = info.data.capital;
            store.Japan.info.Currency = info.data.currencies;
            store.Japan.info.Native = info.data.nativeName;
            store.Japan.info.Name = info.data.name;
            store.Japan.info.Region = info.data.region;
            store.Japan.info.Timezones = info.data.timezones;
            store.Japan.info.SubRegion = info.data.subRegion;
            store.Japan.info.Population = info.data.population;

            store.Japan.Weather = weather.data;
            store.Japan.Weather.lat = weather.data.coord.lat;
            store.Japan.Weather.lon = weather.data.coord.lon;
            store.Japan.Weather.description = weather.data.weather;
            store.Japan.main = weather.data.main;

            store.Japan.news = news.data;
            store.Japan.news.data = news.data.data;
            done();
          })
          .catch(err => console.log(err));

        break;
      case "Morocco":
        Promise.all([
          axios.get("https://restcountries.com/v2/alpha/ma"),
          axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=rabat&appid=${process.env.WEATHER_KEY}&units=imperial`
          ),
          axios.get(
            `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.NEWS_KEY}&language=en&limit=3&language=en&search=morocco`
          )
        ])
          .then(responses => {
            const [info, weather, news] = responses;
            store.Morocco.info = info.data;
            store.Morocco.info.Alpha2Code = info.data.alpha2Code;
            store.Morocco.info.Alpha3Code = info.data.alpha3Code;
            store.Morocco.info.CallingCodes = info.data.callingCodes;
            store.Morocco.info.Capital = info.data.capital;
            store.Morocco.info.Currency = info.data.currencies;
            store.Morocco.info.Native = info.data.nativeName;
            store.Morocco.info.Name = info.data.name;
            store.Morocco.info.Region = info.data.region;
            store.Morocco.info.Timezones = info.data.timezones;
            store.Morocco.info.SubRegion = info.data.subRegion;
            store.Morocco.info.Population = info.data.population;

            store.Morocco.Weather = weather.data;
            store.Morocco.Weather.lat = weather.data.coord.lat;
            store.Morocco.Weather.lon = weather.data.coord.lon;
            store.Morocco.Weather.description = weather.data.weather;
            store.Morocco.main = weather.data.main;

            store.Morocco.news = news.data;
            store.Morocco.news.data = news.data.data;
            done();
          })
          .catch(err => console.log(err));
        break;
      case "Nepal":
        Promise.all([
          axios.get("https://restcountries.com/v2/alpha/np"),
          axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=kathmandu&appid=${process.env.WEATHER_KEY}&units=imperial`
          ),
          axios.get(
            `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.NEWS_KEY}&language=en&limit=3&language=en&search=nepal`
          )
        ])
          .then(responses => {
            const [info, weather, news] = responses;
            store.Nepal.info = info.data;
            store.Nepal.info.Alpha2Code = info.data.alpha2Code;
            store.Nepal.info.Alpha3Code = info.data.alpha3Code;
            store.Nepal.info.CallingCodes = info.data.callingCodes;
            store.Nepal.info.Capital = info.data.capital;
            store.Nepal.info.Currency = info.data.currencies;
            store.Nepal.info.Native = info.data.nativeName;
            store.Nepal.info.Name = info.data.name;
            store.Nepal.info.Region = info.data.region;
            store.Nepal.info.Timezones = info.data.timezones;
            store.Nepal.info.SubRegion = info.data.subRegion;
            store.Nepal.info.Population = info.data.population;

            store.Nepal.Weather = weather.data;
            store.Nepal.Weather.lat = weather.data.coord.lat;
            store.Nepal.Weather.lon = weather.data.coord.lon;
            store.Nepal.Weather.description = weather.data.weather;
            store.Nepal.main = weather.data.main;

            store.Nepal.news = news.data;
            store.Nepal.news.data = news.data.data;
            done();
          })
          .catch(err => console.log(err));
        break;
      case "Sudan":
        Promise.all([
          axios.get("https://restcountries.com/v2/alpha/sd"),
          axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=khartoum&appid=${process.env.WEATHER_KEY}&units=imperial`
          ),
          axios.get(
            `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.NEWS_KEY}&language=en&limit=3&language=en&search=sudan`
          )
        ])
          .then(responses => {
            const [info, weather, news] = responses;
            store.Sudan.info = info.data;
            store.Sudan.info.Alpha2Code = info.data.alpha2Code;
            store.Sudan.info.Alpha3Code = info.data.alpha3Code;
            store.Sudan.info.CallingCodes = info.data.callingCodes;
            store.Sudan.info.Capital = info.data.capital;
            store.Sudan.info.Currency = info.data.currencies;
            store.Sudan.info.Native = info.data.nativeName;
            store.Sudan.info.Name = info.data.name;
            store.Sudan.info.Region = info.data.region;
            store.Sudan.info.Timezones = info.data.timezones;
            store.Sudan.info.SubRegion = info.data.subRegion;
            store.Sudan.info.Population = info.data.population;

            store.Sudan.Weather = weather.data;
            store.Sudan.Weather.lat = weather.data.coord.lat;
            store.Sudan.Weather.lon = weather.data.coord.lon;
            store.Sudan.Weather.description = weather.data.weather;
            store.Sudan.main = weather.data.main;

            store.Sudan.news = news.data;
            store.Sudan.news.data = news.data.data;
            done();
          })
          .catch(err => console.log(err));
        break;
      case "Usa":
        Promise.all([
          axios.get("https://restcountries.com/v2/alpha/us"),
          axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=washington%20dc&appid=${process.env.WEATHER_KEY}&units=imperial`
          ),
          axios.get(
            `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.NEWS_KEY}&language=en&limit=3&language=en&search=usa`
          )
        ])
          .then(responses => {
            const [info, weather, news] = responses;
            store.Usa.info = info.data;
            store.Usa.info.Alpha2Code = info.data.alpha2Code;
            store.Usa.info.Alpha3Code = info.data.alpha3Code;
            store.Usa.info.CallingCodes = info.data.callingCodes;
            store.Usa.info.Capital = info.data.capital;
            store.Usa.info.Currency = info.data.currencies;
            store.Usa.info.Native = info.data.nativeName;
            store.Usa.info.Name = info.data.name;
            store.Usa.info.Region = info.data.region;
            store.Usa.info.Timezones = info.data.timezones;
            store.Usa.info.SubRegion = info.data.subRegion;
            store.Usa.Weather = weather.data;
            store.Usa.Weather.lat = weather.data.coord.lat;
            store.Usa.Weather.lon = weather.data.coord.lon;
            store.Usa.Weather.description = weather.data.weather;
            store.Usa.main = weather.data.main;

            store.Usa.news = news.data;
            store.Usa.news.data = news.data.data;
            done();
          })
          .catch(err => console.log(err));
        break;
      case "Venezuela":
        Promise.all([
          axios.get("https://restcountries.com/v2/alpha/ve"),
          axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=caracas&appid=${process.env.WEATHER_KEY}&units=imperial`
          ),
          axios.get(
            `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.NEWS_KEY}&language=en&limit=3&language=en&search=venezuela`
          )
        ])
          .then(responses => {
            const [info, weather, news] = responses;
            store.Venezuela.info = info.data;
            store.Venezuela.info.Alpha2Code = info.data.alpha2Code;
            store.Venezuela.info.Alpha3Code = info.data.alpha3Code;
            store.Venezuela.info.CallingCodes = info.data.callingCodes;
            store.Venezuela.info.Capital = info.data.capital;
            store.Venezuela.info.Currency = info.data.currencies;
            store.Venezuela.info.Native = info.data.nativeName;
            store.Venezuela.info.Name = info.data.name;
            store.Venezuela.info.Region = info.data.region;
            store.Venezuela.info.Timezones = info.data.timezones;
            store.Venezuela.info.SubRegion = info.data.subRegion;
            store.Venezuela.Weather = weather.data;
            store.Venezuela.Weather.lat = weather.data.coord.lat;
            store.Venezuela.Weather.lon = weather.data.coord.lon;
            store.Venezuela.Weather.description = weather.data.weather;
            store.Venezuela.main = weather.data.main;

            store.Venezuela.news = news.data;
            store.Venezuela.news.data = news.data.data;
            done();
          })
          .catch(err => console.log(err));
        break;
      default:
        done();
    }
  }
});
// router hooks runs until thew done() function is executed

router //this renders a specific view
  .on({
    "/": () => render(), //telling me that if the URL has no "/" then render the home page

    ":view": params => {
      //telling me that if any views are inside the URL then capitalize the first letter then render the view
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve(); //similar to "listen" method in expressJS.
// essentially says "ok I want to render the page, but first I need to run any 'router.hooks({}) :before' if there are any
// then I can run the render function"

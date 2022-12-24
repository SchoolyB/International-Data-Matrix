import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store"; //importing everything from "./store" as an object called "store"
import Navigo from "navigo"; //the navigo library is what imports the router.hooks({}):before, router.on(), and .resolve()
import { capitalize } from "lodash";
import axios from "axios";

const dotenv = require("dotenv");

const router = new Navigo("/"); //initiating the "router" variable. uses the navigo library

// declaring what the render() will do
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
      case "Australia":
        axios
          .get("https://restcountries.com/v2/alpha/au")
          .then(response => {
            store.Australia.info = response.data;
            store.Australia.info.Alpha2Code = response.data.alpha2Code;
            store.Australia.info.Alpha3Code = response.data.alpha3Code;
            store.Australia.info.CallingCodes = response.data.callingCodes;
            store.Australia.info.Capital = response.data.capital;
            store.Australia.info.Currency = response.data.currencies;
            store.Australia.info.Native = response.data.nativeName;
            store.Australia.info.Name = response.data.name;
            store.Australia.info.Region = response.data.region;
            store.Australia.info.Timezones = response.data.timezones;
            store.Australia.info.SubRegion = response.data.subRegion;
            store.Australia.info.Population = response.data.population;
            // possibly adf native name to a sub heading of country info screen
            // possibly add population to country selection screen
            axios
              .get(
                `https://api.openweathermap.org/data/2.5/weather?q=canberra&appid=${process.env.WEATHER_KEY}&units=imperial`
              )
              .then(response => {
                store.Australia.Weather = response.data;
                store.Australia.Weather.lat = response.data.coord.lat;
                store.Australia.Weather.lon = response.data.coord.lon;
                store.Australia.Weather.main = response.data.weather.main;
                store.Australia.Weather.description = response.data.weather;
              });
            axios
              .get(
                `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.NEWS_KEY}&language=en&limit=3&language=en&search=australia`
              )
              .then(response => {
                store.Australia.news = response.data;
                store.Australia.news.data = response.data.data;
                console.log(response.data.data);
              })
              .catch(console.log)
              .finally(done);
          })
          .catch(err => console.log(err));
        // });
        break;
      case "Belarus":
        axios
          .get("https://restcountries.com/v2/alpha/by")
          .then(response => {
            store.Belarus.info = response.data;
            store.Belarus.info.Alpha2Code = response.data.alpha2Code;
            store.Belarus.info.Alpha3Code = response.data.alpha3Code;
            store.Belarus.info.CallingCodes = response.data.callingCodes;
            store.Belarus.info.Capital = response.data.capital;
            store.Belarus.info.Currency = response.data.currencies;
            store.Belarus.info.Native = response.data.nativeName;
            store.Belarus.info.Name = response.data.name;
            store.Belarus.info.Region = response.data.region;
            store.Belarus.info.Timezones = response.data.timezones;
            store.Belarus.info.SubRegion = response.data.subRegion;

            axios
              .get(
                `https://api.openweathermap.org/data/2.5/weather?q=minsk&appid=${process.env.WEATHER_KEY}&units=imperial`
              )
              .then(response => {
                store.Belarus.Weather = response.data;
                store.Belarus.Weather.lat = response.data.coord.lat;
                store.Belarus.Weather.lon = response.data.coord.lon;
                store.Belarus.Weather.main = response.data.weather.main;
                store.Belarus.Weather.description = response.data.weather;
              });
            axios
              .get(
                `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.NEWS_KEY}&language=en&limit=3&language=en&search=belarus`
              )
              .then(response => {
                store.Belarus.news = response.data;
                store.Belarus.news.data = response.data.data;
                console.log(response.data.data);
              })
              .catch(console.log)
              .finally(done);
          })
          .catch(err => console.log(err));
        // });

        break;
      case "Greece":
        axios
          .get("https://restcountries.com/v2/alpha/gr")
          .then(response => {
            store.Greece.info = response.data;
            store.Greece.info.Alpha2Code = response.data.alpha2Code;
            store.Greece.info.Alpha3Code = response.data.alpha3Code;
            store.Greece.info.CallingCodes = response.data.callingCodes;
            store.Greece.info.Capital = response.data.capital;
            store.Greece.info.Currency = response.data.currencies;
            store.Greece.info.Native = response.data.nativeName;
            store.Greece.info.Name = response.data.name;
            store.Greece.info.Region = response.data.region;
            store.Greece.info.Timezones = response.data.timezones;
            store.Greece.info.SubRegion = response.data.subRegion;
            store.Greece.info.Population = response.data.population;

            axios
              .get(
                `https://api.openweathermap.org/data/2.5/weather?q=athens&appid=${process.env.WEATHER_KEY}&units=imperial`
              )
              .then(response => {
                store.Greece.Weather = response.data;
                store.Greece.Weather.lat = response.data.coord.lat;
                store.Greece.Weather.lon = response.data.coord.lon;
                store.Greece.Weather.main = response.data.weather.main;
                store.Greece.Weather.description = response.data.weather;
              });
            axios
              .get(
                `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.NEWS_KEY}&language=en&limit=3&language=en&search=greece`
              )
              .then(response => {
                store.Greece.news = response.data;
                store.Greece.news.data = response.data.data;
                console.log(response.data.data);
              })
              .catch(console.log)
              .finally(done);
          })
          .catch(err => console.log(err));
        // });

        break;
      case "Japan":
        axios
          .get("https://restcountries.com/v2/alpha/jp")
          .then(response => {
            store.Japan.info = response.data;
            store.Japan.info.Alpha2Code = response.data.alpha2Code;
            store.Japan.info.Alpha3Code = response.data.alpha3Code;
            store.Japan.info.CallingCodes = response.data.callingCodes;
            store.Japan.info.Capital = response.data.capital;
            store.Japan.info.Currency = response.data.currencies;
            store.Japan.info.Native = response.data.nativeName;
            store.Japan.info.Name = response.data.name;
            store.Japan.info.Region = response.data.region;
            store.Japan.info.Timezones = response.data.timezones;
            store.Japan.info.SubRegion = response.data.subRegion;
            store.Japan.info.Population = response.data.population;

            axios
              .get(
                `https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=${process.env.WEATHER_KEY}&units=imperial`
              )
              .then(response => {
                store.Japan.Weather = response.data;
                store.Japan.Weather.lat = response.data.coord.lat;
                store.Japan.Weather.lon = response.data.coord.lon;
                store.Japan.Weather.main = response.data.weather.main;
                store.Japan.Weather.description = response.data.weather;
              });
            axios
              .get(
                `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.NEWS_KEY}&language=en&limit=3&language=en&search=japan`
              )
              .then(response => {
                store.Japan.news = response.data;
                store.Japan.news.data = response.data.data;
                console.log(response.data.data);
              })
              .catch(console.log)
              .finally(done);
          })
          .catch(err => console.log(err));
        // });

        break;
      case "Morocco":
        axios
          .get("https://restcountries.com/v2/alpha/ma")
          .then(response => {
            store.Morocco.info = response.data;
            store.Morocco.info.Alpha2Code = response.data.alpha2Code;
            store.Morocco.info.Alpha3Code = response.data.alpha3Code;
            store.Morocco.info.CallingCodes = response.data.callingCodes;
            store.Morocco.info.Capital = response.data.capital;
            store.Morocco.info.Currency = response.data.currencies;
            store.Morocco.info.Native = response.data.nativeName;
            store.Morocco.info.Name = response.data.name;
            store.Morocco.info.Region = response.data.region;
            store.Morocco.info.Timezones = response.data.timezones;
            store.Morocco.info.SubRegion = response.data.subRegion;
            store.Morocco.info.Population = response.data.population;
            axios
              .get(
                `https://api.openweathermap.org/data/2.5/weather?q=rabat&appid=${process.env.WEATHER_KEY}&units=imperial`
              )
              .then(response => {
                store.Morocco.Weather = response.data;
                store.Morocco.Weather.lat = response.data.coord.lat;
                store.Morocco.Weather.lon = response.data.coord.lon;
                store.Morocco.Weather.main = response.data.weather.main;
                store.Morocco.Weather.description = response.data.weather;
              });
            axios
              .get(
                `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.NEWS_KEY}&language=en&limit=3&language=en&search=morocco`
              )
              .then(response => {
                store.Morocco.news = response.data;
                store.Morocco.news.data = response.data.data;
                console.log(response.data.data);
              })
              .catch(console.log)
              .finally(done);
          })
          .catch(err => console.log(err));
        // });

        break;
      case "Nepal":
        axios
          .get("https://restcountries.com/v2/alpha/np")
          .then(response => {
            store.Nepal.info = response.data;
            store.Nepal.info.Alpha2Code = response.data.alpha2Code;
            store.Nepal.info.Alpha3Code = response.data.alpha3Code;
            store.Nepal.info.CallingCodes = response.data.callingCodes;
            store.Nepal.info.Capital = response.data.capital;
            store.Nepal.info.Currency = response.data.currencies;
            store.Nepal.info.Native = response.data.nativeName;
            store.Nepal.info.Name = response.data.name;
            store.Nepal.info.Region = response.data.region;
            store.Nepal.info.Timezones = response.data.timezones;
            store.Nepal.info.SubRegion = response.data.subRegion;
            store.Nepal.info.Population = response.data.population;

            axios
              .get(
                `https://api.openweathermap.org/data/2.5/weather?q=kathmandu&appid=${process.env.WEATHER_KEY}&units=imperial`
              )
              .then(response => {
                store.Nepal.Weather = response.data;
                store.Nepal.Weather.lat = response.data.coord.lat;
                store.Nepal.Weather.lon = response.data.coord.lon;
                store.Nepal.Weather.main = response.data.weather.main;
                store.Nepal.Weather.description = response.data.weather;
              });
            axios
              .get(
                `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.NEWS_KEY}&language=en&limit=3&language=en&search=nepal`
              )
              .then(response => {
                store.Nepal.news = response.data;
                store.Nepal.news.data = response.data.data;
                console.log(response.data.data);
              })
              .catch(console.log)
              .finally(done);
          })
          .catch(err => console.log(err));
        // });

        break;
      case "Sudan":
        axios
          .get("https://restcountries.com/v2/alpha/sd")
          .then(response => {
            store.Sudan.info = response.data;
            store.Sudan.info.Alpha2Code = response.data.alpha2Code;
            store.Sudan.info.Alpha3Code = response.data.alpha3Code;
            store.Sudan.info.CallingCodes = response.data.callingCodes;
            store.Sudan.info.Capital = response.data.capital;
            store.Sudan.info.Currency = response.data.currencies;
            store.Sudan.info.Native = response.data.nativeName;
            store.Sudan.info.Name = response.data.name;
            store.Sudan.info.Region = response.data.region;
            store.Sudan.info.Timezones = response.data.timezones;
            store.Sudan.info.SubRegion = response.data.subRegion;
            store.Sudan.info.Population = response.data.population;

            axios
              .get(
                `https://api.openweathermap.org/data/2.5/weather?q=khhartoum&appid=${process.env.WEATHER_KEY}&units=imperial`
              )
              .then(response => {
                store.Sudan.Weather = response.data;
                store.Sudan.Weather.lat = response.data.coord.lat;
                store.Sudan.Weather.lon = response.data.coord.lon;
                store.Sudan.Weather.main = response.data.weather.main;
                store.Sudan.Weather.description = response.data.weather;
              });

            axios
              .get(
                `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.NEWS_KEY}&language=en&limit=3&language=en&search=sudan`
              )
              .then(response => {
                store.Sudan.news = response.data;
                store.Sudan.news.data = response.data.data;
                console.log(response.data.data);
              })
              .catch(console.log)
              .finally(done);
          })
          .catch(err => console.log(err));
        // });
        break;
      case "Usa":
        axios
          .get("https://restcountries.com/v2/alpha/us")
          .then(response => {
            store.Usa.info = response.data;
            store.Usa.info.Alpha2Code = response.data.alpha2Code;
            store.Usa.info.Alpha3Code = response.data.alpha3Code;
            store.Usa.info.CallingCodes = response.data.callingCodes;
            store.Usa.info.Capital = response.data.capital;
            store.Usa.info.Currency = response.data.currencies;
            store.Usa.info.Native = response.data.nativeName;
            store.Usa.info.Name = response.data.name;
            store.Usa.info.Region = response.data.region;
            store.Usa.info.Timezones = response.data.timezones;
            store.Usa.info.SubRegion = response.data.subRegion;
            store.Usa.info.Population = response.data.population;

            axios
              .get(
                `https://api.openweathermap.org/data/2.5/weather?q=washington%20dc&appid=${process.env.WEATHER_KEY}&units=imperial`
              )
              .then(response => {
                store.Usa.Weather = response.data;
                store.Usa.Weather.lat = response.data.coord.lat;
                store.Usa.Weather.lon = response.data.coord.lon;
                store.Usa.Weather.main = response.data.weather.main;
                store.Usa.Weather.description = response.data.weather;
              });

            axios
              .get(
                `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.NEWS_KEY}&language=en&limit=3&language=en&search=usa`
              )
              .then(response => {
                store.Usa.news = response.data;
                store.Usa.news.data = response.data.data;
                console.log(response.data.data);
              })
              .catch(console.log)
              .finally(done);
          })
          .catch(err => console.log(err));
        // });

        break;
      case "Venezuela":
        axios
          .get("https://restcountries.com/v2/alpha/ve")
          .then(response => {
            store.Venezuela.info = response.data;
            store.Venezuela.info.Alpha2Code = response.data.alpha2Code;
            store.Venezuela.info.Alpha3Code = response.data.alpha3Code;
            store.Venezuela.info.CallingCodes = response.data.callingCodes;
            store.Venezuela.info.Capital = response.data.capital;
            store.Venezuela.info.Currency = response.data.currencies;
            store.Venezuela.info.Native = response.data.nativeName;
            store.Venezuela.info.Name = response.data.name;
            store.Venezuela.info.Region = response.data.region;
            store.Venezuela.info.Timezones = response.data.timezones;
            store.Venezuela.info.SubRegion = response.data.subRegion;
            store.Venezuela.info.Population = response.data.population;

            axios
              .get(
                `https://api.openweathermap.org/data/2.5/weather?q=caracas&appid=${process.env.WEATHER_KEY}&units=imperial`
              )
              .then(response => {
                store.Venezuela.Weather = response.data;
                store.Venezuela.Weather.lat = response.data.coord.lat;
                store.Venezuela.Weather.lon = response.data.coord.lon;
                store.Venezuela.Weather.main = response.data.weather.main;
                store.Venezuela.Weather.description = response.data.weather;
              });
            axios
              .get(
                `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.NEWS_KEY}&language=en&limit=3&language=en&search=venezuela`
              )
              .then(response => {
                store.Venezuela.news = response.data;
                store.Venezuela.news.data = response.data.data;
                console.log(response.data.data);
              })
              .catch(console.log)
              .finally(done);
          })
          .catch(err => console.log(err));
        // });
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

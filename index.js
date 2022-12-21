import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store"; //importing everything from "./store" as an object called "store"
import Navigo from "navigo"; //the navigo library is what imports the router.hooks({}):before, router.on(), and .resolve()
import { capitalize } from "lodash";
import axios from "axios";
import * as deepl from "deepl-node";

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
          .post("http://localhost:4040/translator", requestBody)
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
router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Australia";
    switch (view) {
      case "Australia":
        axios
          .get("http://localhost:4040/country/australia")
          .then(response => {
            store.Australia.history = response.data.history;
            store.Australia.government = response.data.government;
            store.Australia.demographics = response.data.demographics;
            store.Australia.economy = response.data.economy;
            store.Australia.culture = response.data.culture;
            store.Australia.currentEvents = response.data.currentEvents;
            console.log(response.data);
            done();
          })
          .catch(err => console.log(err));
        break;
      case "Belarus":
        axios
          .get("http://localhost:4040/country/belarus")
          .then(response => {
            store.Belarus.history = response.data.history;
            store.Belarus.government = response.data.government;
            store.Belarus.demographics = response.data.demographics;
            store.Belarus.economy = response.data.economy;
            store.Belarus.culture = response.data.culture;
            store.Belarus.currentEvents = response.data.currentEvents;
            console.log(response.data);
            done();
          })
          .catch(err => console.log(err));
        break;
      case "Greece":
        axios
          .get("http://localhost:4040/country/greece")
          .then(response => {
            store.Greece.history = response.data.history;
            store.Greece.government = response.data.government;
            store.Greece.demographics = response.data.demographics;
            store.Greece.economy = response.data.economy;
            store.Greece.culture = response.data.culture;
            store.Greece.currentEvents = response.data.currentEvents;
            console.log(response.data);
            done();
          })
          .catch(err => console.log(err));
        break;
      case "Japan":
        axios
          .get("http://localhost:4040/country/japan")
          .then(response => {
            store.Japan.history = response.data.history;
            store.Japan.government = response.data.government;
            store.Japan.demographics = response.data.demographics;
            store.Japan.economy = response.data.economy;
            store.Japan.culture = response.data.culture;
            store.Japan.currentEvents = response.data.currentEvents;
            console.log(response.data);
            done();
          })
          .catch(err => console.log(err));
        break;
      case "Morocco":
        axios
          .get("http://localhost:4040/country/morocco")
          .then(response => {
            store.Morocco.history = response.data.history;
            store.Morocco.government = response.data.government;
            store.Morocco.demographics = response.data.demographics;
            store.Morocco.economy = response.data.economy;
            store.Morocco.culture = response.data.culture;
            store.Morocco.currentEvents = response.data.currentEvents;
            console.log(response.data);
            done();
          })
          .catch(err => console.log(err));
        break;
      case "Nepal":
        axios
          .get("http://localhost:4040/country/nepal")
          .then(response => {
            store.Nepal.history = response.data.history;
            store.Nepal.government = response.data.government;
            store.Nepal.demographics = response.data.demographics;
            store.Nepal.economy = response.data.economy;
            store.Nepal.culture = response.data.culture;
            store.Nepal.currentEvents = response.data.currentEvents;
            console.log(response.data);
            done();
          })
          .catch(err => console.log(err));
        break;
      case "Sudan":
        axios
          .get("http://localhost:4040/country/sudan")
          .then(response => {
            store.Sudan.history = response.data.history;
            store.Sudan.government = response.data.government;
            store.Sudan.demographics = response.data.demographics;
            store.Sudan.economy = response.data.economy;
            store.Sudan.culture = response.data.culture;
            store.Sudan.currentEvents = response.data.currentEvents;
            console.log(response.data);
            done();
          })
          .catch(err => console.log(err));
        break;
      case "Usa":
        axios
          .get("http://localhost:4040/country/usa")
          .then(response => {
            store.Usa.history = response.data.history;
            store.Usa.government = response.data.government;
            store.Usa.demographics = response.data.demographics;
            store.Usa.economy = response.data.economy;
            store.Usa.culture = response.data.culture;
            store.Usa.currentEvents = response.data.currentEvents;
            console.log(response.data);
            done();
          })
          .catch(err => console.log(err));
        break;
      case "Venezuela":
        axios
          .get("http://localhost:4040/country/venezuela")
          .then(response => {
            store.Venezuela.history = response.data.history;
            store.Venezuela.government = response.data.government;
            store.Venezuela.demographics = response.data.demographics;
            store.Venezuela.economy = response.data.economy;
            store.Venezuela.culture = response.data.culture;
            store.Venezuela.currentEvents = response.data.currentEvents;
            console.log(response.data);
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

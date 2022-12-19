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
            console.log(response.data);
          });
      });
      break;
  }
}

// router hooks({}) need a switch case statement to tell the program to specify what data should appear on what particular view
// router.hooks({}) :before does all the data collection before the render method is executed
// thats why our APIs usually are called within the function
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

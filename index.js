import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store"; //importing everything from "./store" as an object called "store"
import Navigo from "navigo";
import { capitalize } from "lodash";
import dotenv from "dotenv";
var axios = require("axios").default;

dotenv.config();
const router = new Navigo("/");

function render(state = store.Home) {
  console.table(`${state}`);
  document.querySelector("#root").innerHTML = `

  ${Header(state)},
  ${Main(state)},
  ${Footer(state)},
`;
  router.updatePageLinks();
}
router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();

//${Nav(store.Links)}, add to line 11 when done working on css

var options = {
  method: "GET",
  url: "https://api.newscatcherapi.com/v2/search",
  params: { q: "united states", lang: "en", sort_by: "relevancy", page: "1" },
  headers: {
    "x-api-key": `${process.env.API_ACCESS_KEY}`
  }
};

axios
  .request(options)
  .then(function(response) {
    console.log(response.data);
  })
  .catch(function(error) {
    console.error(error);
  });

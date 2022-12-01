import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store"; //importing everything from "./store" as an object called "store"
import Navigo from "navigo";
import { capitalize } from "lodash";

const router = new Navigo("/");

function render(state = store.LandingPage) {
  document.querySelector("#root").innerHTML = `
  ${Header(state)},
  ${Main(state)},
  ${Nav(store.Links)},
  ${Footer(state)},
  ${Translator(state)},
`;
  router.updatePageLinks();
}

router
  .on({
    "/": () => render(),
    view: params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();

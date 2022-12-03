import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store"; //importing everything from "./store" as an object called "store"
import Navigo from "navigo";
import { capitalize } from "lodash";
import { showTime } from "./components/clocks/userLocalClock";

const router = new Navigo("/");

function render(state = store.Home) {
  console.log(state);
  document.querySelector("#root").innerHTML = `
  ${Header(state)},
  ${Main(state)},
  ${Nav(store.Links)},
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

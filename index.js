import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store"; //importing everything from "./store" as an object called "store"
import Navigo from "navigo";
import { capitalize } from "lodash";
import dotenv from "dotenv";
import * as deepl from "deepl-node";

dotenv.config();
const router = new Navigo("/");

function render(state = store.Home) {
  console.table(`${state}`);
  document.querySelector("#root").innerHTML = `

  ${Header(state)}
  ${Main(state)}
  ${Footer(state)}
  `;
  router.updatePageLinks();
}

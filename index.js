import Navigo from "navigo";
import { capitalize } from "lodash";
const router = new Navigo("/");

import {
  Header,
  Main,
  Nav,
  Footer,
  Translator,
  Belarus,
  Japan,
  Morocco,
  Usa
} from "../Capstone/components";

function render() {
  document.querySelector("#root").innerHTML = `
  ${Header()},
  ${Main()},
  ${Nav()},
  ${Footer()},
  ${Translator()},
  ${Belarus()},
  ${Japan()},
  ${Morocco()},
  ${Usa()}
  `;
}

render();

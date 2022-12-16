import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store"; //importing everything from "./store" as an object called "store"
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import * as deepl from "deepl-node";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `

  ${Header(state)}
  ${Main(state)}
  ${Footer(state)}
  `;
  afterRender(state);
  router.updatePageLinks();
}

const afterRender = state => {
  //  add menu toggle to bars icon in nav bar
  // document.querySelector(".fa-bars").addEventListener("click", () => {
  //   document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  // });
    document.getElementById("translateBtn").addEventListener("click", event => {
      console.log(event);

      const authKey = `${process.env.TRANSLATION_KEY}`;

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    switch (view) {
      // case "Translate":
      //   // New Axios get request utilizing already made environment variable
      //         //   break;
      default:
        done();
    }
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve(); //similar to "listen" method in expressJS

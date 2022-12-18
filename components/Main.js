import html from "html-literal";
import * as views from "./views";

export default state => html`
  ${views[state.view](state)}
  <!-- this function foes toto whatever view we are in,
  passes in state / renders the view file-->
`;

// state is s chunk of data specific to a view or component

// store is a collection of states

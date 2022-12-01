import html from "html-literal";

import * as views from "./views";
export default state => html`
  ${views[state.views](state)}
`;

//the export above is importing all the objects from "./countries"

import html from "html-literal";
import * as views from "./views";

export default state => html`
  ${console.table(views)}
  ${views[state.view](state)}
`;

//the export above is importing all the objects from "./countries"

import html from "html-literal";

import * as countries from "./countries";
export default () => html`
  ${countries[state.countries](state)}
`;

//the export above is importing all the objects from "./countries"

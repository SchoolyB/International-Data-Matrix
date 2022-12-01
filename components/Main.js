import html from "html-literal";

import * as countries from "./countries";
export default () => html`
  ${countries["Belarus"]()},
  ${countries["Japan"]()},
  ${countries["Morocco"]()},
  ${countries["Usa"]()},
`;

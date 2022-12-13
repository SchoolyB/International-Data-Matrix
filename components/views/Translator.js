import html from "html-literal";

export default () => html`
  <div id="translatorContainer">
    <div id="translateInput">INPUT</div>
    <div id="translateBtn"><img src="$1" /></div>
    <div id="translateOutput">OUTPUT</div>
  </div>
`;

import html from "html-literal";
import plane from "../assets/images/airplane.png";

const test = window.location.href;

export default state => html`
  <header>
    <h1>
    <form action="http://localhost:1234/Countries" method="get">
    <label for="countryFilter">Filter Countries</label>
    <input id="countryFilter" name="countryFilter" type="text"></input>
    <input type="submit">
    </form>
      ${state.header}
    </h1>
  </header>
`;

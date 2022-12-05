import html from "html-literal";
import plane from "../assets/images/airplane.png";

export default state => html`
  <header>
    <h1>
      ${state.header}
    </h1>
    <form id="searchForm"action="http://localhost:1234" method="get">
      <label id="searchBarLabel" for="countryFilter">Search For Countries</label>
      <input id="countryFilter" name="countryFilter" type="text"></input>
      <input id ="submitBtn" src=${plane} type="image" alt="A plane surrounded by clouds">
    </form>
  </header>
`;

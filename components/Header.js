import html from "html-literal";
import globe from "../assets/images/lookingglassoverglobe.png";
import logo from "../assets/images/Branding/logo-no-background.png";
const test = window.location.href;

export default state => html`

  <header>
    <h1 id="pageHeading">
      ${state.header}
    </h1>
    <img id="mainLogo"src= ${logo}>
    <div id="searchContainer">
      <form class="searchForm "action="http://localhost:1234/Countries" method="get">
        <input placeholder="Search Countries" id="countryFilter" name="countryFilter" type="text"></input>
        <input id="searchBtn" type="image" src=${globe} atl="TEST"></input>
      </form>
    </div>
  </header>
`;

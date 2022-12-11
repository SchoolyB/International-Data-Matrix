import html from "html-literal";
import globe from "../assets/images/lookingglassoverglobe.png";
import logo from "../assets/images/Branding/logo-no-background.png";

export default state => html`

  <header>
    <a href="Home">
         <img id="mainLogo"src= ${logo} >
      </a>
      <h1 id="pageHeading">
        ${state.header}
        <div id="searchContainer">
          <form class="searchForm "action="/Countries" method="get">
            <input placeholder="Search Countries" id="countryFilter" name="countryFilter" type="text"></input>
            <input id="searchBtn" type="image" src=${globe} atl="TEST"></input>
          </form>
        </div>
      </h1>
  </header>
`;

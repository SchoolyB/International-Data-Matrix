import html from "html-literal";
import globe from "../assets/images/lookingglassoverglobe.png";
import logo from "../assets/images/Branding/logo-no-background.png";

export default state => html`

  <header>
      <img id="mainLogo"src= ${logo} >
    <h1 id="pageHeading"></h1>
      ${state.header}
      <div id="searchContainer">
        <form class="searchForm "action="/Countries" method="get">
          <input placeholder="Search Countries" id="countryFilter" name="countryFilter" type="text" required></input>
          <input id="searchBtn" type="image" src=${globe} atl="TEST"></input>
        </form>
      </div>
    </h1>
  </header>


  `;

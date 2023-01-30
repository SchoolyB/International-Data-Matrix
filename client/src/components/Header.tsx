import React from 'react'
import globe from "../../assets/globe.gif";
import logo from "../../assets/Branding/logo-no-background.png";

export default function Header() {
  return (
  <header>
    <div>
      <img title ="image" id="mainLogo"src={logo} ></img>
    </div>

    <div>
      <h1 id="pageHeading">
      </h1>
    </div>

      <div id="searchContainer">
        <form id="countryFilterForm" className="searchForm " >
          <input placeholder="Search Countries" id="countryFilter" name="countryFilter" type="text" required></input>
          <input id="searchBtn" type="image" src={globe} alt="TEST"></input>
        </form>
      </div>
  </header>

  )
}

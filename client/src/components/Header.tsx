import React from 'react'
import globe from "../../assets/globe.gif";

import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';

export default function Header() {

  return (
    <header>
      <Navbar>
    <Navbar.Brand href="Home">The International Data Matrix</Navbar.Brand>
    <Nav>
      <Nav.Item icon={<HomeIcon />} href="Home">Home</Nav.Item>
      <Nav.Item>Country Selection</Nav.Item>
      <Nav.Item href="Translator">Translator</Nav.Item>
      <Nav.Item href="Contact">Contact</Nav.Item>
        </Nav>
        <div id="searchContainer">
        <form id="countryFilterForm" className="searchForm " >
          <input placeholder="Search Countries" id="countryFilter" name="countryFilter" type="text" required></input>
          <input id="searchBtn" type="image" src={globe} alt="TEST"></input>
        </form>
      </div>
  </Navbar>

  </header>

  )
}

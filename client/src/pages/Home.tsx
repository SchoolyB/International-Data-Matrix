import React from 'react'
import axios from 'axios'

const getCountry = () => {
  axios
    .get("https://restcountries.com/v2/alpha/by")
    .then(res => {
    console.log(res)
  })
}

getCountry();

export default function Home() {
  return (
<div>
  <div id="welcomeContainer">
    <h1 id="welcomeMainHeading">The Entire World All In One Place</h1>
    <p id="welcomeParagraph">
      The International Data Matrix or The "IDM" acts as a central place on the
      internet that anyone can access to gain historical,<br />
      cultural, religious, geographical, geo-economical and geo-political
      understanding about any country in the world and the<br />
      people that reside in them. To learn more about a country
      you can click on the button below or click the "Country Selection"
      <br/>tab in the nav menu above. Welcome To The International Data Matrix.
    </p>
    <div id="welcomeBtnContainer">
      <a href="Countries" role="button" id="welcomeBtn">View Countries</a>
    </div>
      </div>
</div>
  )
}

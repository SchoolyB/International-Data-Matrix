import axios from "axios";
import Container from "../components/helpers/Container";

const getCountry = () => {
  axios.get("https://restcountries.com/v2/alpha/by").then((res) => {});
};

getCountry();

export default function Home() {
  return (
    <Container>
      <div id="welcomeContainer">
        <h1 id="welcomeMainHeading">The Entire World All In One Place</h1>
        <p id="welcomeParagraph">
          The International Data Matrix or The "IDM" acts as a central place on
          the internet that anyone can access to gain historical, cultural,
          religious, geographical, geo-economical and geo-political
          understanding about any country in the world and the people that
          reside in them.
        </p>

        <p id="welcomeParagraph">
          To learn more about a country you can click on the button below or
          click the "Country Selection" tab in the nav menu above. Welcome To
          The International Data Matrix.
        </p>
        <div id="welcomeBtnContainer">
          <a href="Countries" role="button" id="welcomeBtn">
            View Countries
          </a>
        </div>
      </div>
    </Container>
  );
}

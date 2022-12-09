import html from "html-literal";

export default () => html`
  <div id="welcomeContainer">
    <h1 id="welcomeMainHeading">The Entire World All In One Place</h1>
    <p id="welcomeParagraph">
      The International Data Matrix or "TIDM" acts as a central place on the
      internet that anyone can access to gain<br />
      historical, cultural, religious, geographical, geo-economical and
      geo-political understanding about any country<br />
      in the world and the people that reside in them. To get started click on
      the button below or search for a country<br />in the search field located
      in the top right corner of your screen.
    </p>
    <a href="Countries" role="button" id="welcomeBtn">View Countries</a>
  </div>
`;

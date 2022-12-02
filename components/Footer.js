import html from "html-literal";
import footer1 from "../assets/images/document.png";
import footer2 from "../assets/images/github.png";
import footer3 from "../assets/images/translation.png";
import footer4 from "../assets/images/home.png";

export default () => html`
  <footer>
    <ul>
      <li>Author: Marshall Burns</li>
      <li>
        <a href="https://github.com/SchoolyB/Capstone/blob/master/README.md"
          ><img class="footerIcon" id="docIcon" src=${footer1}
        /></a>
      </li>
      <li>
        <a href="https://github.com/SchoolyB"
          ><img class="footerIcon" id="githubIcon" src=${footer2}
        /></a>
      </li>
      <li>
        <a href="#Translator"
          ><img class="footerIcon" id="translateIcon" src=${footer3}
        /></a>
      </li>
      <li>
        <a href="Home"
          ><img class="footerIcon" id="homeIcon" src=${footer4}
        /></a>
      </li>
    </ul>
  </footer>
`;

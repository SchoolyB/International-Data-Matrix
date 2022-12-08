import html from "html-literal";
import footer1 from "../assets/images/Branding/home.svg";
import footer2 from "../assets/images/Branding/mail.svg";
import footer3 from "../assets/images/Branding/page.svg";
import footer4 from "../assets/images/Branding/comments.svg";

export default () => html`
  <footer>
    <ul id="webPageInfo">
      <li>Author: Marshall Burns</li>
      </ul>
    <ul id="footerIconContainer">
      <li>
      <li>
        <a href="Home"
          ><img class="footerIcon" id="homeIcon" src=${footer1}
        /></a>
      </li>
        <a href="https://github.com/SchoolyB/Capstone/blob/master/README.md"
          ><img class="footerIcon" id="docIcon" src=${footer3}
        /></a>
      </li>
      <li>
        <a href="#Translator"
          ><img class="footerIcon" id="translateIcon" src=${footer4}
        /></a>
      </li>

      <li id="footerContactIcon">
        <a href="Contact"
          ><img class="footerIcon" id="ContactIcon" src=${footer2}
        /></a>
      </li>
    </ul>
  </footer>
`;

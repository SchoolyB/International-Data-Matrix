import footer1 from "../../assets/footerIcons/home.svg";
import footer2 from "../../assets/footerIcons/mail.svg";
import footer3 from "../../assets/footerIcons/page.svg";
import footer4 from "../../assets/footerIcons/comments.svg";
import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer>
        <ul id="webPageInfo">
          <li>Author: Marshall Burns</li>
          </ul>
        <ul id="footerIconContainer">
          <li>
          <li>
            <a title='Home' href="Home"
              ><img className="footerIcon" id="homeIcon" src={footer1}
            /></a>
          </li>
            <a href="https://github.com/SchoolyB/Capstone/blob/master/README.md"
              ><img className="footerIcon" id="docIcon" src={footer3}
            /></a>
          </li>
          <li>
            <a title='Translator'   href="Translator"><img className="footerIcon" id="translateIcon" src={footer4}/></a>
          </li>

          <li id="footerContactIcon">
            <a  title='Contact' href="Contact"
              ><img className="footerIcon" id="ContactIcon" src={footer2}/></a>
          </li>
        </ul>
      </footer>
    </div>
  )
}

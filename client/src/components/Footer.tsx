import footer1 from "../../assets/footerIcons/home.svg";
import footer2 from "../../assets/footerIcons/mail.svg";
import footer3 from "../../assets/footerIcons/page.svg";
import footer4 from "../../assets/footerIcons/comments.svg";
import React from 'react'

export default function Footer() {
  return (
      <footer>
        {/* author name */}
        <ul id="webPageInfo">
          <li>Author: Marshall Burns</li>
          </ul>
        {/*footer icons*/}

        <ul id="footerIconContainer">
        {/* home icon */}
          <li>
            <a title='Home' href="Home"
              ><img title="Home"  className="footerIcon" id="homeIcon" src={footer1}
            /></a>
          </li>

        {/* documentation icon */}
          <li>
            <a  title="Documentation" href="https://github.com/SchoolyB/Capstone/blob/master/README.md"
              ><img title="Documentation" className="footerIcon" id="docIcon" src={footer3}
            /></a>
          </li>

          {/* translator icon */}
          <li>
            <a title='Translator'   href="Translator"><img title="Translator" className="footerIcon" id="translateIcon" src={footer4}/></a>
          </li>

        {/* contact icon */}
          <li id="footerContactIcon">
            <a  title='Contact' href="Contact"
              ><img title="Contact" className="footerIcon" id="ContactIcon" src={footer2}/></a>
          </li>
        </ul>
      </footer>
  )
}

import home from '../../assets/footerIcons/home.svg'
import contact from '../../assets/footerIcons/mail.svg'
import documentation from '../../assets/footerIcons/page.svg'
import translator from '../../assets/footerIcons/comments.svg'
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
                    <a title="Home" href="/">
                        <img title="Home" className="footerIcon" id="homeIcon" src={home} />
                    </a>
                </li>

                {/* documentation icon */}
                <li>
                    <a
                        title="Documentation"
                        href="https://github.com/SchoolyB/Capstone/blob/master/README.md"
                    >
                        <img
                            title="Documentation"
                            className="footerIcon"
                            id="docIcon"
                            src={documentation}
                        />
                    </a>
                </li>

                {/* translator icon */}
                <li>
                    <a title="Translator" href="Translator">
                        <img
                            title="Translator"
                            className="footerIcon"
                            id="translateIcon"
                            src={translator}
                        />
                    </a>
                </li>

                {/* contact icon */}
                <li id="footerContactIcon">
                    <a title="Contact" href="Contact">
                        <img
                            title="Contact"
                            className="footerIcon"
                            id="ContactIcon"
                            src={contact}
                        />
                    </a>
                </li>

                <li>
                    <a title="Map" href="Map">
                        ---Map-Icon---
                    </a>
                </li>
            </ul>
        </footer>
    )
}

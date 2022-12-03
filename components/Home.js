import html from "html-literal";
import flagA from "../assets/images/flag-of-Belarus.png";
import flagB from "../assets/images/flag-of-Japan.png";
import flagC from "../assets/images/flag-of-Morocco.png";
import flagD from "../assets/images/flag-of-United-States-of-America.png";
import flagE from "../assets/images/flag-of-Australia.png";
import flagF from "../assets/images/flag-of-Greece.png";
import flagG from "../assets/images/flag-of-Nepal.png";
import flagH from "../assets/images/flag-of-Sudan.png";
import flagI from "../assets/images/flag-of-Venezuela.png";

export default () => html`
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <div id="container">
        <div class="country" id="australia">
          <h3 class="countryHeading">
            Australia
          </h3>
          <img
            class="flag"
            id="australiaFlagHome"
            src=${flagE}
            alt="Flag of Australia"
          />
          <div class="data">
            <p>Population:</p>
            <p>GDP: 1.54 trillion USD</p>
            <p>Land Mass: 2.968 million square miles</p>
          </div>
        </div>

        <div class="country" id="belarus">
          <h3 class="countryHeading">
            Belarus
          </h3>
          <img
            class="flag"
            id="belarusFlagHome"
            src=${flagA}
            alt="Flag of Belarus"
          />
          <div class="data">
            <p class="stats">Population:</p>
            <p class="stats">GDP: 68.22 billion USD</p>
            <p class="stats">Land Mass: 80,155 square miles</p>
            <!--Land mass is in square miles or "mi2"-->
          </div>
        </div>

        <div class="country" id="greece">
          <h3 class="countryHeading">
            Greece
          </h3>
          <img
            class="flag"
            id="greeceFlagHome"
            src=${flagF}
            alt="Flag of Greece"
          />
          <div class="data">
            <p>Population:</p>
            <p>GDP: 216.20 billion USD</p>
            <p>Land Mass: 50,949 square miles</p>
          </div>
        </div>

        <div class="country" id="japan">
          <h3 class="countryHeading">
            Japan
          </h3>
          <img
            class="flag"
            id="japanFlagHome"
            src=${flagB}
            alt="Flag of Japan"
          />
          <div class="data">
            <p>Population:</p>
            <p>GDP: 4.93 trillion USD</p>
            <p>Land Mass: 145,937 square miles</p>
          </div>
        </div>

        <div class="country" id="morocco">
          <h3 class="countryHeading">
            Morocco
          </h3>
          <img
            class="flag"
            id="moroccoFlagHome"
            src=${flagC}
            alt="Flag of Morocco"
          />
          <div class="data">
            <p>Population:</p>
            <p>GDP: 132.70 billion USD</p>
            <p>Land Mass: 274,461 square miles</p>
          </div>
        </div>

        <div class="country" id="nepal">
          <h3 class="countryHeading">
            Nepal
          </h3>
          <img
            class="flag"
            id="nepalFlagHome"
            src=${flagG}
            alt="Flag of Nepal"
          />
          <div class="data">
            <p>Population:</p>
            <p>GDP: 36.29 billion USD</p>
            <p>Land Mass: 56,827 square miles</p>
          </div>
        </div>

        <div class="country" id="Sudan">
          <h3 class="countryHeading">
            Sudan
          </h3>
          <img
            class="flag"
            id="sudanFlagHome"
            src=${flagH}
            alt="Flag of Sudan"
          />
          <div class="data">
            <p>Population:</p>
            <p>GDP: 34.33 billion USD</p>
            <p>Land Mass: 718,700 square miles</p>
          </div>
        </div>

        <div class="country" id="usa">
          <h3 class="countryHeading">
            United States of America
          </h3>
          <img
            class="flag"
            id="usaFlagHome"
            src=${flagD}
            alt="Flag of The United States of America"
          />
          <div class="data">
            <p>Population:</p>
            <p>GDP: 23 trillion USD</p>
            <p>Land Mass: 3.797 million square miles</p>
          </div>
        </div>

        <div class="country" id="venezuela">
          <h3 class="countryHeading">
            Venezuela
          </h3>
          <img
            class="flag"
            id="venezuelaFlagHome"
            src=${flagI}
            alt="Flag of Venezuela"
          />
          <div class="data">
            <p>Population:</p>
            <p>GDP: 150 billion USD</p>
            <p>Land Mass: 353,841 square miles</p>
          </div>
        </div>
      </div>
    </body>
  </html>
`;

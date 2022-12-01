import html from "html-literal";
export default () => html`
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <div class="country" id="belarus">
        <h3>
          Belarus
        </h3>
        <img
          class="flag"
          id="belarusFlag"
          src="assets/images/flag-of-Belarus.png"
          alt="Flag of Belarus"
        />
        <p>Population:</p>
        <p>GDP: 68.22 billion USD</p>
        <p>Land Mass: 80,155 square miles</p>
        <!--Land mass is in square miles or "mi2"-->
      </div>
      ;

      <div class="country" id="japan">
        <h3>
          Japan
        </h3>
        <img
          class="flag"
          id="japanFlag"
          src="assets/images/flag-of-Japan.png"
          alt="Flag of Japan"
        />
        <p>Population:</p>
        <p>GDP: 4.93 trillion USD</p>
        <p>Land Mass: 145,937 square miles</p>
      </div>
      ;

      <div class="country" id="morocco">
        <h3>
          Morocco
        </h3>
        <img
          class="flag"
          id="moroccoFlag"
          src="assets/images/flag-of-Morocco.png"
          alt="Flag of Morocco"
        />
        <p>Population:</p>
        <p>GDP: 132.70 billion USD</p>
        <p>Land Mass: 274,461 square miles</p>
      </div>
      ;

      <div class="country" id="usa">
        <h3>
          United States of America
        </h3>
        <img
          class="flag"
          id="usaFlag"
          src="assets/images/flag-of-United-States-of-America.png"
          alt="Flag of The United States of America"
        />
        <p>Population:</p>
        <p>GDP: 23 trillion USD</p>
        <p>Land Mass: 3.797 million square miles</p>
      </div>
      ;
    </body>
  </html>
`;

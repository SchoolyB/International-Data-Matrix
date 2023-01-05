![TIDM Logo](./assets/images/Branding/logo-no-background.png)

### The What -
Welcome to The International Data Matrix (The IDM) Documentation. This started as a capstone project for my coding boot camp but I want to see it grow and see others use it.


### The When -
This project is still a work in progress. That being said nothing is finalized and all code is subject to change.


### The Why -
Being such a fan of history and geography. I thought it best to make this project not only to challenge myself but also give myself a reason to stay motivated throughout the process.

"Find something you love to do and you'll never work a day in your life."

-Anonymous

### The How -
This project is a SPA(single page application) was done in Vanilla JavaScript. Our boot camp <b><i>PROHIBITED</i></b> the use of certain softwares, frameworks, and libraries including but not limited to:
- [React](https://reactjs.org/)
- [Angular](https://angular.io/)
- [Vue](https://vuejs.org/)
- [Svelte](https://svelte.dev/)
- [Sass](https://sass-lang.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Bootstrap](https://getbootstrap.com/)

Or anything similar to the tools listed above

My understanding is that that decision was made so that we(the students) focus on vanilla HTML/CSS & JavaScript and when the time comes to learn those new tools we are already ahead rather that starting completely from scratch. The following list contains is the tech stack that was used for this project:
- [VS Code](https://code.visualstudio.com/)
- [NodeJS](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
  <i>The following npm packages</i>
  - [serve](https://www.npmjs.com/package/serve)
  - [html-literal](https://www.npmjs.com/package/html-literal)
  - [parcel](https://parceljs.org/)
  - [lodash](https://www.npmjs.com/package/lodash)
  - [navigo](https://github.com/krasimir/navigo)
  - [dotenv](https://github.com/motdotla/dotenv)
  - [nodemon](https://www.npmjs.com/package/nodemon)
  - [Express](https://expressjs.com/)
  - [mongoose](https://www.npmjs.com/package/mongoose)
- [The lit-html vscode extension](https://marketplace.visualstudio.com/items?itemName=bierner.lit-html)

- [Insomnia](https://insomnia.rest/)
- [Netlfiy](https://www.netlify.com/?utm_source=google&utm_medium=paid_search&utm_campaign=12755510784&adgroup=118788138897&utm_term=netlify&utm_content=kwd-371509120223&creative=514583565825&device=c&matchtype=e&location=9021584)
- [MongoDB](https://www.mongodb.com/)
- [Render](https://render.com/)

### Get To The Point -

So with all of that out of the way lets talk about what The IDM is. The International Data Matrix is a web app developed by Marshall Burns a.k.a Schooly. The application is meant to act as a central place on the internet that anyone can access to gain historical, cultural, religious, geographical, geo-economical and geo-political understanding about any country in the world and the people that reside in them; Without having to go through the clutter of wikipedia or have multiple google tabs open. Another key function of this app is the built-in translator. An example of each page will be given to explain how the application works. These examples  will be provided in the form of screenshots. There will also be code snippets to explain in greater detail how some portions of the app was made.

### Project Structure -
As mentioned in [The How](https://github.com/SchoolyB/Capstone/tree/master#the-why--) section one of the stipulations for this project was that I could not use any frameworks or libraries like React, Angular, Vue, Svelte, etc. Because of that the SPA had to be built using vanilla JavaScript components, views, state, and bundled all up with [Parcel](https://parceljs.org/). Below are examples of the projects code directory structure.
###### <i>"ROOT" DIRECTORY STRUCTURE</i>
<img src="./assets/images/README/rootDirectory.JPG">

###### <i>"COMPONENTS" DIRECTORY STRUCTURE</i>
Click [here](https://github.com/SchoolyB/Capstone/tree/master/components) to visit the "components" directory

<img src="./assets/images/README/componentsDirectory.JPG">

###### <i> "VIEWS" DIRECTORY STRUCTURE</i>
Click [here](https://github.com/SchoolyB/Capstone/tree/master/components/views) to visit the "views" directory

<img src="./assets/images/README/viewsDirectory.JPG">

###### <i>"STORE" DIRECTORY STRUCTURE</i>

Click [here](https://github.com/SchoolyB/Capstone/tree/master/store) to visit the "store' Directory

<img src="./assets/images/README/storeDirectory.JPG">

 *** NOTE THAT ALL SCREENSHOTS BELOW ARE A REPRESENTATION OF HOW THE APPLICATIONS PAGES OR "VIEWS" LOOKED WHEN CREATING THE DOCUMENTATION AND WILL BE UPDATED AS THE PAGES CONTINUE TO UPDATE ***
### The Home Page -
Anytime someone wants to access The IDM they will be taken to the the [home page](https://internationaldatamatrix.netlify.app/Home). At present the following elements on the home page can be interacted with :

 - The "IDM" Logo/Nav button -

which is located in the top left corner of the page can be clicked and will open the navigation menu on the left side of the screen.

 - The Search Bar -

which is located in the top right corner of the page and is explained in the "The Search Bar" section below.

 - The "View Countries" Button -

which is located beneath the welcome prompt located at the center of the screen and is explained in the "The View Countries Button" section below

 - The Footer Icons -
which is located at the bottom of page/view. Currently there are four icons that will take the user to the following linked wep pages starting from left going right they are:
    - [Home](https://internationaldatamatrix.netlify.app/Home)
    - [Documentation](https://github.com/SchoolyB/Capstone/blob/master/README.md)
    - [Translator](https://internationaldatamatrix.netlify.app/Translator)
    - [Contact](https://internationaldatamatrix.netlify.app/Contact)


<img src="./assets/images/README/homeScreen.JPG">

### The Search Bar -
The search bar is one of my favorite elements of the application. The search bar is found on every page and currently acts as a quick and easy tool the user can use to enter letters or full names of a country; once the user has finished entering the desired text they can click the enter key on their keyboard or click the globe icon located to the right the bar to populate all countries whose name fits that search query on screen. *** ***Please Note that at least one letter is required before you can click the globe icon or the enter key***  ***. In the future I hope to add population, gross domestic product, and regional/continental location filtering to this feature.
<img src= "./assets/images/README/searchbtn.jpg">

The search bar allows the user to enter a series of letters to search for a country. For example if the user wants to learn more about the "USA" they could simply type "usa" and press enter or click the search button next to the input field; any country that has the letters that the user entered in that particular order will populate on screen. If the user entered "us" any country with the letters "u" and "s" in that order in its name would populate in screen. For example: A<u>us</u>tralia & Belar<u>us</u>.

<i>Code snippet for the search feature</i>

```
 const inputs = event.target.elements;
      console.log(inputs.countryFilter.value);
      store.Countries.filteredData = store.Countries.countryData.filter(
        country =>
          country.name
            .toUpperCase()
            .includes(inputs.countryFilter.value.toUpperCase())
      );
      console.log(store.Countries.filteredData);
      router.navigate("/countries");
```
<img src= "./assets/images/README/specificCountryFilter.JPG">

The search bar works the same way with singular letters. IF the user wants to to search through any country that has a "u" in its name they can simply type "u" and once they press enter and country with "u" in its name no matter where the letter is will populate on screen. For example: A<u>u</u>stralia, Belar<u>u</u>s, S<u>u</u>dan, <u>U</u>sa, & Venez<u>u</u>ela.

<img src= "./assets/images/README/notSoSpecificCountryFilter.JPG">

### The View Countries Button -
When clicked the View Countries button on the home screen will take the user to the [country selection](https://internationaldatamatrix.netlify.app/Countries) page where they have will be able to choose from a full list of countries that are currently supported withing the application.
<img src= "./assets/images/README/viewcContriesBtn.jpg" >

### Country Selection Page    -
The country selection page shows a container in the center of the page that houses a "country tab" dedicated to each country that is currently integrated into the "IDM". Each "country tab" has a countries name, GDP, land mass in square miles and an image of that countries flag. All of the data of each country tab comes directly from an API that I built. Here is a snippet the data that country tabs/objects receive from the API.

``` {"_id"{"$oid":"63aca1ddf874fa4963672a43"},
"name":"Australia",
"link":"Australia",
"flag":"Australia",
"flagAlt":"The flag of austrlia",
"landMass":"Land Mass: 2.968 million mi2",
"gdp":"GDP: 1.54 trillion USD",
"__v":{"$numberInt":"0"}}
```
<!-- possibly  build repo for api and add more data to it-->
 The header of the "country selection" page gives clear instructions to users on what they can. Once the user hovers over a country tab's flag a bouncing animation will start. Once the user clicks on the flag they will be taken to the corresponding page for that country.

<img src="./assets/images/README/countrySelectionScreen.JPG">

### A Country Page -
Every country that is currently supported in the International Data Matrix has a corresponding "Country Page". A country page displays data that was queried from the following API sources:

- [The News API](https://www.thenewsapi.com/)
- [Rest Countries](https://restcountries.com/)
- [OpenWeather](https://openweathermap.org/api)

The History sections of each country page are populated with text that was "hard-coded" into the html due to the fact that I couldn't find a free API that had the large amount of data that was needed to build the project the way I wanted to.

Each country's name in English is displayed at the top of the page as an h1 element. Beneath that h1 element is an h2 element that displays the name of the country in the native language of that country.

For each country page there is a "meta data container" on the right side of the page that houses the following data from the [Rest Countries](https://restcountries.com/) API & the [OpenWeather](https://openweathermap.org/api) API:

- The Region and Subregion of the country is in
- The name of the capitol city of the country
- The latitude and longitude coordinates of the capitol city
- The current weather and temperature in fahrenheit in the capitol city
- The approximate population of the country
- The country's 2 & 3 digit alpha codes
- The country's national currency information
- The country's calling code
- All the timezones that are within the country

Here is a code snippet of the a country page's meta data container

``` <div class="metaDataContainer">
      <img
        class="longCountryInfoFlag"
        id="australiaInfoFlag"
        src=${flag}
        alt="The
        Flag
        of
        Australia"
      />
      <div class="genInformationContainer">
      <p class="genInfoRegion">
          <u>${state.info.name}</u> Is Located In The Region of
          <u>${state.info.region}</u><br />
          And The Subregion of <u>${state.info.subregion}</u>
        </p>
        <p class="genInfoSubRegion"></p>
        <p class="genInfoCapitolCity">
          The Capitol of <u>${state.info.name}</u> is
          <u>${state.info.Capital}</u><br></br>
          <u>${state.info.Capital}</u> is located at<br> Lat: <u>${
  state.Weather.lat
}</u> Lon: <u>${state.Weather.lon}</u><br><br>

```




<img src= "./assets/images/README/countryPage.JPG">

### The Translator -
My favorite feature...the built in translator using the [DeepL](https://www.deepl.com/translator) translator API. The IDM translator has an input area on the left of the gray container and an output area on the right. A user can select any languages from the drop-down menu located above the output area. ***NOTE THAT CURRENTLY THE ONLY SUPPORTED INPUT LANGUAGE IS ENGLISH*** When the user is ready to translate a letter, word, or phrase they can click the translate button located between the input and output areas to submit the data for translation.
<img src= "./assets/images/README/translator1.JPG">

Here is an example of how the selection dropdown looks.
<img src= "./assets/images/README/translator2.JPG">

Here is an example of an input in English and an output in the desired language of Bulgarian.
<img src= "./assets/images/README/translator3.JPG">

Here is a snippet of code from [App.js](https://github.com/SchoolyB/International-Data-Matrix/blob/master/server/app.js)

```
const deepl = require("deepl-node");

app.post("/translator", (request, response) => {
  const translator = new deepl.Translator(process.env.TRANSLATION_KEY);

  const sourceText = request.body.sourceText;
  const outputLanguage = request.body.outputLanguage;
  translator
    .translateText(sourceText, null, outputLanguage)
    .then(result => {
      console.log(result.text); // Bonjour, le monde !

      const responseBody = {
        //if a key in an obj doesnt have a colon anf a value JS auto assumes that the value is itself
        // same as writting sourceText: sourceText
        text: result.text //this
      };

      response.json(responseBody);
    })
    .catch(error => {
      console.error(error);
    });
});

```

Here is a snippet of code from [root index.js](https://github.com/SchoolyB/International-Data-Matrix/blob/master/index.js)

```
switch (state.view) {
    case "Translator":
      const form = document.getElementById("fullTranslateContainer");
      const output = document.getElementById("translateOutput");
      form.addEventListener("submit", event => {
        event.preventDefault();
        const inputs = event.target.elements;
        const sourceText = inputs.translateInput.value;
        const outputLanguage = inputs.outputLangSelect.value;
        const requestBody = {
          sourceText,
          outputLanguage
        };
        axios
          .post(
            "https://theinternationaldatamatrix.onrender.com/translator",
            requestBody
          )
          .then(response => {
            store.Translator.outputText = response.data.text;
            console.log(store.Translator.stuffs);
            output.value = response.data.text;
          });
      });
      break;
  }

```




### The Contact Page -
The contact page can be used for users to send their feedback to an email that was setup just for that purpose. The form uses a POST method and a [Formspree](https://formspree.io/) url as the action to send the data on submit. Feel free to give it a try :)

```
 <form action="https://formspree.io/f/mknelldn" method="POST">
      <label  class="contactLabel"id="contactName">
        <input class="contactInput" type="text" name = "name" placeholder="Enter your name"></input>
      </label>

```
<img src="./assets/images/README/contactPage.JPG">


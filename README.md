![TIDM Logo](./client/assets//Branding/logo-no-background.png)

  **Contributing**
Please see [CONTRIBUTING.md](https://github.com/SchoolyB/International-Data-Matrix/blob/master/CONTRIBUTING.md)
### The Tech Stack -
- [TypeScript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [NodeJS](https://nodejs.org/en/)
- [Fastify](https://www.fastify.io/)
- [MongoDB](https://www.mongodb.com/)
- [yarn](https://yarnpkg.com/)
 ##### <i> The following yarn packages:</i>
- <strong><i>Client Side</i></strong>
  - [sass](https://yarnpkg.com/?q=sass&p=1)
  - [google-map-react](https://yarnpkg.com/package/google-map-react)
  - [rsuite](https://yarnpkg.com/package/rsuite)
  - [vite-plugin-pages](https://yarnpkg.com/package/vite-plugin-pages)
  - [react-dom](https://www.yarnpkg.com/package/react-dom)
  - [react-router-dom](https://www.yarnpkg.com/package/react-router-dom)
  - [axios](https://www.yarnpkg.com/package/axios)
  - [markdown-it](https://www.yarnpkg.com/package/markdown-it)
- <strong><i>Server Side</i></strong>
  - [deepl-node](https://www.yarnpkg.com/package/deepl-node)
  - [dotenv](https://yarnpkg.com/package/dotenv)
  - [nodemon](https://www.yarnpkg.com/package/nodemon)
  - [mongoose](https://www.yarnpkg.com/package/mongoose)
  - [fastify](https://yarnpkg.com/package/fastify)
  - [fastify/mongodb](https://yarnpkg.com/package/@fastify/mongodb)
  - [fastify/cors](https://yarnpkg.com/package/@fastify/cors)
  - [fastify/rate-limit](https://yarnpkg.com/package/@fastify/rate-limit)
<br/>

- Client hosted on [Vercel](https://www.vercel.com/)
- Server hosted on [Render](https://www.render.com/)

## [The Home Page](https://international-data-matrix.vercel.app/) -
 ###### "Simplistic Design"
 <br>
 - The "View Countries" Button

Located beneath the welcome prompt in the center of the site

 - Nav menu

Located top right of the header


 - Footer Icons
    - [Home](https://international-data-matrix.vercel.app/)
    - [Translator](https://international-data-matrix.vercel.app/Translator)
    - [Contact](https://international-data-matrix.vercel.app/Contact)
    - [Map](https://international-data-matrix.vercel.app/Map)
    - [Documentation](https://github.com/SchoolyB/International-Data-Matrix#readme)



## The View Countries Button -
Will take the user to the [country selection](https://international-data-matrix.vercel.app/Countries) page.

## [Country Selection Page](https://international-data-matrix.vercel.app/Countries) -
Show a full list of all names and flags of all countries currently supported in the application. Also contains a search bar to filter through the list of countries.

<img src="/client/assets/README_assets/countryPage.JPG">

[Countries.tsx](https://github.com/SchoolyB/International-Data-Matrix/blob/master/client/src/Pages/Countries.tsx)
```JSX
export default function Countries() {
  const countryList = useContext(CountryContext)
  const search = useContext(SearchContext)

  const countryElement = countryList
    .filter(country => {
      return country.name.toLowerCase().includes(search.value.toLowerCase())
    })
    .map((country, index) => {
      return (
        <div key={index} className='country'>
          <h3 className='countryHeading'>{country.name}</h3>
          <a href={country.link}>
            <img
              className='flag'
              src={country.flag}
              alt={country.flagAlt}
              loading='lazy'
            />
          </a>
        </div>
      )
    })
```


### Country Informational Page -
Every country that is currently supported in the International Data Matrix has its own "Country Page". The all country pages are generated generated through the [id.tsx](https://github.com/SchoolyB/International-Data-Matrix/blob/master/client/src/pages/Country/%5Bid%5D.tsx) file.

[id.tsx](https://github.com/SchoolyB/International-Data-Matrix/blob/master/client/src/pages/Country/%5Bid%5D.tsx)

```JSX
<div className='overallCountryInfoContainer'>
      <div className='countryInfo'>
        <h1 id='countryEnglishName'>{state.name}</h1>
        <h4 id='countryNativeName'>{state.nativeName}</h4>
      </div>

      {/* Start of information right side of screen */}
      <div className='metaDataContainer'>
        <div className='countryFlagsAndMaps'>
          <img id='countryInfoFlag' src={state.flags.svg} alt={flagAltValue} />
          <img
            id='simpleMap'
            src={CurrentCountrySimpleMap}
            alt={simpleMapAlter}
          />
          <img
            id='locatorMap'
            src={CurrentCountryLocatorMap}
            alt={locatorMapAlter}
          />
        </div>
        {/* START OF META DATA CONTAINER TEXT */}

        {/* region & sub region information */}
        <div className='genInfoRegionAndSubregion metaDataSection'>
          <div className='region'>
            <h6>Region</h6> <u>{state.region}</u>
          </div>
          <div className='subregion'>
            <h6>Subregion</h6> <u>{state.subregion}</u>
          </div>
        </div>

        {/* population information */}
        <div className='genInfoPopulation metaDataSection'>
          <h6>Population</h6>
          Approx.<u>{state.population}</u>
        </div>

        {/* demonym information */}
        <div className='genInfoDemonym metaDataSection'>
          <h6>Demonym</h6>
          <u>{state.demonym}</u>
        </div>

        {/* iso code information */}
        <div className='genInfoISOCodes metaDataSection'>
          <div className='alpha2Code'>
            <h6>ISO 2 Code</h6>
            <u>{state.alpha2Code}</u>
          </div>
          <div className='alpha3Code'>
            <h6>ISO 3 Code</h6>
            <u>{state.alpha3Code}</u>
          </div>
        </div>

        {/* Start of weather component from '../../components/CountryWeather.tsx' */}
        <CountryWeather capital={state.capital} name={state.name} />
        {/* End of weather component from '../../components/CountryWeather.tsx' */}

        {/* start of currency information */}
        <div className='genInfoCurrency metaDataSection'>
          <div className='currencyName'>
            <h6>Currency Name</h6>
            <u>{currencyInfo?.name}</u>
          </div>
          <div className='currencySymbol'>
            <h6>Currency Symbol</h6>
            <u>{currencyInfo?.symbol}</u>
          </div>
          <div className='currencyCode'>
            <h6>Currency Code</h6>
            <u>{currencyInfo?.code}</u>
          </div>
        </div>

        {/* start of timezone information */}
        <div className='genInfoTimezones metaDataSection'>
          <h6>Timezones</h6>
          <u>{state.timezones}</u>
        </div>
      </div>
      {/* END OF META DATA CONTAINER TEXT */}

      {/* TOPICS */}

      {/* Geography */}
      <div id='topic'>
        <section className='topic' id='geography'>
          <h3>Geography</h3>
          <p dangerouslySetInnerHTML={{ __html: topics.geography }}></p>
        </section>

        {/* History */}
        <section className='topic' id='history'>
          <h3>History</h3>
          <p dangerouslySetInnerHTML={{ __html: topics.history }}></p>
        </section>

        {/* Demographics */}
        <section className='topic' id='demographics'>
          <h3>Demographics</h3>
          <p dangerouslySetInnerHTML={{ __html: topics.demographics }}></p>
        </section>

        {/* Culture */}
        <section className='topic' id='culture'>
          <h3>Culture</h3>
          <p dangerouslySetInnerHTML={{ __html: topics.culture }}></p>
        </section>

        {/* Religion */}
        <section className='topic' id='religion'>
          <h3>Religion</h3>
          <p dangerouslySetInnerHTML={{ __html: topics.religion }}></p>
        </section>
        {/* Government */}
        <section className='topic' id='government'>
          <h3>Government</h3>
          <p dangerouslySetInnerHTML={{ __html: topics.government }}></p>
        </section>

        {/* Economy */}
        <section className='topic' id='economy'>
          <h3>Economy</h3>
          <p dangerouslySetInnerHTML={{ __html: topics.economy }}></p>
        </section>
      </div>
    </div>
```

## [The Translator](https://international-data-matrix.vercel.app/Translator) -
Built using the [DeepL](https://www.deepl.com/translator) translator API.  ***NOTE THAT CURRENTLY THE ONLY SUPPORTED INPUT LANGUAGE IS ENGLISH***

<img src="/client/assets/README_assets/translatorPage.JPG">
[translateRoute.ts](https://github.com/SchoolyB/International-Data-Matrix/blob/master/server/src/routes/translateRoute.ts)

```JavaScript
const deepl = require("deepl-node");
app.post("/translator", (request, response) => {
  const translator = new deepl.Translator(process.env.TRANSLATION_KEY);

  const sourceText = request.body.sourceText;
  const outputLanguage = request.body.outputLanguage; //the language we want the output to be

  translator
    .translateText(sourceText, null, outputLanguage)
    .then((result) => {
      const responseBody = {
        //if a key in an obj doesn't have a colon and a value JS auto assumes that the value is itself
        // same as writing sourceText: sourceText
        text: result.text, //this
      };
      response.json(responseBody);
    })
    .catch((error) => {
      console.error(error);
    });
});
```

[App.ts](https://github.com/SchoolyB/International-Data-Matrix/blob/master/server/src/app.ts)

```JavaScript
const deepl = require("deepl-node");

app.post("/translator", (request, response) => {
  const translator = new deepl.Translator(process.env.TRANSLATION_KEY);

  const sourceText = request.body.sourceText;
  const outputLanguage = request.body.outputLanguage;
  translator
    .translateText(sourceText, null, outputLanguage)
    .then(result => {
      console.log(result.text);

      const responseBody = {
        text: result.text
      };

      response.json(responseBody);
    })
    .catch(error => {
      console.error(error);
    });
});
```

## [The Contact Page](https://international-data-matrix.vercel.app/Contact) -
This simple contact page allows users to submit their feedback that will then be sent to The IDM's email. The form uses a POST method and a [Formspree](https://formspree.io/) url as the action to send the data on submit. Feel free to give it a try :)

<img src="/client/assets/README_assets/contactPage.JPG">

```HTML
 <form action="https://formspree.io/f/mknelldn" method="POST">
      <label  class="contactLabel"id="contactName">
        <input class="contactInput" type="text" name = "name" placeholder="Enter your name"></input>
      </label>
```
## [The Map Page](https://international-data-matrix.vercel.app/Map) -

Builds map using the Google Maps API and the [google-map-react](https://www.npmjs.com/package/google-map-react) package


<img src="/client/assets/README_assets/mapPage.JPG">

```JSX
const map = () => {
const { isLoaded } = useLoadScript({
  googleMapsApiKey: `${mapKey}` || '',
})
const center = useMemo(() => ({ lat: 0, lng: 0 }), [])

return (
<div className="map">
  {!isLoaded ? (
  <h1 id="mapLoading">Loading...</h1>
) : (
  <GoogleMap
    mapContainerClassName="map-container"
    center={center}
    zoom={3.5}
  ></GoogleMap>
  )}
</div>
  )
}
```

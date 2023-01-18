TODO://Need to break down  all api calls and add them to respective includes TS file.
// ***DO NOT DELETE UNTIL DONE ADDING TO INCLUDES***
const router = new Navigo("/"); //initiating the "router" variable. uses the navigo library

// declaring what the render() will do
//if params are not defined defaults to empty object

function afterRender(state) {
  // console.log(params);
  // console.log(params.countryFilter);
  document
    .getElementById("countryFilterForm")
    .addEventListener("submit", event => {
      event.preventDefault();
      axios
        .get("http://localhost:5173/")
        .then(response => {
          const inputs = event.target.elements;
          console.log(inputs.countryFilter.value);
          store.Countries.filteredData = response.data.filter(country =>
            country.name
              .toUpperCase()
              .includes(inputs.countryFilter.value.toUpperCase())
          );
          console.log(store.Countries.filteredData);
          render(store.Countries);
        })
        .catch(err => console.log(err));

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
    });

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
}

// router hooks({}) need a switch case statement to tell the program to specify what data should appear on what particular view
// router.hooks({}) :before does all the data collection before the render method is executed
// thats why our APIs usually are called within the function
// WITHIN THE ROUTER.HOOKS() ALL COUNTRIES ARE IN ALPHABETICAL ORDER
router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    switch (view) {
      case "Countries":
        axios
          .get("https://theinternationaldatamatrix.onrender.com/countries")
          .then(response => {
            store.Countries.filteredData = response.data;

            done();
          })
          .catch(err => console.log(err));
        break;
      case "Australia":
        break;
      default:
        done();
    }
  }
});

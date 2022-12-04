import html from "html-literal";

export default () => html`
  <div id="translatorTable">
    <div id="translateInputContainer">
      <textarea
        id="input-text"
        placeholder="Please enter a word or phrase you would like to translate"
      >
      </textarea>
    </div>

    <button id="translateBtn">Translate</button>
    <div id="translateOutputContainer">
      <textarea
        id="output-text"
        placeholder="Enter Some Text In The Other Box
      And Hit the Translate Button!"
      ></textarea>
    </div>
  </div>
`;

const inputText = document.getElementById("input-text");
const outputText = document.getElementById("output-text");
const translatifyBtn = document.getElementById("translateBtn");

const apiUrl = "https://api.funtranslations.com/translate/"; //test API

const err = error => {
  //declaring an error to throw when something goes wrong
  alert("Something seems to have gone wrong. Please try again later");
  console.log("An error has occurred", error);
};

const clickHandler = () => {
  let text = inputText.value;
  let updatedUrl = apiUrl + "?text=" + text;

  fetch(updatedUrl)
    .then(response => response.json())
    .then(json => (outputText.innerText = json.contents.translated))
    .catch(err);
};

translatifyBtn.addEventListener("click", clickHandler);

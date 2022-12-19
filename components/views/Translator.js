import html from "html-literal";
import btn from "../../assets/images/translateBtn.png";
export default () => html`
  <form id="fullTranslateContainer">
    //change name to translateForm
    <div id="translatorContainer">
      <div id="inputSide">
        <select class="langSelect" id="inputLangSelect">
          <option>Arabic</option>
          <option>Belarusian</option>
          <option>English</option>
          <option>Greek</option>
          <option>Japanese</option>
          <option>Nepali</option>
          <option>Russian</option>
          <option>Spanish</option>
        </select>
        <div>
          <textarea
            id="translateInput"
            placeholder="Please enter a word or phrase to translate"
          ></textarea>
        </div>
      </div>

      <div>
        <button type="submit" id="translateBtn">
          <img src=${btn} />
        </button>
      </div>

      <div id="outputSide">
        <select class="langSelect" id="outputLangSelect">
          <!-- add languages back after testing -->
          <option value="es">Spanish</option>
        </select>
        <div>
          <textarea id="translateOutput" placeholder="Translation"></textarea>
        </div>
      </div>
    </div>
  </form>
`;

import html from "html-literal";
import btn from "../../assets/images/translateBtn.png";
export default () => html`
  <div id="fullTranslateContainer">
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
        <img type="submit" id="translateBtn" src=${btn} />
      </div>

      <div id="outputSide">
        <select class="langSelect" id="outputLangSelect">
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
          <textarea id="translateOutput" placeholder="Translation"></textarea>
        </div>
      </div>
    </div>
  </div>
`;

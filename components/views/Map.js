import html from "html-literal";

export default state => html`
  <div>
    <form>
      <label>Enter An Address Or location</label>
      <button type="submit">Submit</button>
    </form>
    <div id="mapContainer"></div>
  </div>
`;

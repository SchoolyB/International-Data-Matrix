import html from "html-literal";
import plane from "../assets/images/airplane.png";

export default state => html`
  <header>
    <h1>
      ${state.header}
    </h1>
  </header>
`;

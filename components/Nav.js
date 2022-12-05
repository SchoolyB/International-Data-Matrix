import html from "html-literal";

export default links => html`
  <nav>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      ${links
        .map(
          link =>
            `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
        )
        .join("")}
    </ul>
    <form action="http://localhost:1234" method="get">
    <label for="countryFilter">Filter Countries</label>
    <input id="countryFilter" name="countryFilter" type="text"></input>
    <input type="submit">
    </form>
  </nav>
`;

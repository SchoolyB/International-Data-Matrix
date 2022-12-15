import html from "html-literal";
export default links => html`
  <div id="nav">
      ${links
        .map(
          link =>
            `<a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a>`
        )
        .join("")}
    </ul>
  </div>
`;

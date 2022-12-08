import html from "html-literal";
export default () => html`
  <div id="contactContainer">
    <form action="https://formspree.io/f/mknelldn" method="POST">
      <label>
        <input type="text" name = "name" placeholder="Enter your name"></input>
      </label>
      <label>
        <input type="email" name="email" placeholder="Enter your email" />
      </label>
      <label>
        <textarea name="message" placeholder="Enter your message"></textarea>
      </label>
      <button  id="contactSubmitBtn" type="submit">Send</button>
    </form>
  </div>
`;

import html from "html-literal";
export default () => html`
  <div>
    <form action="https://formspree.io/f/mknelldn" method="POST">
      <label>
        Your email:
        <input type="email" name="email" />
      </label>
      <label>
        Your message:
        <textarea name="message"></textarea>
      </label>
      <!-- your other form fields go here -->
      <button type="submit">Send</button>
    </form>
  </div>
`;

import html from "html-literal";
export default () => html`
  <div id="contactContainer">
    <h1>Contact Me</h1>
    <form action="https://formspree.io/f/mknelldn" method="POST">
      <label  class="contactLabel"id="contactName">
        <input class="contactInput" type="text" name = "name" placeholder="Enter your name"></input>
      </label>
      <label class="contactLabel"id="contactEmail">
        <input  class="contactInput" type="email" name="email" placeholder="Enter your email" />
      </label>
      <label class="contactLabel" id="contactMsg">
        <textarea id="contactTextArea" rows="16" cols="35" name="message" placeholder="Enter your message"></textarea>
      </label>
      <button  id="contactSubmitBtn" type="submit"></button>

    </form>
  </div>
`;

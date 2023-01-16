import React from 'react'
import styles from "../"

export default function Contact() {
  return (
<div>
  <div id="contactContainer">
    <h1>Contact Me</h1>
    <form action="https://formspree.io/f/mknelldn" method="POST">
      <label  className="contactLabel"id="contactName">
        <input className="contactInput" type="text" name = "name" placeholder="Enter your name"></input>
      </label>
      <label className="contactLabel"id="contactEmail">
        <input  className="contactInput" type="email" name="email" placeholder="Enter your email" />
      </label>
      <label className="contactLabel" id="contactMsg">
            <textarea id="contactTextArea" rows={16} cols={35} name="message" placeholder="Enter your message"></textarea>
      </label>
      <button  title="submitButton"role="button" id="contactSubmitBtn" type="submit"></button>
    </form>
  </div>
</div>
  )
}

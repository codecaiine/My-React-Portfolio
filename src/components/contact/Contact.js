import { useState } from "react";
import './contact.scss';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="img" />
      </div>
      <div className="right">
        <h2>Contact Me</h2>
        <p>I’m interested in freelance opportunities –
           especially ambitious or large projects. However, 
           if you have other request or question, 
           don’t hesitate to use the form.</p>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  )
}

export default Contact;

import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <section className="section contact container">
      <h2 className="section__title">Get In Touch</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">
            Don't like forms? Send me an email. 👋
          </p>
        </div>
        <form action="" className="contact__form">
          <div className="contact__form-groub">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-inbut"
                placeholder="Insert your name"
              />
            </div>
            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-inbut"
                placeholder="Insert your email"
              />
            </div>
            <div className="contact__form-div contact__form-subject ">
              <input
                type="text"
                className="contact__form-inbut"
                placeholder="Insert your subject"
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <textarea
                name=""
                id=""
                className="contact__form-inbut"
                placeholder="Write your message"
                cols="30"
                rows="10"></textarea>
            </div>
            <button className="btn">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

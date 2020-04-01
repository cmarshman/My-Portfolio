import React from "react";
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';

function Contact () {
    return (
    <>
    <Header/>
    <br/>
    <div className="tile is-ancestor">
        <div className="tile is vertical is-11" id="tile">
          <div className="tile is-parent">
            <article className="tile is-child notification is-dark">
            <p className="title banana" id="about_me">Contact Me</p>
              <ContactForm/>
            </article>
          </div>
        </div>
      </div>
    </>
    );
}

export default Contact;
import React from 'react';
import '../style.css';

function ContactInfo (){
    return(
        <section>
          <p className="title">Contact Information</p>
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <article className="tile is-child box notification is-light">
                <a href="mailto: marshman.cory@gmail.com" id="external-links" target="_blank" rel="noopener noreferrer">
                <p className="subtitle has-text-centered"  >
                <i className="fas fa-envelope-square fa-7x"></i><br/>Email: marshman.cory@gmail.com
                </p>
                </a>
              </article>
          </div>
          <div className="tile is-parent">
              <article className="tile is-child box notification is-light">
                <p className="subtitle has-text-centered">
                <i className="fas fa-phone fa-7x"></i><br/>Phone: 980-228-8926
                </p>
              </article>
              </div>
            </div>
        </section>
    );
}

export default ContactInfo;
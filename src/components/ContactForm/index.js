import React, { useEffect } from 'react';
import $ from 'jquery';

function ContactForm() {
    
    useEffect(() => {
        $("#submit").click(function (){
            window.location.reload();
        })
    })
    
    return(
            <form action="https://formspree.io/xayokwql" method="POST" target="_blank" id='myForm'>
                <div className="field" id="contact_me">
                  <p className="control has-icons-left">
                    <input className="input" type="text" name="_replyto" placeholder="Email"/>
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control has-icons-left">
                    <input className="input" type="text" name="name" placeholder="Name"/>
                    <span className="icon is-small is-left">
                      <i className="fas fa-portrait"></i>
                    </span>
                  </p>
                </div>
                <textarea className="textarea" name="message"placeholder="Leave your comments . . ."></textarea>
                <br/>
                <div className="field">
                  <p className="control">
                    <button className="button is-success" onClick={useEffect} type="submit" id="submit">
                      Submit
                    </button>
                  </p>
                </div>
              </form>
    );
}

export default ContactForm;
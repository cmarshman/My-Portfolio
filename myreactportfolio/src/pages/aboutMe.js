import React from 'react';
import MyWork from '../components/MyWork';

function AboutMe () {
    return (
    <div class="tile is-ancestor">
    <div class="tile is-vertical is-11 " id="tile">
      <div class="tile is-parent">
        <article class="tile is-child notification is-dark">
          <p class="title" id="about_me">About Me</p>
          <p class="subtitle">I am a seasoned operations and project manager with 10+ years of management and business
            development experience. I am recognized for my natural aptitude at motivating staff, as well as for
            organizing promotional events and campaign sponsorship, I have a verifiable history of contributing directly
            to company growth and expansion. My professional focal points include Full Stack Web Development,
            multi-million dollar project management, budget forecasting, fundraising, program development, team
            leadership and training, technology solutions, and operations and project management. I deliver superior
            administration and expertise in effective communication, negotiation, as well as business acumen,
            operational analysis, and budget and resource management to support efficiency and maximum returns. </p>
          <br/>
          <p class="title">Contact Information</p>
          <a href="mailto: marshman.cory@gmail.com" target="_blank">
            <p class="subtitle has-text-centered"  id="external-links">Email: marshman.cory@gmail.com</p>
          </a>
          <p class="subtitle has-text-centered">
            Phone: 980-228-8926
          </p>
          <br/>
          <p class="title">External Links</p>
          <MyWork/>
          <br/>
          <div class="content is-clearfix">
            <p class="title">My Skill Set</p>
            <i class="fab fa-html5 fa-7x" id="icon"></i>
            <i class="fab fa-css3-alt fa-7x" id="icon"></i>
            <i class="fab fa-js fa-7x" id="icon"></i>
            <img src="assets/images/icons/jquery.png"/>
            <img src="assets/images/icons/mysql.png"/>
            <img src="assets/images/icons/mongodb.png"/>
            <i class="fab fa-node-js fa-7x" id="icon"></i>
            <i class="fab fa-react fa-7x" id="icon"></i>
            <img src="assets/images/icons/heroku.png"/>
            <i class="fab fa-github-square fa-7x" id="icon"></i>
            <img src="assets/images/icons/adobe-illustrator.png"/>
            <img src="assets/images/icons/adobe-photoshop.png"/>
          </div>
        </article>
      </div>
    </div>
  </div>
    );
}

export default AboutMe;
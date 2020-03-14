import React from 'react';
import MyWork from '../components/MyWork';
import MySkills from '../components/MySkills';
import ContactInfo from '../components/ContactInfo';
import Header from '../components/Header';

function AboutMe () {
    return (
    <>
    <Header/>
    <br/>
    <div className="tile is-ancestor">
    <div className="tile is-vertical is-11 " id="tile">
      <div className="tile is-parent">
        <article className="tile is-child notification is-dark">
          <p className="title" id="about_me">About Me</p>
          <p className="subtitle">I am a seasoned operations and project manager with 10+ years of management and business
            development experience. I am recognized for my natural aptitude at motivating staff, as well as for
            organizing promotional events and campaign sponsorship, I have a verifiable history of contributing directly
            to company growth and expansion. My professional focal points include Full Stack Web Development,
            multi-million dollar project management, budget forecasting, fundraising, program development, team
            leadership and training, technology solutions, and operations and project management. I deliver superior
            administration and expertise in effective communication, negotiation, as well as business acumen,
            operational analysis, and budget and resource management to support efficiency and maximum returns. </p>
          <br/>
          <ContactInfo/>
          <br/>
          <MyWork/>
          <br/>
          <MySkills/>
        </article>
      </div>
    </div>
  </div>
  </>
    );
}

export default AboutMe;
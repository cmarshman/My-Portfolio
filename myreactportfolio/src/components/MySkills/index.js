import React from 'react';

function MySkills () {
    return (
        <>
        <p className="title">My Skill Set</p>
        <div className="content is-clearfix">
            <i className="fab fa-html5 fa-7x" id="icon"></i>
            <i className="fab fa-css3-alt fa-7x" id="icon"></i>
            <i className="fab fa-js fa-7x" id="icon"></i>
            <img src="assets/images/icons/jquery.png" alt="jQuery"/>
            <img src="assets/images/icons/mysql.png" alt="mysql"/>
            <img src="assets/images/icons/mongodb.png" alt="mongoDB"/>
            <i className="fab fa-node-js fa-7x" id="icon"></i>
            <i className="fab fa-react fa-7x" id="icon"></i>
            <img src="assets/images/icons/heroku.png" alt="heroku"/>
            <i className="fab fa-github-square fa-7x" id="icon"></i>
            <img src="assets/images/icons/adobe-illustrator.png" alt="adobe-illustrator"/>
            <img src="assets/images/icons/adobe-photoshop.png" alt="photoshop"/>
          </div>
        </>
    )
}

export default MySkills;
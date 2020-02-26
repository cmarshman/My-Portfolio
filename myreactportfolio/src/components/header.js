import React from "react";

function Header() {
    return (
        <div>
            <div className="hero is-dark is-fullheight">
                <div className="hero-body" id="hero_picture">
                    <div className="container has-text-centered">
                        <br />
                        <a className="title" href="https://www.linkedin.com/in/cory-marshman-6aba24152/">
                            <img id="head_shot" src="assets/images/head_shot.png" alt="head_shot" />
                        </a>
                        <h1 className="title">
                            Cory Marshman
                        </h1>
                        <a href="#about_me">
                            <i className="fas fa-arrow-down fa-3x"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="hero-foot">
                <nav className="tabs is-boxed is-fullwidth">
                    <div className="container is-size-4">
                        <ul>
                            <li><a href="index.html" className="is-active">About Me</a></li>
                            <li><a href="portfolio.html">Portfolio</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Header
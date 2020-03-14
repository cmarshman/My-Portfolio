import React from 'react';
import Modals from '../components/Modals';
import Header from '../components/Header';

function MyPortfolio () {
    return (
    <>
    <Header/>
    <br/>
    <div className="tile is-ancestor">
        <div className="tile is-vertical is-11" id="tile">
            <div className="tile is-parent">
                <article className="tile is-child notification is-dark">
                    <p className="title banana" id="about_me">My Recent Work</p>
                    <div className="hero-body">
                        <section>
                            <div className="tile is-ancestor">
                                <div className="tile is-parent">
                                    <article className="tile is-child box notification is-light project" id="portfolioSelector" data-portfolio="portfolio1">
                                            <img id="profile-image"
                                                src="assets/images/intuitive_banana/home_page1.png"
                                                alt="IntuitiveBanana"/>
                                            <img id="profile-image"
                                                src="assets/images/intuitive_banana/home_page2.png"
                                                alt="IntuitiveBanana2"/>
                                    </article>
                                </div>
                                <div className="tile is-parent">
                                    <article className="tile is-child box notification is-light project" id="portfolioSelector" data-portfolio="portfolio6">
                                            <img id="profile-image"
                                                src="assets/images/burger/opening_page.png"
                                                alt="burger_app"/>
                                                <img id="profile-image"
                                                src="assets/images/burger/burger_app.png"
                                                alt="burger_app"/>
                                    </article>
                                </div>
                                <div className="tile is-parent">
                                    <article className="tile is-child box notification is-light project" id="portfolioSelector" data-portfolio="portfolio3">
                                            <img id="profile-image" src="assets/images/day_planner/page_opening.png"
                                            alt="DayPlanner"/>
                                            <img id="profile-image" src="assets/images/day_planner/local_storage.png"
                                             alt="DayPlanner2"/>
                                    </article>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="tile is-ancestor">
                            <div className="tile is-parent">
                                <article className="tile is-child box notification is-light project" id="portfolioSelector" data-portfolio="portfolio4">
                                        <img id="profile-image" src="assets/images/react-task-manager/home.png"
                                         alt="react-task-manager"/>
                                        <img id="profile-image" src="assets/images/react-task-manager/delete_add.png"
                                         alt="react-task-manager"/>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box notification is-light project" id="portfolioSelector" data-portfolio="portfolio5">
                                        <img id="profile-image" src="assets/images/note_taker/page_opening.png"
                                         alt="note_taker"/>
                                        <img id="profile-image" src="assets/images/note_taker/stored_in_json.png"
                                        alt="note_taker2"/>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box notification is-light project" id="portfolioSelector" data-portfolio="portfolio2">
                                        <img id="profile-image" src="assets/images/password_generator/beginning_prompt.png"
                                         alt="password_generator"/>
                                        <img id="profile-image" src="assets/images/password_generator/password_generated.png"
                                         alt="password_generator"/>
                                </article>
                            </div>
                        </div>
                        </section>
                        <br/>
                        <p className="title banana" id="recent_work">Projects Under Development</p>
                        <div className="tile is-ancestor">
                            <div className="tile is-parent">
                                <article className="tile is-child box notification is-light project" id="portfolioSelector" data-portfolio="portfolio8">
                                        <img id="Shoestring"
                                            src="assets/images/shoestring/login.png"
                                            alt="Shoestring"/>
                                        <img id="Shoestring"
                                            src="assets/images/shoestring/user-wallet.png"
                                            alt="Shoestring2"/>
                                        <img id="Shoestring"
                                            src="assets/images/shoestring/hamburger.png"
                                            alt="Shoestring3"/>
                                        <img id="Shoestring"
                                            src="assets/images/shoestring/currency-changer.png"
                                            alt="Shoestring4"/>
                                </article>
                            </div>
                        </div>
                        <Modals/>
                        </div>
                </article>
            </div>
        </div>
    </div>
    </>
    );
}

export default MyPortfolio;
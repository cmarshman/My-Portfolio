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
                                    <article className="tile is-child box notification is-light project" id="portfolioSelector" data-portfolio="portfolio9">
                                            <img id="profile-image"
                                                src="assets/images/shoestringDashboard/home_page.png"
                                                alt="shoestring"/>
                                    </article>
                                </div>
                                <div className="tile is-parent">
                                    <article className="tile is-child box notification is-light project" id="portfolioSelector" data-portfolio="portfolio7">
                                            <img id="profile-image"
                                                src="assets/images/giftify/opening_screen.png"
                                                alt="giftify"/>
                                    </article>
                                </div>
                                <div className="tile is-parent">
                                    <article className="tile is-child box notification is-light project" id="portfolioSelector" data-portfolio="portfolio1">
                                            <img id="profile-image" src="assets/images/intuitive_banana/home_page1.png"
                                            alt="intuitive_banana"/>
                                    </article>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="tile is-ancestor">
                            <div className="tile is-parent">
                                <article className="tile is-child box notification is-light project" id="portfolioSelector" data-portfolio="portfolio6">
                                        <img id="profile-image" src="assets/images/burger/opening_page.png"
                                         alt="Eat-a-burger"/>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box notification is-light project" id="portfolioSelector" data-portfolio="portfolio5">
                                        <img id="profile-image" src="assets/images/note_taker/page_opening.png"
                                         alt="note_taker"/>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box notification is-light project" id="portfolioSelector" data-portfolio="portfolio10">
                                        <img id="profile-image" src="assets/images/employee_directory/opening_screen.png"
                                         alt="employee directory"/>
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
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box notification is-light project" id="portfolioSelector" data-portfolio="portfolio3">
                                        <img id="profile-image" src="assets/images/day_planner/page_opening.png"
                                         alt="note_taker"/>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box notification is-light project" id="portfolioSelector" data-portfolio="portfolio2">
                                        <img id="profile-image" src="assets/images/password_generator/beginning_prompt.png"
                                         alt="password_generator"/>
                                </article>
                            </div>
                        </div>
                        </section>
                        <section>
                            <div className="tile is-ancestor">
                            <div className="tile is-parent">
                                <article className="tile is-child box notification is-light project has-text-centered" id="portfolioSelector" data-portfolio="portfolio8">
                                        <img id="profile-image" src="assets/images/shoestring/login.png" height="200" width="100"
                                         alt="react-task-manager"/>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box notification is-light project" id="portfolioSelector" data-portfolio="portfolio11">
                                        <img id="profile-image" src="assets/images/budgetTracker/opening_screen.png"
                                         alt="note_taker"/>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box notification is-light project" id="portfolioSelector" data-portfolio="portfolio12">
                                        <img id="profile-image" src="assets/images/fitness-tracker/opening-page.png"
                                         alt="password_generator"/>
                                </article>
                            </div>
                        </div>
                        </section>
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
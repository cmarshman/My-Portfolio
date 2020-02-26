import React from 'react';

function MyPortfolio () {
    return (
    <div className="tile is-ancestor">
        <div className="tile is-vertical is-11" id="tile">
            <div className="tile is-parent">
                <article className="tile is-child notification is-dark">
                    <p className="title banana" id="recent_work">My Recent Work</p>
                    <div className="hero-body">
                        <section>
                            <div className="tile is-ancestor">
                                <div className="tile is-parent">
                                    <article className="tile is-child box notification is-light project" id="portfolioSelector" data-portfolio="portfolio1">
                                            <img id="IntuitiveBanana"
                                                src="assets/images/intuitive_banana/home_page1.png"
                                                style="width:450px;height:200px;"
                                                alt="IntuitiveBanana"/>
                                            <img id="IntuitiveBanana2"
                                                src="assets/images/intuitive_banana/home_page2.png"
                                                style="width:450px;height:200px;"
                                                alt="IntuitiveBanana2"/>
                                    </article>
                                </div>
                                <div className="tile is-parent">
                                    <article className="tile is-child box notification is-light project" id="portfolioSelector" data-portfolio="portfolio6">
                                            <img id="burger_app"
                                                src="assets/images/burger/opening_page.png"
                                                style="width:400px;height:200px;"
                                                alt="burger_app"/>
                                                <img id="burger_app"
                                                src="assets/images/burger/burger_app.png"
                                                style="width:400px;height:200px;"
                                                alt="burger_app"/>
                                    </article>
                                </div>
                                <div className="tile is-parent">
                                    <article className="tile is-child box notification is-light project" id="portfolioSelector" data-portfolio="portfolio3">
                                            <img id="DayPlanner" src="assets/images/day_planner/page_opening.png"
                                            style="width:400px;height:200px;" alt="DayPlanner"/>
                                            <img id="DayPlanner2" src="assets/images/day_planner/local_storage.png"
                                            style="width:400px;height:200px;" alt="DayPlanner2"/>
                                    </article>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="tile is-ancestor">
                            <div className="tile is-parent">
                                <article className="tile is-child box notification is-light project" id="portfolioSelector" data-portfolio="portfolio4">
                                        <img id="react-task-manager" src="assets/images/react-task-manager/home.png"
                                        style="width:400px;height:200px;" alt="react-task-manager"/>
                                        <img id="react-task-manager" src="assets/images/react-task-manager/delete_add.png"
                                        style="width:400px;height:200px;" alt="react-task-manager"/>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box notification is-light project" id="portfolioSelector" data-portfolio="portfolio5">
                                        <img id="note_taker" src="assets/images/note_taker/page_opening.png"
                                        style="width:400px;height:200px;" alt="note_taker"/>
                                        <img id="note_taker" src="assets/images/note_taker/stored_in_json.png"
                                        style="width:400px;height:200px;" alt="note_taker2"/>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box notification is-light project" id="portfolioSelector" data-portfolio="portfolio2">
                                        <img id="password_generator" src="assets/images/password_generator/beginning_prompt.png"
                                        style="width:400px;height:200px;" alt="password_generator"/>
                                        <img id="password_generator" src="assets/images/password_generator/password_generated.png"
                                        style="width:400px;height:200px;" alt="password_generator"/>
                                </article>
                            </div>
                        </div>
                        </section>
                        </div>
                </article>
            </div>
        </div>
    </div>
    );
}

export default MyPortfolio;
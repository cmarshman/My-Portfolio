import React, { useEffect} from 'react';
import $ from 'jquery';

function Modals(){    

    useEffect(() => {
      const projectArray = {
        portfolio1: {
            name: "Intuitive Banana",
            description: "Intuitive Banana is a multifunctional web-based music application, which allows you to search your favorite artists, follow trending musicians and the top 5 trending songs on Billboard, read up on the most recent music news per genre, check out local concerts and follow a link to buy tickets.",
            development: "Bulma.io, HTML5, CSS, JavaScrip, JQuery, NY Times API, Ticket Master API AudioDB API, GitHub ",
            deployedURL: "https://drbailey13.github.io/IntuitiveBanana/index.html",
            githubURL: "https://github.com/cmarshman/IntuitiveBanana",
            images: {
                one: "./assets/images/intuitive_banana/home_page1.png",
                two: "./assets/images/intuitive_banana/featured_artist.png",
                three: "./assets/images/intuitive_banana/music_news.png",
                four: "./assets/images/intuitive_banana/search.png"
            }
        },
        portfolio2: {
            name: "Password Generator",
            description: "Password Generator is a web-based application which allows users to generate random passwords, copy them and paste them on an additional page.",
            development: "HTML5, CSS, JavaScript, GitHub",
            deployedURL: "https://cmarshman.github.io/passwordgenerator/index.html",
            githubURL: "https://github.com/cmarshman/passwordgenerator",
            images: {
                one: "assets/images/password_generator/beginning_prompt.png",
                two: "assets/images/password_generator/password_length.png",
                three: "assets/images/password_generator/password_generated.png",
                four: "assets/images/password_generator/copy_to_clipboard.png"
            }
        },
        portfolio3: {
            name: "Day Planner",
            description: "Day Planner is a web-based local storage application, which allows users to log appointments. These appointments will stay in place even in the event the page is refreshed. It also tracks the date, causing the color to change through the day depending on the hours passed, present hour and future hours.",
            development: "HTML5, CSS, JavaScript, Moment, Bootstrap, GitHub",
            deployedURL: "https://cmarshman.github.io/day_planner/index.html",
            githubURL: "https://github.com/cmarshman/calendar",
            images: {
                one: "assets/images/day_planner/page_opening.png",
                two: "assets/images/day_planner/local_storage.png",
                three: "assets/images/day_planner/moments_color_change.png",
                four: "assets/images/day_planner/return_to_page.png"
            }
        },
        portfolio4: {
            name: "React Task Manager",
            description: "A react based todos manager with an imported api from jsonplaceholder.typicode.com and hosted on Heroku.",
            development: "HTML5, CSS, JavaScript, Bootstarps, JSON, Node.JS, React.js, Axios, UUID(Id randomization), Heroku, GitHub",
            deployedURL: "https://shielded-island-39719.herokuapp.com/",
            githubURL: "https://github.com/cmarshman/react_todo_list",
            images: {
                one: "assets/images/react-task-manager/home.png",
                two: "assets/images/react-task-manager/about.png",
                three: "assets/images/react-task-manager/toggle_effect.png",
                four: "assets/images/react-task-manager/delete_add.png"
            }
        },
        portfolio5: {
            name: "Note Taker",
            description: "This page allows users to write notes, which are stored into a json file. Each note is assigned an id and the notes stay even when the page is refreshed or left.",
            development: "HTML5, CSS, JavaScript, Bootstarps, JSON, Node.JS, EXPRESS, Heroku, GitHub",
            deployedURL: "https://dry-lake-48846.herokuapp.com/",
            githubURL: "https://github.com/cmarshman/note_taker",
            images: {
                one: "assets/images/note_taker/page_opening.png",
                two: "assets/images/note_taker/notes_page.png",
                three: "assets/images/note_taker/stored_in_json.png",
                four: "assets/images/note_taker/delete_notes.png"
            }
        },
        portfolio6: {
            name: "Eat-A-Burger",
            description: "This allows users to interact with a web-hosted database through JawsDB on Heroku. Users can order and eat their favorite burgers and keep a log of devoured burgers.",
            development: "Handlebars, Node.js, Express, CSS, JavaScript, Bulma.io, JawsDB, MySQL, Heroku, Github",
            deployedURL: "https://secret-plateau-38610.herokuapp.com/",
            githubURL: "https://github.com/cmarshman/burger",
            images: {
                one: "assets/images/burger/opening_page.png",
                two: "assets/images/burger/burger_app.png",
                three: "assets/images/burger/add_burger.png",
                four: "assets/images/burger/eat_burger.png"
            }
        },
        portfolio7: {
            name: "Giftify",
            description: "This application helps the user search for and buy the perfect gift for their special someone. They can choose from a selection of Featured and Top Rated Gifts, or they can search for a gift directly from the homepage.",
            development: "Handlebars, Node.js, Passport and Bcryptjs(user signup/login), JavaScript, JawsDB, Algolia DB, Sequelize, MySQL",
            deployedURL: "https://giftify-project2.herokuapp.com/",
            githubURL: "https://github.com/cmarshman/Giftify",
            images: {
                one: "assets/images/giftify/login.png",
                two: "assets/images/giftify/opening_screen.png",
                thre: "assets/images/giftify/etsy-api-search.png",
                four: "assets/images/giftify/algoliaDB.png"
            }
        },
        portfolio8: {
            name: "Shoestring Mobile Application",
            description: "Shoestring although still in development, is a peer to peer payment application that intergrates international payments no matter where you are in the world. We realized there is a gap in the market for a peer to peer payment system that can integrates currency conversion to send payments instantly both locally and internationally to anyone, anywhere.",
            development: "React Native, MongoDB, Javascript, Passport and Bcryptjs, JWT, Plaid API, Currency Converter API",
            deployedURL: "https://www.figma.com/proto/uqJHM2IyFmYsaFkPNux7YE/shoestring?node-id=8%3A23&scaling=scale-down",
            githubURL: "https://github.com/cmarshman/shoestring-rn-app",
            images: {
                one: "assets/images/shoestring/login.png",
                two: "assets/images/shoestring/user-wallet.png",
                three: "assets/images/shoestring/hamburger.png",
                four: "assets/images/shoestring/currency-changer.png"
            }
        },
        portfolio9: {
            name: "Shoestring User Dashboard",
            description: "Shoestring although still in development, is a peer to peer payment application that intergrates international payments no matter where you are in the world. We realized there is a gap in the market for a peer to peer payment system that can integrates currency conversion to send payments instantly both locally and internationally to anyone, anywhere.",
            development: "React, MongoDB, Javascript, Passport and Bcryptjs, JWT, Plaid API, Currency Converter API",
            deployedURL: "https://www.shoestring.me",
            githubURL: "https://github.com/cmarshman/shoestring",
            images: {
                one: "assets/images/shoestringDashboard/home_page.png",
                two: "assets/images/shoestringDashboard/login.png",
                three: "assets/images/shoestringDashboard/user_dashboard.png",
                four: "assets/images/shoestringDashboard/social_side.png"
            }
        },
        portfolio10: {
            name: "",
            description: "",
            development: "",
            deployedURL: "",
            githubURL: "",
            images: {
                one: "",
                two: "",
                three: "",
                four: ""
            }
        }
    }
    
    const modal = $("#projectDisplay");
    
    $(document).on("click", ".project", function () {
        const portfolio = $(this).attr("data-portfolio");
        $("#displayName").text(projectArray[portfolio].name);
        $("#description").text(projectArray[portfolio].description);
        $("#development").text(projectArray[portfolio].development);
        $(".img1").attr("src", projectArray[portfolio].images.one);
        $(".img2").attr("src", projectArray[portfolio].images.two);
        $(".img3").attr("src", projectArray[portfolio].images.three);
        $(".img4").attr("src", projectArray[portfolio].images.four);
        $("#displayURL").attr("href", projectArray[portfolio].deployedURL).text("Deployed URL");
        $("#displayURL2").attr("href", projectArray[portfolio].githubURL).text("GitHub Repo");
        modal.addClass('is-active');
    });
    
    $(".close-modal").on("click", function () {
        modal.removeClass("is-active");
    });
  })
  
    return (
        <div className="modal" id="projectDisplay">
        <div className="modal-background close-modal"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title pride" id="displayName"></p>
            <button className="delete close-modal" aria-label="close"></button>
          </header>
          <section className="modal-card-body">
            <div className="content has-text-centered">
                <div className="tile is-ancestor">
                    <div className="tile is-parent">
                      <article className="tile is-child box notification is-dark">
                        <a id="displayURL" target="_blank" rel="noopener noreferrer"></a>
                      </article>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child box notification is-dark">
                        <a id="displayURL2" target="_blank" rel="noopener noreferrer"></a>
                      </article>
                    </div>
                 </div>
                 <div className="tile is-ancestor">
                    <div className="tile is-parent">
                        <article className="tile is-child box notification is-dark">
                            <h5 className="sub">Description</h5>
                            <p id="description"></p>
                            <br/>
                            <h5 className="sub">Development</h5>
                            <p id="development"></p>
                        </article>
                    </div>
                 </div>
                 <h4>Screen Shots</h4>
                 <img className="img1" alt="profile_img_1"></img>
                 <img className="img2" alt="profile_img_2"></img>
                 <img className="img3" alt="profile_img_3"></img>
                 <img className="img4" alt="profile_img_4"></img>
                </div>
          </section>
          <footer className="modal-card-foot">
            <button className="button close-modal" onClick={useEffect}>Close</button>
          </footer>
        </div>
      </div>
    );
}

export default Modals;
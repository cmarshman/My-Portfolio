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
            four: "./assets/images/intuitive_banana/search.png",
            },
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
            four: "assets/images/password_generator/copy_to_clipboard.png",
        },
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
            four: "assets/images/day_planner/return_to_page.png",
        },
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
            four: "assets/images/react-task-manager/delete_add.png",
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
            four: "assets/images/note_taker/delete_notes.png",
        }
    },
    portfolio6: {
        name: "",
        description: "",
        development: "",
        deployedURL: "",
        githubURL: "",
        images: {
            one: "",
            two: "",
            three: "",
            four: "",
        }
    },
    portfolio7: {
        name: "",
        description: "",
        development: "",
        deployedURL: "",
        githubURL: "",
        images: {
            one: "",
            two: "",
            three: "",
            four: "",
        }
    },
    portfolio8: {
        name: "",
        description: "",
        development: "",
        deployedURL: "",
        githubURL: "",
        images: {
            one: "",
            two: "",
            three: "",
            four: "",
        }
    },
    portfolio9: {
        name: "",
        description: "",
        development: "",
        deployedURL: "",
        githubURL: "",
        images: {
            one: "",
            two: "",
            three: "",
            four: "",
        }
    },
};
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

const modal = $("#projectDisplay");

$(".project").on("click", function () {
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

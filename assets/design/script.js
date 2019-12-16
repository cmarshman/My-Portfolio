const projectArray = {
    portfolio: {
        name: "Intuitive Banana",
        deployedURL: "https://drbailey13.github.io/IntuitiveBanana/index.html",
        githubURL: "https://github.com/cmarshman/IntuitiveBanana",
        images: {
            homePage: {
                one: "/assets/images/intuitive_banana/home_page/home_page1.png",
                two: "assets/images/intuitive_banana/home_page/home_page2.png"
            },
            featuredArtists: {
                one: "assets/images/intuitive_banana/featured_artist/featured_artist1.png",
                two: "assets/images/intuitive_banana/featured_artist/featured_artist2.png"
            },
            musicNews: {
                one: "assets/images/intuitive_banana/music_news/music_news1.png",
                two: "assets/images/intuitive_banana/music_news/music_news2.png",
                three: "assets/images/intuitive_banana/music_news/music_news3.png",
            },
            searchPage: {
                one: "assets/images/intuitive_banana/search/search1.png",
                two: "assets/images/intuitive_banana/search/search2.png",
                three: "assets/images/intuitive_banana/search/search3.png",
            },
        },
    },
    portfolio: {
        name: "day_planner",
        deployedURL: "https://cmarshman.github.io/day_planner/index.html",
        githubURL: "https://github.com/cmarshman/calendar",
        images: {
            one: "assets/images/day_planner/page_opening.png",
            two: "assets/images/day_planner/local_storage.png",
            three: "assets/images/day_planner/moments_color_change.png",
            four: "assets/images/day_planner/return_to_page.png"
        },
    },
    portfolio: {
        name: "password_generator",
        deployedURL: "https://cmarshman.github.io/passwordgenerator/index.html",
        githubURL: "https://github.com/cmarshman/passwordgenerator",
        images: {
            one: "assets/images/password_generator/beginning_prompt.png",
            two: "assets/images/password_generator/password_generated.png",
        },
    },
};
const modal = $("#projectDisplay");

$(".project").on("click", function () {
    const portfolio = $(this).attr("data-portfolio");
    console.log(portfolio);
    $("#displayName").text(projectArray.portfolio.name);
    $("img1").attr("src", projectArray.portfolio.images.homePage.one);
    $("#displayURL").attr("href", projectArray.portfolio.deployedURL).text("Deployed URL");
    $("#displayURL2").attr("href", projectArray.portfolio.githubURL).text("GitHub Repo");
    modal.addClass('is-active');
});

$(".close-modal").on("click", function () {
    modal.removeClass("is-active");
});

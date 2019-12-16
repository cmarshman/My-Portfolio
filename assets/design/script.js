const projectArray = {
    portfolio1: {
        name: "Intuitive Banana",
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
        deployedURL: "https://cmarshman.github.io/day_planner/index.html",
        githubURL: "https://github.com/cmarshman/calendar",
        images: {
            one: "assets/images/day_planner/page_opening.png",
            two: "assets/images/day_planner/local_storage.png",
            three: "assets/images/day_planner/moments_color_change.png",
            four: "assets/images/day_planner/return_to_page.png",
        },
    },
    
};
const modal = $("#projectDisplay");

$(".project").on("click", function () {
    const portfolio = $(this).attr("data-portfolio");
    $("#displayName").text(projectArray[portfolio].name);
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

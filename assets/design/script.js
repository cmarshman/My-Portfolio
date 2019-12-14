const modal = $("#newsDisplay");
const projectArray = {
    "portfolio1": {
    name : "Intuitive Banana",
    "https://drbailey13.github.io/IntuitiveBanana/index.html",
    "https://github.com/DrBailey13/IntuitiveBanana/tree/master",
    "../images/intuitive_banana/home_page/home_page1.png",
    "../images/intuitive_banana/home_page/home_page2.png",
    "../images/intuitive_banana/featured_artist/featured_artist1.png",
    "../images/intuitive_banana/featured_artist/featured_artist2.png"
    },
    "portfolio2": [
        "day_planner",
        "https://cmarshman.github.io/day_planner/index.html",
        "https://github.com/cmarshman/calendar",
        "../images/day_planner/page_opening.png",
        "../images/day_planner/local_storage.png",
        "../images/day_planner/moments_color_change.png",
        "../images/day_planner/return_to_page.png"
    ],
    "portfolio3": [
        "password_generator",
        "https://cmarshman.github.io/passwordgenerator/index.html",
        "https://github.com/cmarshman/passwordgenerator",
        "../images/password_generator/beginning_prompt.png",
        "../images/password_generator/password_generated.png"
    ],
};


$(".project").on("click",function() {
    const portfolio = $(this).attr("data-portfolio");
    console.log(portfolio);
    $("#displayTitle").text(projectArray.portfolio1[0])
});

$(".close-modal").on("click",function(){
    modal.removeClass("is-active");
});

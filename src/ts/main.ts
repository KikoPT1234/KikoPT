$(document).ready(() => {
    if ($(window).outerWidth() <= 900) $(".header").css("height", $(".block-1").outerHeight() + $(".header h2").outerHeight() + 50);
    $(window).on("resize", () => {
        if ($(window).outerWidth() <= 900) {
            $(".header").css("height", $(".block-1").outerHeight() + $(".header h2").outerHeight() + 50);
        }
        else {
            $(".header").removeAttr("style");
        }
    });
});

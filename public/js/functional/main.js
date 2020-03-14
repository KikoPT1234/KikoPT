$(document).ready(() => {
    $(".topnav li").each((index, li) => {
        if ($(li).text() === $(".topnav").attr("id"))
            $(li).addClass("selected");
    });
    $(window).scroll(scrollFunction);
    $("button.discord").click(() => {
        $("div.discord").css({
            "opacity": "1",
            "z-index": "1",
            "transform": "scale(1)"
        });
        $("body").css("overflow-y", "hidden");
    });
    $(".black").click(() => {
        $(".popup").css({
            "transform": "scale(.5)",
            "opacity": "0",
        });
        $("body").removeAttr("style");
        scrollFunction();
        setTimeout(() => $("div.discord").removeAttr("style"));
    });
});
function scrollFunction() {
    if ($(window).scrollTop() > 0) {
        $(".images").css("filter", "blur(10px)");
        $("body").css("background", "#111");
        $(".topnav").css({
            "background": "#111",
            "box-shadow": "0 10px 20px rgba(0, 0, 0, .1), 0 4px 6px rgba(0, 0, 0, .15)"
        });
    }
    else {
        $(".images").removeAttr("style");
        $("body").removeAttr("style");
        $(".topnav").removeAttr("style");
    }
}

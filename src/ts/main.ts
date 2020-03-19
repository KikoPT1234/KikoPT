$(document).ready(() => {
    $(".topnav li").each((index, li) => {
        if ($(li).text() === $(".topnav").attr("id")) $(li).addClass("selected")
    })
    $(window).scroll(scrollFunction)
    $(".topnav .button").click(topnavClick)
    $(".dark").click(topnavClick)
    $("button.minehut").click(() => {
        window.location.href = "/minehut"
    })
    $("button.discord").click(() => {
        $("div.discord").css({
            "opacity": "1",
            "z-index": "1",
            "transform": "scale(1)"
        })
        $("body").css("overflow-y", "hidden")
    })
    $(".black").click(() => {
        $(".popup").css({
            "transform": "scale(.5)",
            "opacity": "0",
            "z-index": "1"
        })
        $("body").removeAttr("style")
        scrollFunction()
        setTimeout(() => $("div.discord").removeAttr("style"), 250)
    })
})

function scrollFunction() {
    if ($(window).scrollTop() > 0) {
        $(".images").css("filter", "blur(10px)")
        $(".topnav").css({
            "background": "#111",
            "box-shadow": "0 10px 20px rgba(0, 0, 0, .1), 0 4px 6px rgba(0, 0, 0, .15)"
        })
    }
    else {
        $(".images").removeAttr("style")
        $(".topnav").removeAttr("style")
    }
}

function topnavClick() {
    if ($(".topnav").hasClass("hidden")) {
        $(".topnav").removeClass("hidden")
        $(".dark").removeClass("hidden")
        $(".stripe:nth-child(1)").css("transform", "translateY(9.25px) rotate(135deg)")
        $(".stripe:nth-child(2)").css("transform", "translateX(-40px)")
        $(".stripe:nth-child(3)").css("transform", "translateY(-9.25px) rotate(-135deg)")
    } else {
        $(".topnav").addClass("hidden")
        $(".dark").addClass("hidden")
        $(".stripe:nth-child(1)").css("transform", "none")
        $(".stripe:nth-child(2)").css("transform", "none")
        $(".stripe:nth-child(3)").css("transform", "none")
    }
}
$(document).ready(() => {
    $(window).scroll(() => {
        if ($(window).scrollTop() > 0) {
            $(".images").css("filter", "blur(10px)")
            $("body").css("background", "#111")
        }
        else {
            $(".images").removeAttr("style")
            $("body").removeAttr("style")
        }
    })
})
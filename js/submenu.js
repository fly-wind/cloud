$(document).ready(function () {
    //导航二级下拉菜单
    $(".nav_menu_cont>li").hover(function () {
        $(this).children("div").fadeIn(300);
        $(this).children("a").css({ background: "url(images/nav_hover.jpg) repeat-x", color: "#BB0000" });
    },
	function () {
	    $(this).children("div").fadeOut(100);
        $(this).children("a").css({ background: "none", color: "#4b4b4b" });
    });

    //导航 PoE及网络 二级下拉菜单tab切换
    $('.tab_title>li').mouseover(function () {
        $(this).addClass("tab_active");
        $(this).siblings('li').removeClass("tab_active");
        $(this).parent().siblings('.nav_menu1_sub').css("display", "none");
        $(this).parent().siblings('.nav_menu1_sub').eq($(this).index()).css("display", "block");
    });
});
jQuery(document).ready(function ($) {
    // activate the menu in left side bar based on url
    const sideMenu = $("#side-menu");
    $("#side-menu li").click(function () {
        if ($(this).hasClass('active')) {
            $(this).find('ul').slideUp('slow').removeClass('active');
            $(this).removeClass('active');
            $(this).find('i.arrow').removeClass('fa-arrow-left').addClass('fa-arrow-down');
        } else {
            sideMenu.find('ul').css('display', 'none');
            sideMenu.find('li').removeClass('active');
            sideMenu.find('a').removeClass('active');
            $(this).find('ul').slideDown(400);
            $(this).find('a').addClass('active');
            $(this).addClass('active');
            $(this).find('i.arrow').removeClass('fa-arrow-down').addClass('fa-arrow-left');
        }
    });

    $("#side-menu a").each(function () {
        const pageUrl = window.location.href.split(/[?#]/)[0];
        if (this.href === pageUrl) {
            $(this).addClass("active");
            $(this).parent().addClass("active"); // add active to li of the current link
            $(this).parent().parent().addClass("in");
            $(this).parent().parent().prev().addClass("active"); // add active class to an anchor
            $(this).parent().parent().parent().addClass("active");
            $(this).parent().parent().parent().parent().addClass("in"); // add active to li of the current link
            $(this).parent().parent().parent().parent().parent().addClass("active");
        }
    });

});

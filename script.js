$(window).scroll(function(){
    if ($(this).scrollTop() > 300) {
       $('#navbar').addClass('scrolled');
       $('.nav-link').css("border-radius", "0px").css("box-shadow", "transparent 0px 0px 0px 0px");

    } else {
       $('#navbar').removeClass('scrolled');
       $('.nav-link').css("border-radius", "4px").css("box-shadow", "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px");
    }
});

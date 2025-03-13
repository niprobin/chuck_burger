$(window).scroll(function(){
    if ($(this).scrollTop() > 200) {
       $('#navbar').addClass('scrolled');
       $('.nav-link').css("border-radius", "0px").css("box-shadow", "none");

    } else {
       $('#navbar').removeClass('scrolled');
       $('.nav-link').css("border-radius", "4px").css("box-shadow", "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px");
    }
});

$(document).ready(function() {
   $(".menu-btn").click(function() {
       $(".menu").toggleClass("open");
       $(".menu-btn i").toggleClass("fa-bars fa-times");
   });
});

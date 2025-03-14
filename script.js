$(window).scroll(function(){
    if ($(this).scrollTop() > 200) {
       $('#navbar').addClass('scrolled');
       $('#logo-home').css("opacity", "1");

    } else {
       $('#navbar').removeClass('scrolled');
       $('#logo-home').css("opacity", "0");
    }
});

$(document).ready(function() {
   $(".menu-btn").click(function() {
       $(".menu").toggleClass("open");
       $(".menu-btn i").toggleClass("fa-bars fa-times");
   });
});

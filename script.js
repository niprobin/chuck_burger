$(window).scroll(function(){
    if ($(this).scrollTop() > 25) {
       $('#navbar').addClass('scrolled');
       
    } else {
       $('#navbar').removeClass('scrolled');
    }
});
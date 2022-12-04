$( "#navbar-toggler" ).on( "click", function( event ) {
    $('#header__contact-container').toggle();
   });
   (function() {
   
     
   
   });
   $('.footer__button').click(() => {
       $('html, body').animate({
           scrollTop: $('.main').offset().top 
       }, 0);
   });
   
   
   let isScroll = 0
   , 
   targetScroll = 560; 
       
   $(window).on('scroll', function(){
     if(isScroll === 0 && $(this).scrollTop() >= targetScroll) {
       isScroll = 1;
       $('.header').addClass('header__fixed');
       console.info('change 1');
     } else if(isScroll === 1 && $(this).scrollTop() < targetScroll) {
       isScroll = 0;
       $('.header').removeClass('header__fixed');
       
     }
   });
   
   
(function ($) {

    "use strict";
  
      // PRE LOADER
      $(window).load(function(){
        $('.preloader').fadeOut(1000); // set duration in brackets    
      });
  //Navigation Section
  $('.navbar-collapse a').on('click',function(){
    $(".navbar-collapse").collapse('hide');
  });

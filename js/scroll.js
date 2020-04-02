$(function(){

  $("section").each(function(i){
    $(this).on({
      mousewheel:	function(e){
        e.preventDefault(); 
        if (e.originalEvent.wheelDelta<0) { 
          if ( i < 4 ){
            $('html,body').stop().animate({scrollTop:$(this).next().offset().top},800);
          } else if ( i == 4 ) {
            $('html,body').stop().animate({scrollTop:$(document).height()},800);
          }
        }
        
        else if ( $(window).scrollTop() + $(window).innerHeight() == $(document).height() ) {
          if (e.originalEvent.wheelDelta>0) { 
            $('html,body').stop().animate({scrollTop:$("#gallery").offset().top},800);
          }
        }

        else {
          if( i != 0 ){
            $('html,body').stop().animate({scrollTop:$(this).prev().offset().top},800);
          }
        }
      }
    });
  });
  
});



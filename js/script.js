$(function(){
	
	$(".lnb").slideUp(0);
	
	// 메뉴 이벤트
	$(".gnb_menu").on({
		mouseenter: function(){
			$(".lnb").stop().slideDown(300);
    },
    mouseleave: function(){
			$(".lnb").stop().slideUp(300);
    },
    focusin: function(){
			$(".lnb").stop().slideDown(300);
    }
  })

	$(".lnb").on({
		mouseenter: function(){
			$(this).stop().slideDown(300);
    },
    mouseleave: function(){
			$(".lnb").stop().slideUp(300);
    }
  });
  
  $("nav").on({
    focusin: function(){
      $(".lnb").stop().slideUp(300);
    }
  })


  // nav 이벤트

  //초기화
  $("nav a").eq(0).addClass("onText");
  $("nav a").children().eq(0).addClass("onCircle");

  // 클릭이벤트
  $("nav a").click(function(e){

    // 스크롤링
    e.preventDefault();
    $("html,body").animate({scrollTop:$(this.hash).offset().top}, 800);

    var current = $("nav a").index(this);
    
    $("nav a").each(function(i){
      // 클릭 시 CSS 변경
      $(this).addClass("onText");
      $(this).children().addClass("onCircle");

      if (current != i) {
        $(this).removeClass("onText");
        $(this).children().removeClass("onCircle");
      }
    });

  });


  // smooth scroll 이벤트
  
      

});
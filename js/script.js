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



  // 바로가기 이벤트

  // 바로가기 이벤트
  // const sectionTop = $("section").offset().top;

  // $(".scrollBt").on({
  //     click: function() {
  //         $("html,body").stop().animate({ scrollTop: sectionTop }, 800);
  //     }
  // });

    // 네비게이션 이벤트
      var contSumHeights = [0];
      var heightSum = 0;
      var $content = $(".content");
      var contHegihts = [0]

      for (var i = 0; i < $content.length; i++) {
  
          var $el = $content.eq(i);
          var height = $el.height() + parseInt($el.css("marginBottom").replace("px", ""));
          
          heightSum += height
          contHegihts.push(height)
          contSumHeights.push(heightSum);
      }


      // 스크롤 시 네비게이션 효과
      var currentIndex = 0

      $(".contents-wrap").scroll(function() {
          var current_scrollTop = parseInt($(this).scrollTop())
          var selectedIndex = 0

          contSumHeights.forEach((v, i)=>{
              if(v < current_scrollTop + contHegihts[i]/2) selectedIndex = i
              else return
          })

          if(selectedIndex != currentIndex){
              currentIndex = selectedIndex    // 현재 인덱스 알려줌
              $(".navBt").removeClass("navOn");
              $(".navBt").css("color", "rgba(221, 221, 221, 0.5)");
              $(".navBt").eq(selectedIndex).addClass("navOn");
              $(".navBt").eq(selectedIndex).css("color", "#ddd");
          }
      }); 


      // 네비게이션 버튼 클릭 효과
      $(".navBt").click(function() {
          var i = $(".navBt").index(this);
          
          var conTop = contSumHeights[i];

          $(".contents-wrap").animate({ scrollTop: conTop }, 800);

          $(".navBt").each(function(index) {
              $(this).addClass("navOn");
              $(this).css("color", "#ddd");

              if (i != index) {
                  $(this).removeClass("navOn");
                  $(this).css("color", "rgba(221, 221, 221, 0.5)");
              }
          });

});
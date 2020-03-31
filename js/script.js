$(function(){

  // 메뉴 이벤트
  $(".lnb").slideUp(0);

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


  // 네비게이션 버튼 이벤트
  $("nav a").eq(0).addClass("onText");
  $("nav a").children().eq(0).addClass("onCircle");

  var $section = $("section");
  var sectionTops = [];

  // 배열에 담아놓고 index 부여하기
  for (var i = 0; i < $section.length; i++) {
    var sectionTop = $section.eq(i).offset().top;
    sectionTops.push(sectionTop);
  }
  
  // 네비게이션 - 스크롤링
  var currentIndex = 0;

  $(window).scroll(function(){
    var currentTop = $(this).scrollTop();
    var selectedIndex = 0;

    // 섹션 스크롤 탑과 index 매칭
    sectionTops.forEach((value, i) => {
      if (value <= currentTop) selectedIndex = i
      else return
    });
      
    if(selectedIndex != currentIndex){
        currentIndex = selectedIndex
        $("nav a").removeClass("onText");
        $("nav a").children().removeClass("onCircle");
        $("nav a").eq(selectedIndex).addClass("onText");
        $("nav a").eq(selectedIndex).children().addClass("onCircle");
    }   
  });

  // 네비게이션 - 클릭
  $("nav a").click(function(e){
    e.preventDefault();
    $("html, body").animate({scrollTop:$(this.hash).offset().top}, 400);

    var buttonIndex = $("nav a").index(this);
    
    $("nav a").each(function(index) {
        $(this).addClass("onText");
        $(this).children().addClass("onCircle");

        if (buttonIndex != index) {
            $(this).removeClass("onText");
            $(this).children().removeClass("onCircle");
        }
    });
  });


  // 유효성 검사
  $(function(){
    $(".btn_apply").click(function(){
        submit();
    });

    function submit(){
        if($('#name').val() == ""){
            alert("이름을 입력해주세요");
            $('#name').focus();
            return false;
        } else if($('#phone').val() == ""){
            alert("휴대폰 번호를 입력해주세요.");
            $('#phone').focus();
            return false;
        } else if($("#email").val() == ""){
          alert("이메일을 정확히 입력해주세요.");
          $("#email").focus();
          return false;
        }
    }
  });

});
// JavaScript *
// mobile menu - 사이드 네이게이션 열기, 닫기 함수
// openNav() - id="myNav" 가져와 너비 100% 설정
// closeNav() - id="myNav" 가져와 너비 0% 설정
// getElementById() 메서드 - 특정 ID를 가진 요소를 선택하는 기능
function openNav(){
  document.getElementById("myNav").style.width = "100%";
}
function closeNav(){
  document.getElementById("myNav").style.width = "0%";
}
// 만약 위 코드를 제이쿼리로 한다면?
/*
function openNav(){
  $("#myNav").css("width","100%");
}
function closeNav(){
  $("#myNav").css("width","0%");
}
*/

// toggle line => X
function toggleMenu(){
  var $myNav = $('#myNav'); // 메뉴 감싸는 전체 컨테이너 변수 저장
  if ($myNav.css("width") == "0px"){
    $('.toggle-container').addClass('active');
    $myNav.css("width", "100%");
  }
    else {
    $('.toggle-container').removeClass('active');
    $myNav.css("width", "0%");
  }
  // 만약 가로 사이즈가 0이면 토글 버튼에 액티브 클래스 추가, 메뉴 너비 100% 열기
  // 그렇지 않으면 액티브 클래스 제거, 메뉴 너비 0으로 설정 후 메뉴 닫기
}


// jQuery *
$(function(){
  // 레이어 팝업
  $(".layerPopup").on("click",function(){
    $(".popup, .bg").fadeIn();
  });
  $(".close, .bg").on("click",function(){
    $(".popup, .bg").fadeOut();
  });
});
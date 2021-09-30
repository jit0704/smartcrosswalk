// publishing UI javascript
$(function(){
  if ($('[include-html]').length !== 0) {
    includeHTML(); // HTML include (퍼블리싱 확인용)
  }
  cmmnui();
});

function cmmnui () {
  // 210930 추가 : input autocomplete 비활성화
  var $txtInput0 = $('[type="text"], [type="number"]');
  $txtInput0.attr('autocomplete', 'off');

  // 210930 추가 : 로그인 폼 영역 포커스
  var $txtInput = $('.loginbox-input input')
  $txtInput.on('focus', function(){
    $(this).parent().addClass('active');
  });
  $txtInput.on('blur', function(){
    $(this).parent().removeClass('active');
  });

  // 모달 팝업
  $('.btn-modal-open').on('click', function () {
    $(this).modal({
      closeExisting: false,
      clickClose: false,
      fadeDuration: 100
    });
    return false;
  });

  //gnb
  setTimeout(function () { // setTimeout()은 퍼블리싱 확인용으로 개발에서는 적용하지 마세요.
    var $gnbSelector = '.gnb > li';
    $(document).on('mouseenter', $gnbSelector, function () {
      if ($(this).find('.depth2').length !== 0) {
        $(this).children('.depth2').stop().slideDown(200);
      } else {
        return;
      }
    });
    
    $(document).on('mouseleave', $gnbSelector, function () {
      $(this).children('.depth2').stop().slideUp(200);
    });
  }, 100);
}

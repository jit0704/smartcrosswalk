// publishing UI javascript
$(function(){
  if ($('[include-html]').length !== 0) {
    includeHTML(); // HTML include (퍼블리싱 확인용)
  }
  cmmnui();
});

function cmmnui () {
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
    // $(document).on('mouseleave', '.gnb .depth2', function () {
    //   $('.gnb .depth2').stop().slideUp(200);
    // });
    $(document).on('mouseleave', $gnbSelector, function () {
      $(this).children('.depth2').stop().slideUp(200);
    });
  }, 100);
}

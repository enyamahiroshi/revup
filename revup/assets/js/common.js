//-----------------------------
// 360px以下ビューポート縮小
//-----------------------------
!(function () {
  const viewport = document.querySelector('meta[name="viewport"]');
  function switchViewport() {
    const value =
      window.outerWidth > 360
        ? 'width=device-width,initial-scale=1'
        : 'width=360';
    if (viewport.getAttribute('content') !== value) {
      viewport.setAttribute('content', value);
    }
  }
  addEventListener('resize', switchViewport, false);
  switchViewport();
})();


//-----------------------------
// スムーススクロール・アンカーリンク対応
//-----------------------------
$(function(){
  const pagetop = $('.js-pagetop');
  pagetop.hide();
  $(window).on('scroll', function(){
    if($(this).scrollTop() > 500){
      pagetop.fadeIn();
    }else{
      pagetop.fadeOut();
    }
  });

  pagetop.on('click', function(){
    $('body,html').animate({scrollTop: 0}, 500);
    return false;
  })
});
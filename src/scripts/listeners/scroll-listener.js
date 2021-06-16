var $TBG = $TBG || {};

$TBG.lastScrollTop = 0;

var scrollListenerDebounceFunction = debounce(function() {
  'use strict';
  
  if (parseInt($(window).scrollTop()) > $('#header-navbar').height()) {
    $('#header-navbar').addClass('compact');
  } else {
    $('#header-navbar').removeClass('compact');
  }

  if ($('#home-carousel').length > 0) {
    if($('body.home .page-title').offset().top + $('body.home .page-title').height() - 14 > $('#home-carousel').offset().top
        && $TBG.lastScrollTop < parseInt($(window).scrollTop())) {
      $("html,body").animate({ scrollTop: 300 }, 100);
    }
    if(300 - parseInt($(window).scrollTop()) > $('#header-navbar').height() && $TBG.lastScrollTop > parseInt($(window).scrollTop())) {
      $("html,body").animate({ scrollTop: 0 }, 100);
    }
  }
  
  $TBG.lastScrollTop = parseInt($(window).scrollTop())
}, 100);

window.addEventListener('scroll', scrollListenerDebounceFunction);


var $TBG = $TBG || {};

jQuery(function($) {
  'use strict';
  
  $('a.no-link, .no-link > a').on('click', function(e) {
  	e.preventDefault();
  });	

  /* Nav menu */
  // right-nav follow click event
  $('#header-navbar .navbar-right li.dropdown')
  .mouseenter(function(e) {
    $(this).addClass('open');
  })
  .mouseleave(function(e) {
    var that = this;
    setTimeout(function() {
      $(that).removeClass('open');
    }, 100)
  });

  $('.contact-title').click(function() {
    $('.contact-title, .contact').toggleClass('opened');
  })
  $('.follow-title').click(function() {
    $('.follow-title, .follow').toggleClass('opened');
  })

  /* portfolio */
  if($('#accordion').length > 0) {
    $('#accordion .item a').click(function() {
      $('#accordion .opened').removeClass('opened');
      if($(this).parent().hasClass('active')) {
        $('#accordion .active').removeClass('active');
      } else {
        $('#accordion .active').removeClass('active');
        $(this).parent().addClass('active');
        var startYear = Math.floor((parseInt($(this).text()) - 1987)/6) * 6 + 1987;
        $.each($('#accordion .item'), function() {
          var year = parseInt($(this).find('a').text());
          if(year >= startYear && year < startYear + 6) {
            $(this).addClass('opened');
          }
        });
      }
    })
  }

  $('.read-more a').click(function(e) {
    e.preventDefault();

    $(this).parent().parent().find('.hidden-xs').removeClass('hidden-xs');
    $(this).parent().parent().find('.visible-xs, .visible-xs-inline').addClass('hidden-xs');
  })

  $('.see-more').click(function(e) {
    e.preventDefault();
    $($('.item.col-sm-3')[1]).removeClass('hidden-xs');
    $($('.item.col-sm-3')[2]).removeClass('hidden-xs');
    $(this).addClass('hidden-xs');
  })

  var count = $('.item.panel.mobile').length;
  var index = 0;
  $('.next-history').click(function(e) {
    e.preventDefault();
    if(index < count-1) {
      $($('.item.panel.mobile')[index]).addClass('hidden-xs');
      $($('.item.panel.mobile')[index+1]).removeClass('hidden-xs');
      index ++;
    }
  })

  $('.before-history').click(function(e) {
    e.preventDefault();
    if(index > 0) {
      $($('.item.panel.mobile')[index]).addClass('hidden-xs');
      $($('.item.panel.mobile')[index-1]).removeClass('hidden-xs');
      index --;
    }
  })
});

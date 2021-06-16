var $TBG = $TBG || {};

$TBG.videoOverlay = {
	
  init : function() {
    'use strict';
    var _this = this;
		
		_this.videoWrapper = $('#video-bg-wrapper');
		_this.videoBG = $('#video-bg');
		_this.videoSource = $('#video-bg').data('video');
		_this.body = $('html, body');


    $('a.btn-play-video').on('click', function (e) {
      e.preventDefault();
			
      _this.openVideo(_this.videoSource);
    });
  },

  openVideo : function(src) {
    'use strict';
    var _this = this;

    _this.body.css('overflow', 'hidden');

    if (_this.videoBG.find('source[src="' + src + '"]').length === 0) {
      _this.videoBG.html('').html(
        '<video preload autoplay controls>' +
        '<source src="' + src + '" type="video/mp4" />' +
        '</video>'
      );

    } else { 

      _this.videoBG.find('video')[0].play();
    }

    _this.videoWrapper.addClass('open');
  },

  closeVideo : function() {
    'use strict';
    var _this = this;

    _this.body.css('overflow', 'auto');
    _this.videoBG.find('video')[0].pause();
    _this.videoWrapper.removeClass('open');
  }
  
};

jQuery(function($) {
  'use strict';
  
  $TBG.videoOverlay.init();
});

var $HB = $HB || {};

$HB.carouselControls = {
  
  init : function(id, carousel) {
    'use strict';
    var _this = this;
    
    // Previous Slide Button
    $(document).on('click', '#' + id + '-nav-left', function(e){
      e.preventDefault();

      if(!$('#' + id + '-nav-left').hasClass('disabled')) {
        carousel.trigger('prev.owl.carousel');
      }

    });

    // Next Slide Button
    $(document).on('click', '#' + id + '-nav-right', function(e){
      e.preventDefault();

      if(!$('#' + id + '-nav-right').hasClass('disabled')) {
        carousel.trigger('next.owl.carousel');
      }
    });
    
  }, 
  
  adjustButtons : function(event, id) {
    'use strict';
    var _this = this;
    
    $('.' + id + '-nav').removeClass('disabled');
    
    var index = event.item.index;
    
    if(!isNaN(index)) {
      
      if(index === 0) {
        $('#' + id + '-nav-left').addClass('disabled');
      }
      
      if(index >= (event.item.count - 1)) {
        $('#' + id + '-nav-right').addClass('disabled');
      }
    }
  }, 
  
  adjustSlideHeight : function() {
    'use strict';
    var _this = this;
    
    var $adjustedHeight = parseInt($(window).height() - ($('#header-desktop').height() + $('#sign-up-bar').outerHeight()));
    var $adjustedHeightMin = 400;

    if($adjustedHeight >= $adjustedHeightMin && !isMobile.any && $HB.screenwidth > $TBG.breakPoints.sm) {
      $('#home-carousel .item').height($adjustedHeight);
    } else {
      $('#home-carousel .item').height('');
    }
  }
  
};

jQuery(function($) {
  'use strict';
  
  $HB.homeCarousel = $('#home-carousel');
  $HB.homeCarousel.owlCarousel({
    items: 1,
    loop: true,
    center: true,
    margin: 0,
    responsiveClass: true,
    URLhashListener: true,
    autoplay: true,
    autoplayHoverPause: true,
    startPosition: 'URLHash',
    video:true,
    responsive:{
      0:{
        items: 1,
        nav: false
      },
      768:{
        items: 1,
        nav: false
      },
      992:{
        items: 1,
        nav: false,
        loop: false
      }
    }, 
    onChanged: callback
  });
  
  function callback(event) {
    $HB.carouselControls.adjustButtons(event, 'home-carousel');
  }
  
  $HB.carouselControls.init('home-carousel', $HB.homeCarousel);
  $HB.carouselControls.adjustSlideHeight();

  $HB.portfolioTopCarousel = $('#portfolio-top-carousel');
  $HB.portfolioTopCarousel.owlCarousel({
    item: 1,
    loop: true,
    dots: false,
    nav: true,
    navContainer: "#portfolio-top-nav-container",
    center: true,
    margin: 0,
    responsiveClass: true,
    URLhashListener: true,
    autoplay: true,
    autoplayHoverPause: true,
    startPosition: 'URLHash',
    video:true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      768: {
        items: 1,
        nav: true
      },
      992: {
        items: 1,
        nav: true,
        loop: true
      }
    },
    onChanged: function(event) {
      $HB.carouselControls.adjustButtons(event, 'portfolio-top-carousel');
    }
  });
  $HB.carouselControls.init('portfolio-top-carousel', $HB.portfolioTopCarousel);

  $HB.portfolioSmallCarousel1 = $('#portfolio-small-carousel-1');
  $HB.portfolioSmallCarousel1.owlCarousel({
    item: 1,
    loop: true,
    dots: false,
    nav: true,
    navContainer: "#portfolio-small-1-nav-container",
    center: true,
    margin: 0,
    responsiveClass: true,
    URLhashListener: true,
    autoplay: true,
    autoplayHoverPause: true,
    startPosition: 'URLHash',
    video:true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      768: {
        items: 1,
        nav: true
      },
      992: {
        items: 1,
        nav: true,
        loop: true
      }
    },
    onChanged: function(event) {
      $HB.carouselControls.adjustButtons(event, 'portfolio-small-carousel-1');
    }
  });
  $HB.carouselControls.init('portfolio-small-carousel-1', $HB.portfolioSmallCarousel1);

  $HB.portfolioSmallCarousel2 = $('#portfolio-small-carousel-2');
  $HB.portfolioSmallCarousel2.owlCarousel({
    item: 1,
    loop: true,
    dots: false,
    nav: true,
    navContainer: "#portfolio-small-2-nav-container",
    center: true,
    margin: 0,
    responsiveClass: true,
    URLhashListener: true,
    autoplay: true,
    autoplayHoverPause: true,
    startPosition: 'URLHash',
    video:true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      768: {
        items: 1,
        nav: true
      },
      992: {
        items: 1,
        nav: true,
        loop: true
      }
    },
    onChanged: function(event) {
      $HB.carouselControls.adjustButtons(event, 'portfolio-small-carousel-2');
    }
  });
  $HB.carouselControls.init('portfolio-small-carousel-2', $HB.portfolioSmallCarousel2);

  $HB.portfolioSmallCarousel3 = $('#portfolio-small-carousel-3');
  $HB.portfolioSmallCarousel3.owlCarousel({
    item: 1,
    loop: true,
    dots: false,
    nav: true,
    navContainer: "#portfolio-small-3-nav-container",
    center: true,
    margin: 0,
    responsiveClass: true,
    URLhashListener: true,
    autoplay: true,
    autoplayHoverPause: true,
    startPosition: 'URLHash',
    video:true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      768: {
        items: 1,
        nav: true
      },
      992: {
        items: 1,
        nav: true,
        loop: true
      }
    },
    onChanged: function(event) {
      $HB.carouselControls.adjustButtons(event, 'portfolio-small-carousel-3');
    }
  });
  $HB.carouselControls.init('portfolio-small-carousel-3', $HB.portfolioSmallCarousel3);  

  $HB.portfolioMidCarousel = $('#portfolio-mid-carousel');
  $HB.portfolioMidCarousel.owlCarousel({
    item: 1,
    loop: true,
    dots: false,
    nav: true,
    navContainer: "#portfolio-mid-nav-container",
    center: true,
    margin: 0,
    responsiveClass: true,
    URLhashListener: true,
    autoplay: true,
    autoplayHoverPause: true,
    startPosition: 'URLHash',
    video:true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      768: {
        items: 1,
        nav: true
      },
      992: {
        items: 1,
        nav: true,
        loop: true
      }
    },
    onChanged: function(event) {
      $HB.carouselControls.adjustButtons(event, 'portfolio-mid-carousel');
    }
  });
  $HB.carouselControls.init('portfolio-mid-carousel', $HB.portfolioMidCarousel);

  $HB.portfolioMultiCarousel = $('#portfolio-multi-carousel');
  $HB.portfolioMultiCarousel.owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    margin: 20,
    navContainer: "#portfolio-multi-nav-container",
    center: true,
    autoWidth: true,
    responsiveClass: true,
    URLhashListener: true,
    autoplay: true,
    autoplayHoverPause: true,
    startPosition: 'URLHash',
    video:true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      768: {
        items: 3,
        nav: true
      },
      992: {
        items: 3,
        nav: true,
        loop: true
      }
    },
    onChanged: function(event) {
      $HB.carouselControls.adjustButtons(event, 'portfolio-multi-carousel');
    }
  });
  $HB.carouselControls.init('portfolio-multi-carousel', $HB.portfolioMultiCarousel);

  $HB.portfolioFullCarouselNoFooter = $('#portfolio-full-carousel-no-footer');
  $HB.portfolioFullCarouselNoFooter.owlCarousel({
    loop: true,
    dots: false,
    nav: false,
    margin: 0,
    center: true,
    responsiveClass: true,
    URLhashListener: true,
    autoplay: true,
    autoplayHoverPause: true,
    startPosition: 'URLHash',
    video:true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
        loop: true
      }
    },
    onChanged: function(event) {
      $HB.carouselControls.adjustButtons(event, 'portfolio-full-carousel-no-footer');
    }
  });
  $HB.carouselControls.init('portfolio-full-carousel-no-footer', $HB.portfolioFullCarouselNoFooter);

  $HB.portfolioFullCarouselWithDetails = $('#portfolio-full-carousel-with-details');
  $HB.portfolioFullCarouselWithDetails.owlCarousel({
    loop: true,
    dots: false,
    nav: false,
    margin: 0,
    center: true,
    responsiveClass: true,
    URLhashListener: true,
    autoplay: true,
    autoplayHoverPause: true,
    startPosition: 'URLHash',
    video:true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
        loop: true
      }
    },
    onChanged: function(event) {
      $HB.carouselControls.adjustButtons(event, 'portfolio-full-carousel-with-details');
    }
  });
  $HB.carouselControls.init('portfolio-full-carousel-with-details', $HB.portfolioFullCarouselWithDetails);

  $HB.portfolio2in1Carousel = $('#portfolio-2in1-carousel');
  $HB.portfolio2in1Carousel.owlCarousel({
    item: 1,
    loop: true,
    dots: false,
    nav: true,
    navContainer: "#portfolio-2in1-nav-container",
    center: true,
    margin: 0,
    responsiveClass: true,
    URLhashListener: true,
    autoplay: true,
    autoplayHoverPause: true,
    startPosition: 'URLHash',
    video:true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      768: {
        items: 1,
        nav: true
      },
      992: {
        items: 1,
        nav: true,
        loop: true
      }
    },
    onChanged: function(event) {
      $HB.carouselControls.adjustButtons(event, 'portfolio-2in1-carousel');
    }
  });
  $HB.carouselControls.init('portfolio-2in1-carousel', $HB.portfolio2in1Carousel);
});

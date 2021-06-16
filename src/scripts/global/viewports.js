var $TBG = $TBG || {};

$TBG.screenwidth = window.innerWidth;
$TBG.screenwidthOrig = $TBG.screenwidth;
$TBG.screenheight = window.innerHeight;

$TBG.breakPoints = {
  xs : 640,
  sm : 768,
  md : 992,
  lg : 1200,
  xl : 1600
};

$TBG.viewPorts = {
  
  eval : function() {
    'use strict';
    var _this = this;
    
    $TBG.screenwidth = window.innerWidth;
    $TBG.screenheight = window.innerHeight;
    
    if($TBG.screenwidthOrig > $TBG.breakPoints.md && $TBG.screenwidth <= $TBG.breakPoints.md) {
      // DESKTOP TO MOBILE
      // If the window was resized down from >991 to <992
      location.reload();
    } else if($TBG.screenwidthOrig < $TBG.breakPoints.md && $TBG.screenwidth >= $TBG.breakPoints.md) {
      // MOBILE TO DESKTOP
      // If the window was resized up from <992 to >=992
      location.reload();
    } else {
      $TBG.screenwidthOrig = $TBG.screenwidth;
    }
  }
  
};

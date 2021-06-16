var $TBG = $TBG || {};

var resizeListenerDebounceFunction = debounce(function(screenWidthOrig) {
  'use strict';
  $TBG.viewPorts.eval();
  
}, 100);

window.addEventListener('resize', resizeListenerDebounceFunction);

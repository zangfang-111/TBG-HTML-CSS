console.log('----- Here is Matter.js -----')

function adjustImageHeight() {
  var sum = $('div.medium-thumbnail').height() + $('div.small-thumbnail').height();
  $('div.large-thumbnail').css('height', sum);
  $('div.small-description').css('height', $('div.small-thumbnail').height());
  $('div.large-description').css('height', $('div.small_grid_thumbnail').height());
  $('div.smallest_description').css('height', $('div.smallest_thumbnail').height());
}

$(document).ready(function() {
  $(window).resize(function () {
    adjustImageHeight();
  })
  adjustImageHeight();
});



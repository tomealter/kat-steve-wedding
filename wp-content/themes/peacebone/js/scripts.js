(function($) {
  
  //EVENTS
  var trigger = $('.events__date');
  var content = $('.events__item');
  
  trigger.on('click', function() {
    var date = $(this).attr('id');
    
    trigger.removeClass('is-active');
    $(this).addClass('is-active');
    
    content.removeClass('is-active');
    $( '.events__item#' + date).addClass('is-active');
  });















 })(jQuery);
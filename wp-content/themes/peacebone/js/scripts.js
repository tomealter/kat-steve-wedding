(function($) {
  
  //EVENTS
  var trigger = $('.events__date');
  var content = $('.events__item');
  
  trigger.on('click', function() {
    var date = $(this).attr('id');
    
    trigger.removeClass('is-active');
    $(this).addClass('is-active');
    
    content.removeClass('is-active');
    var selectedEvent = $( '.events__item#' + date)
    selectedEvent.addClass('is-active');
    
    TweenMax.staggerFrom(selectedEvent.children(), .3, {
      x: '+=100',
      ease:Power1.easeIn
    },  0.15);
  });

















 })(jQuery);
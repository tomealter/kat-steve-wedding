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
      "opacity": "0",
      ease:Power1.easeIn
    },  0.15);
  });

  //Animate Pictures in Story Seciton
  var controller = new ScrollMagic.Controller();

  $('.image-grid__item').each( function() {
    var currentPhoto = this;
    
    var tween = TweenMax.from(currentPhoto, .5, {
      x: '-=1000', 
      'opacity': '0',
      ease:Power1.easeIn
    });
    
    var scene = new ScrollMagic.Scene({triggerElement: currentPhoto, triggerHook: 0.9})
      .setTween(tween)
      .addTo(controller); 
  });

















 })(jQuery);
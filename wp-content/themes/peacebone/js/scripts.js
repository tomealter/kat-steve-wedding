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
    
    var tween_story = TweenMax.from(currentPhoto, .3, {
      x: '-=200', 
      'opacity': '0',
      ease:Power1.easeIn
    });
    
    var scene_story = new ScrollMagic.Scene({triggerElement: currentPhoto, triggerHook: 0.8})
      .setTween(tween_story)
      .addTo(controller); 
  });


  //Animation for travel seciton
  var map = $('.section__map');
  var mapMarker = $('.section__map-marker');

  var tween_travel = new TimelineMax();
  tween_travel.from(map, 0.5, {'opacity':0, y: -50})
  .from(mapMarker, 0.5, {'opacity':0,  y: -200, ease:Back.easeOut}, '1');

  var scene_travel = new ScrollMagic.Scene({triggerElement: '.section__map', triggerHook: 0.6})
  .setTween(tween_travel)
  .addTo(controller); 
















 })(jQuery);
(function($) {
  
  //EVENTS
  var trigger = $('.ceremony__menu-item');
  var content = $('.ceremony__item');
  
  trigger.on('click', function() {
    var activeTab = $(this).attr('id');
    
    trigger.removeClass('is-active');
    $(this).addClass('is-active');
    
    content.removeClass('is-active');
    var selectedTab = $( '.ceremony__item#' + activeTab)
    selectedTab.addClass('is-active');
    
    TweenMax.staggerFrom(selectedTab.children(), .3, {
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

  var scene_travel = new ScrollMagic.Scene({triggerElement: '.section__map', triggerHook: 0.5})
  .setTween(tween_travel)
  .addTo(controller); 


  //Smooth Scrolling to Anchors
  // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


  //Show back to top button when user scrolls away from the top
  $(window).scroll(function() {
    scrollPosition = $(this).scrollTop();
    if (scrollPosition >= 200) {
      $('.back-to-top').addClass('is-active');
    }
    else {
      $('.back-to-top').removeClass('is-active');
    }
  });


  //Change Background Image on scroll
  new ScrollMagic.Scene({
    triggerElement: "#ceremony", 
    triggerHook: 'onEnter'
  }).setClassToggle(".bg-image-2", "is-active")
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#things-to-do", 
    triggerHook: 'onEnter'
  }).setClassToggle(".bg-image-3", "is-active")
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#contact", 
    triggerHook: 'onEnter'
  }).setClassToggle(".bg-image-4", "is-active")
  .addTo(controller);


  //Mobile Menu
  var mobileTrigger = $('.mobile-menu-trigger');
  var header = $('.header');
  var navLink = $('.nav--main .nav__link');
  var mobileMenuTween = new TimelineMax();

  mobileTrigger.on('click', function() {
    if (header.hasClass('is-active')) {
      header.removeClass('is-active');
      mobileTrigger.removeClass('is-active');
      mobileMenuTween.to(navLink, 0.5, {opacity: 0, left: '100vw'})
      $('body').removeClass('no-scroll');
    }
    else {
      header.addClass('is-active');
      mobileTrigger.addClass('is-active');
      mobileMenuTween.to(navLink, 0.5, {opacity: 1, left: 0})
      $('body').addClass('no-scroll');
    }
  });

  navLink.on('click', function() {
    header.removeClass('is-active');
    mobileTrigger.removeClass('is-active');
    $('body').removeClass('no-scroll');

    if ($(window).width() < 700) {
      mobileMenuTween.to(navLink, 0.5, {opacity: 0, left: '100vw'})
    }
  });






 })(jQuery);
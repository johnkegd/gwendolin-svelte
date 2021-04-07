/**
 * this file contains the initializations of materialize components
 */

export default function() {

    //init Dropdown 
    var dropdown = document.querySelectorAll(".dropdown-button");
    M.Dropdown.init(dropdown,{
        coverTrigger: false,
        constrainWidth: false
    });

    //init Modals
    var modal = document.querySelectorAll(".modal");
    M.Modal.init(modal,null);
 
     // Home
     window.$('.carousel:not(.carousel-slider)').carousel({
       dist: 0,
       padding: 10
     });
     window.$('.carousel.carousel-slider').carousel({
       fullWidth: true,
       indicators: true,
       onCycleTo: function(el) {
         window.$('.nav-background img').removeClass('active');
         window.$('.nav-background img').eq(window.$(el).index()).addClass('active');
       }
     });
 
 
     // Masonry Grid
     var $masonry = window.$('.gallery');
     $masonry.Masonry({
       // set itemSelector so .grid-sizer is not used in layout
       itemSelector: '.gallery-filter',
       // use element for option
       columnWidth: '.gallery-filter',
       // no transitions
       transitionDuration: 0
     });
     // layout Masonry after each image loads
     $masonry.imagesLoaded(function() {
       $masonry.Masonry('layout');
     });
     window.$('a.filter').click(function (e) {
       e.preventDefault();
     });


     // Navbar
     var categories = window.$('nav .categories-container');
     if (categories.length) {
       categories.pushpin({ top: categories.offset().top });
       var $links = categories.find('li');
       $links.each(function() {
         var $link = window.$(this);
         $link.on('click', function() {
           $links.removeClass('active');
           $link.addClass('active');
           var hash = $link.find('a').first()[0].hash.substr(1);
           var $galleryItems = window.$('.gallery .gallery-item');
 
           $galleryItems.stop().addClass('gallery-filter').fadeIn(100);
 
           if (hash !== 'all') {
             var $galleryFilteredOut = $galleryItems.not('.' + hash).not('.all');
             $galleryFilteredOut.removeClass('gallery-filter').hide();
           }
 
           // transition layout
           $masonry.Masonry({
             transitionDuration: '.3s'
           });
           // only animate on layout
           $masonry.one( 'layoutComplete', function( event, items ) {
             $masonry.Masonry({
               transitionDuration: 0
             });
           });
           setTimeout(function() {
 
           $masonry.Masonry('layout');
           }, 1000);
         });
       });
     }
 


     // Navbar trying to replace jquery
     /* var categories = document.querySelectorAll('nav .categories-container');
     if (categories.length) {
       categories.pushpin({ top: categories.offset().top });
       var $links = categories[0].querySelectorAll('li');
       $links.forEach(function($link) {
         $link.addEventListener('click', function() {
           $link.classList.remove('active');
           $link.classList.add('active');
           var hash = $link.querySelector('a').hash.substr(1);
           var $galleryItems = document.querySelectorAll('.gallery-item');
 
           $galleryItems.stop().addClass('gallery-filter').fadeIn(100);
 
           if (hash !== 'all') {
             var $galleryFilteredOut = $galleryItems.not('.' + hash).not('.all');
             $galleryFilteredOut.removeClass('gallery-filter').hide();
           }
 
           // transition layout
           $masonry.Masonry({
             transitionDuration: '.3s'
           });
           // only animate on layout
           $masonry.one( 'layoutComplete', function( event, items ) {
             $masonry.Masonry({
               transitionDuration: 0
             });
           });
           setTimeout(function() {
 
           $masonry.Masonry('layout');
           }, 1000);
         });
       });
     } */




      // init Dropdown components
      /* window.$('.dropdown-trigger').dropdown({
        coverTrigger: false,
        constrainWidth: false
      }); */
  
  /* 
      // Navbar
      var categories = window.$('nav .categories-container');
      if (categories.length) {
        categories.pushpin({ top: categories.offset().top });
        var $links = categories.find('li');
        $links.each(function() {
          var $link = window.$(this);
          $link.on('click', function() {
            $links.removeClass('active');
            $link.addClass('active');
            var hash = $link.find('a').first()[0].hash.substr(1);
            var $galleryItems = window.$('.gallery .gallery-item');
  
            $galleryItems.stop().addClass('gallery-filter').fadeIn(100);
  
            if (hash !== 'all') {
              var $galleryFilteredOut = $galleryItems.not('.' + hash).not('.all');
              $galleryFilteredOut.removeClass('gallery-filter').hide();
            }
  
            // transition layout
            $masonry.Masonry({
              transitionDuration: '.3s'
            });
            // only animate on layout
            $masonry.one( 'layoutComplete', function( event, items ) {
              $masonry.Masonry({
                transitionDuration: 0
              });
            });
            setTimeout(function() {
  
            $masonry.Masonry('layout');
            }, 1000);
          });
        });
      }
  
  
      // Home
      window.$('.carousel:not(.carousel-slider)').carousel({
        dist: 0,
        padding: 10
      });
      window.$('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true,
        onCycleTo: function(el) {
          window.$('.nav-background img').removeClass('active');
          window.$('.nav-background img').eq(window.$(el).index()).addClass('active');
        }
      });
  
  
      // Masonry Grid
      var $masonry = window.$('.gallery');
      $masonry.Masonry({
        // set itemSelector so .grid-sizer is not used in layout
        itemSelector: '.gallery-filter',
        // use element for option
        columnWidth: '.gallery-filter',
        // no transitions
        transitionDuration: 0
      });
      // layout Masonry after each image loads
      $masonry.imagesLoaded(function() {
        $masonry.Masonry('layout');
      });
      window.$('a.filter').click(function (e) {
        e.preventDefault();
      });
  
  
  
      // Contact Form Icon
      window.$("form .form-control").focus(function() {
        window.$(this).siblings("label").first().children("i").first().css({"color": "#aaa", "left": 0});
      });
      window.$("form .form-control").blur(function() {
        window.$(this).siblings("label").first().children("i").first().css({"color": "transparent", "left": "-20px"});
      });
  
  
      var onShow = function(el) {
        var carousel = el.find('.carousel');
        carousel.carousel({
          dist: 0,
          padding: 10
        });
      };
      window.$('.gallery-expand').galleryExpand({
        onShow: onShow,
        dynamicRouting: true,
      });
  
      window.$('.blog .gallery-expand').galleryExpand({
        onShow: onShow,
        dynamicRouting: true,
        fillScreen: true,
        inDuration: 500,
      }); */
  } // end of jQuery name space
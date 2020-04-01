AOS.init({
  duration: 600
});

(function($) {
  'use strict';

  // bootstrap dropdown hover

  // loader
  var loader = function() {
    setTimeout(function() {
      if ($('#loader').length > 0) {
        $('#loader').removeClass('show');
      }
    }, 1);
  };
  loader();

  // navigation
  var OnePageNav = function() {
    var navToggler = $('.js-site-nav-toggle');

    $(".smoothscroll[href^='#'], #ftco-navbar ul li a[href^='#']").on('click', function(e) {
      e.preventDefault();
      var hash = this.hash;
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        700,
        'easeInOutExpo',
        function() {
          window.location.hash = hash;
        }
      );
    });

    $("#ftco-navbar ul li a[href^='#']").on('click', function(e) {
      if (navToggler.is(':visible')) {
        navToggler.click();
      }
    });

    // $('body').on('activate.bs.scrollspy', function () {
    //   console.log('nice');
    // })
  };
  OnePageNav();

  $(window).scroll(function() {
    var $this = $(this),
      st = $this.scrollTop(),
      navbar = $('.site-header');

    if (st > 150) {
      if (!navbar.hasClass('scrolled')) {
        navbar.addClass('scrolled');
      }
    }
    if (st < 150) {
      if (navbar.hasClass('scrolled')) {
        navbar.removeClass('scrolled sleep');
      }
    }
    if (st > 350) {
      if (!navbar.hasClass('awake')) {
        navbar.addClass('awake');
      }
    }
    if (st < 350) {
      if (navbar.hasClass('awake')) {
        navbar.removeClass('awake');
        navbar.addClass('sleep');
      }
    }
  });

  $('.js-site-nav-toggle').on('click', function(e) {
    var $this = $(this);
    e.preventDefault();

    if ($('body').hasClass('menu-open')) {
      $this.removeClass('active');
      $('.site-menu .site-menu-inner > ul > li').each(function(i) {
        var that = $(this);
        setTimeout(function() {
          that.removeClass('is-show');
        }, i * 100);

        // $(this).removeClass('is-show');
      });

      setTimeout(function() {
        // $('.site-menu').fadeOut(400);
        $('.site-menu').removeClass('site-menu-show');
      }, 800);

      $('body').removeClass('menu-open');
    } else {
      // $('.site-menu').fadeIn(400);
      $('.site-menu').addClass('site-menu-show');

      $this.addClass('active');
      $('body').addClass('menu-open');

      setTimeout(function() {
        $('.site-menu .site-menu-inner > ul > li').each(function(i) {
          var that = $(this);
          setTimeout(function() {
            that.addClass('is-show');
          }, i * 100);
        });
      }, 500);
    }
  });

  //
})(jQuery);

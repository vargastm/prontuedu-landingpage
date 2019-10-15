$(function () {
    $('.md-trigger-menu').on('click', function() {
      $('.md-menu').addClass('md-show');
    });
    $('.md-close').on('click', function() {
      $('.md-menu').removeClass('md-show');
    });
    $('.md-overlay').on('click', function() {
      $('.md-menu').removeClass('md-show');
    });
  });

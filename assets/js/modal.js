$(function () {
    $('.md-trigger').on('click', function() {
      $('.md-menu').removeClass('md-show');
      $('.md-modal').addClass('md-show');
    });
    $('.md-close').on('click', function() {
      $('.md-modal').removeClass('md-show');
    });
    $('.md-overlay').on('click', function() {
      $('.md-modal').removeClass('md-show');
    });
  });

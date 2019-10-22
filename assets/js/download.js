$(function () {
    $('.md-trigger-download').on('click', function() {
      $('.md-download').addClass('md-show');
    });
    $('.md-close').on('click', function() {
      $('.md-download').removeClass('md-show');
    });
    $('.md-overlay').on('click', function() {
      $('.md-download').removeClass('md-show');
    });
  });
  
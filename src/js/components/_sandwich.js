const sandwich = $('.js-sandwich');
const header = $('.js-header');
$('.toggle-menu').on('click', function() {
  sandwich.toggleClass('is-active');
  header.toggleClass('is-open-menu');
});

$('.js-menu-link').on('click', function() {
  sandwich.removeClass('is-active');
  header.removeClass('is-open-menu');
});

import slick from 'slick-carousel';

const heroSLider = $('.js-hero-slider');
const heroSLiderParent = heroSLider.parents('.js-hero-slider-parent');
const prevArrow = heroSLiderParent.find('.js-hero-slider-prev');
const nextArrow = heroSLiderParent.find('.js-hero-slider-next');

heroSLider.slick({
  autoplay: true,
  infinite: true,
  slideToShow: 1,
  slideToScroll: 1,
  dots: true,
  prevArrow: prevArrow,
  nextArrow: nextArrow
});

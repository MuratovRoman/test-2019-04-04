// import LazyLoad from 'vanilla-lazyload';
import Isotope from 'isotope-layout';
import { ACTIVE } from '../constants';

// let iso;

// var myLazyLoad = new LazyLoad({
//     elements_selector: '[data-masonry-lazy]',
//     // treshold: 1000,
//     callback_finish: () => iso.layout()
//   });
  
//   myLazyLoad.loadAll();

const masonry = '.js-filter';
let iso = new Isotope(masonry, {
  itemSelector: '.js-masonry-item',
  // stamp: '.js-masonry-stamp',
  // stamp: '.stamp',
  masonry: {
    columnWidth: '.js-masonry-width'
    // gutter: 
  },
  filter: '*'
});


$('[data-filter]').click(function() {
  /*
    FILTERING
    */
  var filterValue = $(this).attr('data-filter');
  // var categoryText = $(this).text();
  // Arrange
  iso.arrange({ filter: filterValue });
  // Change Text
  // $('.js-filter-category-text').text(categoryText);
  // Active Class
  $('.js-filter-btn').each((index, el) => {
    $(el).removeClass(ACTIVE);
  });
  $(this).addClass(ACTIVE);
});

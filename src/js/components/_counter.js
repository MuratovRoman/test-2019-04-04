import { WIN } from '../constants';

let trigger = 0;
WIN.scroll(function() {

  let offTop = $('.js-counters-section').offset().top - window.innerHeight;
  if (trigger === 0 && WIN.scrollTop() > offTop) {
    $('.js-counter').each(function() {
      const $this = $(this),
        // countTo = $this.attr('data-count');
        countTo = $this.text();
      $({
        countNum: 0//$this.text()
      }).animate({
        countNum: countTo
      },

      {

        duration: 3000,
        easing: 'swing',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
          //alert('finished');
        }

      });
    });
    trigger = 1;
  }

});

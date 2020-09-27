$('.pricing-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  nextArrow: '<span class="slick-btn slick-next"><i class="pe-7s-angle-right" aria-hidden="true"></i></span>',
  prevArrow: '<span class="slick-btn slick-prev"><i class="pe-7s-angle-left" aria-hidden="true"></i></span>',
  responsive: [
    {
      breakpoint: 1116,
      settings: {
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 980,
      settings: {
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 652,
      settings: {
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

Array.from($('.pricing-slide')).forEach(
  elem => {
        let numbers = Array.from($(elem).find(".pricing-slide-details li strong"));
        $(elem).mouseenter(function() {
          numbers.forEach(num => $(num).css({color: '#f6744b'}));
        }).mouseleave(function() {           
          numbers.forEach(num => $(num).css({color: '#fff'}));
        });
  }
);
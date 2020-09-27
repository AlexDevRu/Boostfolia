$('.clients-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: '<span class="slick-btn slick-next"><i class="pe-7s-angle-right" aria-hidden="true"></i></span>',
  prevArrow: '<span class="slick-btn slick-prev"><i class="pe-7s-angle-left" aria-hidden="true"></i></span>',
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1116,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 652,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ]
});
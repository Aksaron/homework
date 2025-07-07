const swiper = new Swiper('.hero__swiper', {
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
  },
  navigation: {
    nextEl: '.hero__next',
    prevEl: '.hero__prev',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 1500,
});

new Swiper('.image-slider', {
  // Стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  slidesPerView: 1,
  loop: true,
  spaceBetween: 0,
  loopedSlides: 3,
  initialSlide: 0,

  breakpoints: {
    800: {
      slidesPerView: 2,
      initialSlide: 2,
    },
    1250: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }
});

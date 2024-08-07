document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1.5,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    touchRatio: 1,
    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesOffsetBefore: -35,
      },
      406: {
        slidesPerView: 2,
        slidesOffsetBefore: -100,
      },
      1440: {
        slidesPerView: 4,
        slidesOffsetBefore: -130,
      },
    },
  });
});

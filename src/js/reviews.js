document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiperBlock', {
    slidesPerView: 1.5,
    spaceBetween: 40,
    loop: true,
    centeredSlides: true,

    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
    },
    touchRatio: 1,
    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesOffsetBefore: -35,
      },
      440: {
        slidesPerView: 2,
        slidesOffsetBefore: -120,
      },
      1440: {
        slidesPerView: 3,
      },
    },
  });
});

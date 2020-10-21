let swiper = new Swiper('.swiper-container', {
    slidesPerView: 8,
    spaceBetween: 40,
    slidesPerGroup: 3,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
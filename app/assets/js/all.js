
var swiper = new Swiper(".commentSwiper", {

  slidesPerView: 1,
  // 倒底會回第一張
  loop: true,
  // 有fade效果才不會整張切換
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

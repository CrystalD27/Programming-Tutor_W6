
$(document).ready(() => {

  $('.btn__hambuger').on('click', function (e) {
    $('.btn__hambuger').toggleClass('open');
    $('.nav__item').toggleClass('open');
  })

})
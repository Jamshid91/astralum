const cookie = document.querySelector('.cookie'),
      cookieClose = document.querySelector('.cookie-close')

setTimeout(() => {
  cookie.classList.add('cookieShow')
}, 4000);

cookieClose.addEventListener('click', () => {
  cookie.classList.remove('cookieShow')
})

const collections = new Swiper('.wrapper .swiper', {
    watchOverflow: true,
    slidesPerView: 1,
    loop: true,
    speed: 500,
    effect: 'fade',
    pagination: {
        el: '.wrapper-pagination',
        clickable: true,
      },
      navigation: {
          nextEl: '.wrapper-next',
          prevEl: '.wrapper-prev',
        },
  });
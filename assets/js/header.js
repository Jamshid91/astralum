const menuShowBtn = document.querySelector('.menu-btn'),
      menuCloseBtn = document.querySelector('.menu-close'),
      menu= document.querySelector('.menu'),
      body= document.querySelector('body')

menuShowBtn.addEventListener('click', () => {
    menu.classList.remove('d-none');
    body.classList.add('bodyStopScroll');
});

menuCloseBtn.addEventListener('click', () => {
    menu.classList.add('d-none');
    body.classList.remove('bodyStopScroll');
});

window.addEventListener('click', (e) => {
    if(e.target == menu) {
        menu.classList.add('d-none');
        body.classList.remove('bodyStopScroll');
    }
})
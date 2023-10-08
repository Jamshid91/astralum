const filterBtns = document.querySelectorAll('.products__btn'),
      filters = document.querySelectorAll('.lighting');

let [btn1, btn2] = filterBtns,
    [filter1, filter2] = filters;

btn1.addEventListener('click', () => {
    btn1.classList.add('active');
    btn2.classList.remove('active');
    filter1.classList.remove('d-none');
    filter2.classList.add('d-none');
});

btn2.addEventListener('click', () => {
    btn2.classList.add('active');
    btn1.classList.remove('active');
    filter2.classList.remove('d-none');
    filter1.classList.add('d-none');
});
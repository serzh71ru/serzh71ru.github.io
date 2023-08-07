// // -------------домашка 3(с кнопками)-----------------
// const container = document.querySelector('.homework__container'),
//     btn = container.querySelectorAll('.btn');

//     btn.forEach(elem => {
//     elem.addEventListener('click', (e) => {
//         if (e.target === btn[0]) {
//             btn[0].classList.toggle('red');
//         };
//         if (e.target === btn[1]) {
//             btn[1].classList.add('green');
//         };
//         if (e.target === btn[2]) {
//             btn[1].classList.remove('green');
//         }
//     })
// })


// -------------домашка 5 (метрики)--------------------

const page = document.querySelector('.page');
    header = document.querySelector('header'),
    pageWidth = page.offsetWidth,
    pageHeight = page.offsetHeight,
    headerWidth = header.clientWidth,
    headerHeight = header.clientHeight;

console.log(headerHeight);
console.log(headerWidth);

const p = document.createElement('p');
    
p.className = 'info_par';
    
// p.innerHTML = `высота страницы: ${pageHeight}, ширина страницы: ${pageWidth}, высота блока header: ${headerHeight}, ширина блока header: ${headerWidth}`
// document.body.afterbegin(p);

container.insertAdjacentHTML('beforeend', `<p>высота страницы: ${pageHeight}, ширина страницы: ${pageWidth}, высота блока header: ${headerHeight}, ширина блока header: ${headerWidth}</p>` );

const form = document.querySelector('.homework__form'),
    body = document.querySelector('body'),
    btn = document.querySelector('.form__btn'),
    modal = document.querySelector('.modal'),
    close = modal.querySelector('.close');
btn.addEventListener('click', () => {
    modal.classList.add('visible');
    body.style.overflow = 'hidden';
})

function closeModal() {
    modal.classList.remove('visible');
    body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
    if (e.keyCode === 27 && modal.classList.contains('visible')) {
        closeModal();
    }
})

modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target === close) {
        closeModal()
    }
})

    

form.addEventListener('submit', getFormValue);
function getFormValue(event) {
    event.preventDefault();
    const name = form.querySelector('[name="name"]'),
        secondName = form.querySelector('[name="second_name"]'),
        birthday = form.querySelector('[name="birthday"]'),
        gender = form.querySelector('[type="radio"]:checked');
    const formValue = {
        name: name.value,
        secondName: secondName.value,
        birthday: birthday.value,
        gender: gender.value
    };
    console.log(formValue);
}



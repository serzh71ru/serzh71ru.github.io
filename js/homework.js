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


// // -------------домашка 5 (метрики)--------------------

// const page = document.querySelector('.page'),
//     header = document.querySelector('header'),
//     pageWidth = page.offsetWidth,
//     pageHeight = page.offsetHeight,
//     headerWidth = header.clientWidth,
//     headerHeight = header.clientHeight;

// console.log(headerHeight);
// console.log(headerWidth);

// const p = document.createElement('p');
    
// p.className = 'info_par';
    
// // p.innerHTML = `высота страницы: ${pageHeight}, ширина страницы: ${pageWidth}, высота блока header: ${headerHeight}, ширина блока header: ${headerWidth}`
// // document.body.afterbegin(p);

// container.insertAdjacentHTML('beforeend', `<p>высота страницы: ${pageHeight}, ширина страницы: ${pageWidth}, высота блока header: ${headerHeight}, ширина блока header: ${headerWidth}</p>` );
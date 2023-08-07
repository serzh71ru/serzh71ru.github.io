const cardList = document.querySelector('card__list'),
    scrollControl = document.querySelector('.scroll__control'),
    rightArrow = scrollControl.querySelector('right__arrow'),
    leftArrow = document.querySelector('left__arrow');

function myScroll() {
    scrollControl.addEventListener('click', (e) => {
        if (e.target = rightArrow) {
            cardList.cssText = `margin-left = calc(margin-left - 10px)`
        }
    })
}

myScroll();
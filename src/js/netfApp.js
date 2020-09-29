const file = document.querySelector(`.container-carousel`);
const movies = document.querySelectorAll(`.movie`);

const leftArrow = document.getElementById(`left-arrow`);
const rightArrow = document.getElementById(`right-arrow`);

/* EVENT RIGHT-ARROW */
rightArrow.addEventListener(`click`, () => {
    file.scrollLeft += file.offsetWidth;

    const indicatorActive = document.querySelector(`.indicators .activo`);
    if(indicatorActive.nextSibling) {
        indicatorActive.nextSibling.classList.add(`activo`);
        indicatorActive.classList.remove(`activo`);
    }
})

/* leftArrow EVENT */ 
leftArrow.addEventListener(`click`, () => {
    file.scrollLeft -= file.offsetWidth;
    
    const indicatorActive = document.querySelector(`.indicators .activo`);
    if(indicatorActive.previousSibling) {
        indicatorActive.previousSibling.classList.add(`activo`);
        indicatorActive.classList.remove(`activo`);
    }
})
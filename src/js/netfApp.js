const file = document.querySelector(`.container-carousel`);
const movies = document.querySelectorAll(`.movie`);

const leftArrow = document.getElementById(`left-arrow`);
const rightArrow = document.getElementById(`right-arrow`);

/* EVENT RIGHT-ARROW */
rightArrow.addEventListener(`click`, () => {
    file.scrollLeft += file.offsetWidth; 
                             /*  Ancho del carousel */
    /* const indicatorActive = document.querySelector(`.indicators .activo`);
    if(indicatorActive.nextSibling) {
        indicatorActive.nextSibling.classList.add(`activo`);
        indicatorActive.classList.remove(`activo`);
    } */
})

/* leftArrow EVENT */ 
leftArrow.addEventListener(`click`, () => {
    file.scrollLeft -= file.offsetWidth;
    
   /*  const indicatorActive = document.querySelector(`.indicators .activo`);
    if(indicatorActive.previousSibling) {
        indicatorActive.previousSibling.classList.add(`activo`);
        indicatorActive.classList.remove(`activo`);
    } */
})

/* PAGINACIÓN */
const numPage = Math.ceil(movies.length / 3);
for(let i = 0; i < numPage; i ++) {
    const indicators = document.createElement(`button`);

    if(i === 0) {
        indicators.classList.add(`activo`);
    }
        
    document.querySelector(`.indicators`).appendChild(indicators);
    indicators.addEventListener(`click`, (e) => {
        file.scrollLeft = i * file.offsetWidth;

        /* REMOVER-COLOR-RED-ACTIVO */
        document.querySelector(`.indicators .activo`).classList.remove(`activo`);
        e.target.classList.add(`activo`);
    });
}

/* HOVER */
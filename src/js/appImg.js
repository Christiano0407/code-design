const carouselSlide = document.querySelector(`.carousel-slider`);
const carouselImages = document.querySelectorAll(`.carousel-slider img`);

/* Buttons */
const prevBtn = document.getElementById(`prevBtn`);
const nextBtn = document.getElementById(`nextBtn`);
/* 
const prevBtn = document.querySelector(`#prevBtn`);
const nextBtn = document.querySelector(`#nextBtn`); */

/* Counter */
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = `translatex(` + (-size * counter) + `px)`;

/* button listener */
nextBtn.addEventListener(`click`, () => {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform =  `translatex(` + (-size * counter) + `px)`;
});
prevBtn.addEventListener(`click`, () => {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform =  `translatex(` + (-size * counter) + `px)`;
});

carouselSlide.addEventListener(`transitionend`, () => {
    if(carouselImages[counter].id === `lastClone`) {
        carouselSlide.style.transition = "none";
        counter = carouselImages.lenght - 2;
        carouselSlide.style.transform = `translatex(` + (-size * counter) + `px)`;
    }
})

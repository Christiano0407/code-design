const carouselSlide = document.querySelector(`.carousel-slider`);
const carouselImages = document.querySelectorAll(`.carousel-slider img`);

/* Buttons */
const prevBtn = document.getElementById(`#prevBtn`);
const nextBtn = document.getElementById(`#nextBtn`);
/* 
const prevBtn = document.querySelector(`#prevBtn`);
const nextBtn = document.querySelector(`#nextBtn`); */

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = `translatex(` + (-size * counter) + `px)`;
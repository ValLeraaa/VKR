const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let counter = 0;
const imageWidth = images[0].clientWidth;

prevButton.addEventListener('click', () => {
    if (counter <= 0) return;
    counter--;
    carousel.style.transform = `translateX(-${imageWidth * counter}px)`;
});

nextButton.addEventListener('click', () => {
    if (counter >= images.length - 1) return;
    counter++;
    carousel.style.transform = `translateX(-${imageWidth * counter}px)`;
});

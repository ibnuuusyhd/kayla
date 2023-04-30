const slider = document.querySelector('.slider');
const slideWrapper = slider.querySelector('.slider__wrapper');
const slides = slider.querySelectorAll('.slider__item');
const slideCount = slides.length;
let currentIndex = 0;
let timer;

function goToSlide(index) {
    if (index < 0) {
        index = slideCount - 1;
    } else if (index >= slideCount) {
        index = 0;
    }
    slideWrapper.style.transform = `translateX(-${index * 100}%)`;
    slides[currentIndex].classList.remove('active');
    slides[index].classList.add('active');
    currentIndex = index;
}

function startSlider() {
    timer = setInterval(() => {
        goToSlide(currentIndex + 1);
    }, 5000);
}

function stopSlider() {
    clearInterval(timer);
}

slider.addEventListener('mouseover', stopSlider);
slider.addEventListener('mouseout', startSlider);

startSlider();

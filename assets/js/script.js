// Image Slider
var slides = document.querySelectorAll('.slide');
var leftArrow = document.querySelector('.left');
var rightArrow = document.querySelector('.right');
var slideInt; //Store On going Timer
var intTime = 5000;

// Left Arrow
leftArrow.addEventListener('click', function (e) {
    e.preventDefault();
    prevSlide();
    clrInterval();
});

// Right Arrow
rightArrow.addEventListener('click', function (e) {
    e.preventDefault();
    nextSlide();
    clrInterval();
})

// Function for next slide
function nextSlide() {
    var curr = document.querySelector('.curr');
    // Unset Current Slide
    curr.classList.remove('curr');
    // Set Next Sibling
    if (curr.nextElementSibling) {
        curr.nextElementSibling.classList.add('curr');
    }
    else {
        slides[0].classList.add('curr');
    }
}

// Function for previous slide
function prevSlide() {
    var curr = document.querySelector('.curr');
    // Unset Current Slide
    curr.classList.remove('curr');
    // Set Previous Sibling
    if (curr.previousElementSibling) {
        curr.previousElementSibling.classList.add('curr');
    }
    else {
        slides[slides.length - 1].classList.add('curr');
    }
}

// Automatic Slide Navigation
slideInt = setInterval(nextSlide, intTime);

// Function for clear interval
function clrInterval() {
    clearInterval(slideInt);
    slideInt = setInterval(nextSlide, intTime);
}

// Header Section
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    });
});

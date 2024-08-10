//image slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function plusSlides(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}



//countdown
function animateCounter(element, targetNumber, duration) {
    let start = 0;
    const increment = targetNumber / (duration / 10);
    const timer = setInterval(() => {
        start += increment;
        element.textContent = Math.round(start);
        if (start >= targetNumber) {
            element.textContent = targetNumber;
            clearInterval(timer);
        }
    }, 10);
}

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const counter1 = document.getElementById('counter1');
    const counter2 = document.getElementById('counter2');
    const counter3 = document.getElementById('counter3');

    // Start the animation for each counter
    animateCounter(counter1, 1000, 5000); // Counter 1: Target 2800, Duration 2000ms
    animateCounter(counter2, 5, 3000); // Counter 2: Target 1500, Duration 2000ms
    animateCounter(counter3, 1000, 5000); // Counter 3: Target 3200, Duration 2000ms
});


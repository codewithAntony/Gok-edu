let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//countdown
// script.js
// Function to animate the counter
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
    animateCounter(counter1, 12510, 2000); // Counter 1: Target 2800, Duration 2000ms
    animateCounter(counter2, 25, 2000); // Counter 2: Target 1500, Duration 2000ms
    animateCounter(counter3, 1217, 2000); // Counter 3: Target 3200, Duration 2000ms
});


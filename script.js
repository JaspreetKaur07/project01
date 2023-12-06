// To Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Get references to the product carousel, slides, and watch names
    var productCarousel = document.getElementById('product-carousel');
    var slides = document.querySelectorAll('.slide');
    var watchNames = document.querySelectorAll('.watch-name');

    // Initialize the current slide index
    var currentSlideIndex = 0;

    // Function to show the next slide
    function showNextSlide() {
        // Remove 'active' class from the current slide and watch name
        slides[currentSlideIndex].classList.remove('active');
        watchNames[currentSlideIndex].classList.remove('active');

        // To Update the current slide index to the next one
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;

        // Add 'active' class to the new current slide and watch name
        slides[currentSlideIndex].classList.add('active');
        watchNames[currentSlideIndex].classList.add('active');
    }

    // Set an interval to show the next slide every 3000 milliseconds (3 seconds)
    setInterval(showNextSlide, 3000);
});

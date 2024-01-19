document.addEventListener("DOMContentLoaded", function () {
    showSlides();
});

function showSlides() {
    var slides = document.getElementsByClassName("mySlides");
    var slideIndex = 0;

    function displaySlide() {
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex].style.display = "block";
    }

    // Initial display
    displaySlide();

    // Automatic slideshow
    setInterval(function () {
        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        displaySlide();
    }, 3000); // Change slide every 3 seconds
}

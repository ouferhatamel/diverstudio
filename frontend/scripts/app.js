const carousel = document.querySelector('.slider-carousel')
const infoCarousel = document.querySelector('.slider-infoCarousel')
const testimonials = document.querySelector('.testimonials-carousel')
const projectImgs = carousel.querySelectorAll('img')
const navBtns = document.querySelectorAll(".navigationBtn")

let imageIndex = 1
let testimonialIndex = 1
let intervalId
navBtns.forEach((button) => button.addEventListener("click", updateClick))

// Auto Slide
autoSlide()

// Functions

// Start the automatic slider
function autoSlide(){
    intervalId = setInterval(() => slideImage(++imageIndex), 2000);
}
// Update the carousel display
function slideImage(){
    // Calculate the updated image index
    imageIndex = imageIndex === projectImgs.length ? 0 : imageIndex < 0 ? projectImgs.length - 1 : imageIndex;
    testimonialIndex = testimonialIndex === projectImgs.length ? 0 : testimonialIndex < 0 ? projectImgs.length - 1 : testimonialIndex;
    // Update the carousel display to show the specified image
    carousel.style.transform = `translate(-${imageIndex * 100}%)`;
    infoCarousel.style.transform = `translate(-${imageIndex * 100}%)`;
    testimonials.style.transform = `translate(-${testimonialIndex * 100}%)`;
};
// Update the carousel display after button click
function updateClick(e){
    // Stop the automatic slideshow
    clearInterval(intervalId);
    // Calculate the updated image index based on the button clicked
    imageIndex += e.target.id === "next" ? 1 : -1;
    slideImage(imageIndex);
    // Restart the automatic slideshow
    autoSlide();
};






const carousel = document.querySelector('.slider-carousel')
const infoCarousel = document.querySelector('.slider-infoCarousel')
const testimonials = document.querySelectorAll('.testimonials-carousel .testimonial')
const projectImgs = carousel.querySelectorAll('img')
const navBtns = document.querySelectorAll(".navigationBtn")
const openMenu = document.getElementById('mobileNav-btn');
const closeMenu = document.getElementById('close');

openMenu.addEventListener('click', () => {
    const menu = document.querySelector('.mobileNav-menu');
    menu.style.transform = 'translateY(0)'
});
closeMenu.addEventListener('click', () => {
    const menu = document.querySelector('.mobileNav-menu');
    menu.style.transform = 'translateY(-100vh)'
});

let imageIndex = 1
let testimonialIndex = 1
let intervalId
let intervalId2
navBtns.forEach((button) => button.addEventListener("click", updateClick))

// Auto Slide
autoProjectSlide()
autoTestimonialSlide()

// Functions

// Automatic project images slider
function autoProjectSlide(){
    intervalId = setInterval(() => slideImage(++imageIndex), 2000);
}
function autoTestimonialSlide(){
    intervalId2 = setInterval(() => slideTestimonials(++testimonialIndex), 3000);
}
// Slide project images
function slideImage(){
    // Calculate the updated image index
    imageIndex = imageIndex === projectImgs.length ? 0 : imageIndex < 0 ? projectImgs.length - 1 : imageIndex;
    
    // Update the carousel display to show the specified image
    carousel.style.transform = `translate(-${imageIndex * 100}%)`;
    infoCarousel.style.transform = `translate(-${imageIndex * 100}%)`;
}
// Slide testimonials
function slideTestimonials(){
    testimonialIndex = testimonialIndex === testimonials.length ? 0 : testimonialIndex < 0 ? testimonials.length - 1 : testimonialIndex;
    // Auto slide the tesimonials
    testimonials.forEach(testimonial => {
        testimonial.style.transform = `translate(-${testimonialIndex * 100}%)`
    })

}
// Slide projects on click
function updateClick(e){
    // Stop the automatic slideshow
    clearInterval(intervalId);
    // Calculate the updated image index based on the button clicked
    imageIndex += e.target.id === "next" ? 1 : -1;
    slideImage(imageIndex);
    // Restart the automatic slideshow
    autoProjectSlide();
};






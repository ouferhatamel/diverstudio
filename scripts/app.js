// Global variables
let imageIndex = 1
let testimonialIndex = 1
let intervalId
let intervalId2

// EventListeners
const frBtn = document.getElementById('fr');
frBtn.addEventListener('click', (e) => {
    const langsBtns = document.querySelectorAll('.langs-btn')
    langsBtns.forEach(btn => {
        btn.classList.remove('selected')
    })
    e.target.classList.add('selected')
    translatePage('fr')
})
const enBtn = document.getElementById('en');
enBtn.addEventListener('click', (e) => {
    const langsBtns = document.querySelectorAll('.langs-btn')
    langsBtns.forEach(btn => {
        btn.classList.remove('selected')
    })
    e.target.classList.add('selected')
    translatePage('en')
})
const openMenu = document.getElementById('mobileNav-btn')
openMenu.addEventListener('click', () => {
    const menu = document.querySelector('.mobileNav-menu');
    menu.style.transform = 'translateY(0)'
});
const closeMenu = document.getElementById('close');
closeMenu.addEventListener('click', () => {
    const menu = document.querySelector('.mobileNav-menu');
    menu.style.transform = 'translateY(-100vh)'
});
const navBtns = document.querySelectorAll(".navigationBtn")
navBtns.forEach((button) => button.addEventListener("click", updateClick))

// Function invocations
// Auto Slide
checkUserLang()
autoProjectSlide()
autoTestimonialSlide()

// Functions déclarations
// Translate page
function translatePage(language) {
    fetch(`/locales/${language}.json`)
      .then(response => response.json())
      .then(data => {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
          const key = element.getAttribute('data-translate');
          element.textContent = data[key];
        });
      });
}
// Check user language
function checkUserLang(){
    let userLang = navigator.language
    if (userLang === 'en-US') {
        translatePage("en")
        const langsBtns = document.querySelectorAll('.langs-btn')
        langsBtns.forEach(btn => {
            btn.classList.remove('selected')
        })
        enBtn.classList.add('selected')
    } else if (userLang === 'fr-FR') {
        const langsBtns = document.querySelectorAll('.langs-btn')
        langsBtns.forEach(btn => {
            btn.classList.remove('selected')
        })
        frBtn.classList.add('selected')
        translatePage("fr")
    } 
}
// Automatic project images slider
function autoProjectSlide(){
    intervalId = setInterval(() => slideImage(++imageIndex), 2000);
}
// Automatic testimonials slider
function autoTestimonialSlide(){
    intervalId2 = setInterval(() => slideTestimonials(++testimonialIndex), 3000);
}
// Slide project images
function slideImage(){
    const infoCarousel = document.querySelector('.slider-infoCarousel')
    const carousel = document.querySelector('.slider-carousel')
    const projectImgs = carousel.querySelectorAll('img')
    // Calculate the updated image index
    imageIndex = imageIndex === projectImgs.length ? 0 : imageIndex < 0 ? projectImgs.length - 1 : imageIndex;
    
    // Update the carousel display to show the specified image
    carousel.style.transform = `translate(-${imageIndex * 100}%)`;
    infoCarousel.style.transform = `translate(-${imageIndex * 100}%)`;
}
// Slide testimonials
function slideTestimonials(){
    const testimonials = document.querySelectorAll('.testimonials-carousel .testimonial')
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






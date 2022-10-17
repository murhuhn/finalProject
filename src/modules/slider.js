const slider = () => {
    const sliderBlock = document.querySelector('.top-slider');
    const slides = sliderBlock.querySelectorAll('.item');
    let currentSlide = 0;

 
function nextSlide() {
    slides[currentSlide].className = 'item';
    currentSlide = (currentSlide+1) % slides.length;
    slides[currentSlide].className = 'item-active';
} 
setInterval(nextSlide, 3000);
nextSlide();
}

export default slider;
const carousel = () => {
  const sliderBlock = document.querySelector('.services-carousel'),
        slides = sliderBlock.querySelectorAll('.services-carousel__item'),
        btnNext = document.querySelector('.arrow-right'),
        btnPrev = document.querySelector('.arrow-left');

  slides.forEach((slide, index) => {
    if (index <= 2) {
      slide.classList.add('active');
    }
  });

  const currentSlides = () => {
    slides.forEach(slide => {
      slide.classList.toggle('active');
    });
  };

  btnNext.addEventListener('click', () => {
    currentSlides();
  });

  btnPrev.addEventListener('click', () => {
    currentSlides();
  });
  currentSlides();
};

export default carousel;


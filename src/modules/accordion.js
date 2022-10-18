const accordion = () => {
  const accordionBlock = document.querySelector('.accordeon');
  const accordionElement = accordionBlock.querySelectorAll('.element');

  accordionElement.forEach(el => {
      el.addEventListener('click', () => {
          if (el.classList.contains('active')) {
              el.classList.remove('active');
              el.childNodes[3].classList.remove('active');
          } else {
            accordionElement.forEach((textEl) => {
                textEl.classList.remove('active');
                textEl.childNodes[3].classList.remove('active');
              });
              el.classList.add('active');
              el.childNodes[3].classList.add('active');
          }
      });
  });
};

export default accordion;
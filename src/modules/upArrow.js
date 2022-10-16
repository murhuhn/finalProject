const upArrow = () => {

  const upArrow = document.querySelector('.up');

  document.addEventListener('scroll', () => {
      if (window.pageYOffset > 650) {
        upArrow.style.display = 'block';
      } else {
        upArrow.style.display = 'none';
      }
  });

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  }

  upArrow.addEventListener('click', backToTop);
};

export default upArrow;


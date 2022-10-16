const modal = () =>{
  const modal = document.querySelector('.modal-callback'),
        modalOverlay = document.querySelector('.modal-overlay');
  
  document.addEventListener('click', (e) => {
      if (e.target.closest('.fancyboxModal')) {
          modal.classList.add('visible');
          modalOverlay.classList.add('visible');
      }else if (e.target.closest('.modal-close')) {
          modal.classList.remove('visible');
          modalOverlay.classList.remove('visible');
      }else if (e.target.closest('.modal-overlay')) {
          modal.classList.remove('visible');
          modalOverlay.classList.remove('visible');
      };
  }); 
};

export default modal;
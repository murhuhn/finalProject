const validation = () => {
  const formName = document.querySelectorAll('[placeholder="Ваше имя"]');
  const formPhone = document.querySelectorAll('[placeholder="Телефон*"]');

  formPhone.forEach(formPhone => formPhone.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^+ 0-9]+(.*)/, '').trim();
  }))

  formName.forEach(formName => formName.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^а-яА-я\-\s]/, '');
  }))
}
export default validation;
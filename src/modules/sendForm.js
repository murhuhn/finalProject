const sendForm = ({ idForm }) => {
  const form = document.getElementById(idForm);
  const formElements = form.querySelectorAll('input');
  const statusBlock = document.createElement('div');
  const loadText = 'Загрузка...';
  const errorText = 'Ошибка';
  const successText = 'Данные успешно отправлены!';
  
  const validate = (list) => {

    let success = true;

    list.forEach(input => {

        if (input.name == 'tel' && input.value.length < 10) {
            success = false;
        }
        if (input.name == 'tel' && input.value.length > 12) {
            success = false;
        }
    })
    return success;
}
  const sendData = (data) => {
      return fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
              "Content-Type": "application/json"
          }
      }).then(res => res.json());
  };

  const submitForm = () => {
      const formElements = form.querySelectorAll('input');
      const formData = new FormData(form);
      const formbody = {};

      statusBlock.textContent = loadText;
      form.append(statusBlock)
      formData.forEach((val, key) => {
          formbody[key] = val;
      });

      if (validate(formElements)) {
        sendData(formbody)
            .then(data => {
                statusBlock.textContent = successText;
                formElements.forEach(input => {
                    input.value = '';
                });
                setTimeout(clear, 3000);
            }).catch(error => {
                statusBlock.textContent = errorText;
            });
            
    } else {
        statusBlock.textContent = "Данные не валидны";
    }
};

  try {
      if (!form) {
          throw new Error('Верните, пожалуйста, форму');
      }

      form.addEventListener('submit', (event) => {
          event.preventDefault();
          let count = 0;
          formElements.forEach(el => {
              if (el.type === 'tel' && el.value === '' || el.type === 'text' && el.value === '') {
                  count++;
              } 
          });

          if (count === 0) {
              submitForm();
          }
      });


  } catch (error) {
      console.log(error.message);
  }
  const clear = () => {
      statusBlock.textContent = '';
  };

};

export default sendForm;


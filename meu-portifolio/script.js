const form = document.getElementById('contact-form');
const btn = form.querySelector('button[type="submit"]');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  btn.disabled = true;
  btn.textContent = 'Enviando...';
  formMessage.textContent = '';  // limpa mensagens anteriores

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      formMessage.style.color = 'green';
      formMessage.textContent = 'Mensagem enviada com sucesso! Obrigada :)';
      form.reset();
    } else {
      formMessage.style.color = 'red';
      formMessage.textContent = 'Ops, algo deu errado. Tente novamente mais tarde.';
    }
  } catch (error) {
    formMessage.style.color = 'red';
    formMessage.textContent = 'Erro na conexão. Verifique sua internet e tente novamente.';
  }

  btn.disabled = false;
  btn.textContent = 'Enviar';
});

const form = document.querySelector('form');
const statusMessage = document.querySelector('[role="status"]');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  statusMessage.textContent = 'Inscrição confirmada!';
});

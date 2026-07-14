const applicationForm = document.getElementById('application');
const successMessage = document.getElementById('success');

applicationForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!applicationForm.reportValidity()) return;

  successMessage.classList.add('visible');
  successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

const applicationForm = document.getElementById('application');
const successMessage = document.getElementById('success');
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwS0wFFXqJnqfi0VV6in0VX06fZqksaf6Hx1pl-7mVb4MgLmqeVUXy_PssMGqsLcQOr/exec';

document.querySelectorAll('input[type="tel"]').forEach((phoneInput) => {
  phoneInput.addEventListener('input', () => {
    phoneInput.value = phoneInput.value.replace(/\D/g, '').slice(0, 10);
  });
});

document.querySelectorAll('input[type="number"]').forEach((numberInput) => {
  numberInput.addEventListener('keydown', (event) => {
    if (['e', 'E', '+', '-'].includes(event.key)) event.preventDefault();
  });
});

applicationForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (!applicationForm.reportValidity()) return;

  const submitButton = applicationForm.querySelector('button[type="submit"]');
  const formData = new FormData(applicationForm);
  const data = {};

  for (const [key, value] of formData.entries()) {
    if (data[key]) data[key] = [].concat(data[key], value);
    else data[key] = value;
  }

  submitButton.disabled = true;
  submitButton.textContent = 'Saving application...';

  try {
    if (APPS_SCRIPT_URL.startsWith('PASTE_')) throw new Error('Missing Apps Script URL');

    // no-cors lets a Google Apps Script Web App accept form data from this page.
    await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(data)
    });

    successMessage.textContent = 'Your application has been sent to Lakshya successfully.';
    successMessage.classList.add('visible');
    applicationForm.reset();
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } catch {
    successMessage.textContent = 'Could not save your application. Please configure the Google Apps Script Web App URL.';
    successMessage.classList.add('visible');
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = 'Submit Application';
  }
});

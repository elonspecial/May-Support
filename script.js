const form = document.querySelector('#login-form');
const passwordInput = document.querySelector('#password');
const passwordToggle = document.querySelector('.password-toggle');
const formNote = document.querySelector('#form-note');
const quickAccess = document.querySelector('#quick-access');
const verificationForm = document.querySelector('#verification-form');
const verificationNote = document.querySelector('#verification-note');
const accountDashboard = document.querySelector('#account-dashboard');
const loginActions = document.querySelector('#login-actions');
const dashboardStatus = document.querySelector('#dashboard-status');
const signOutButton = document.querySelector('#sign-out-button');
const notificationButton = document.querySelector('#notification-button');

passwordToggle.addEventListener('click', () => {
  const isVisible = passwordInput.type === 'text';
  passwordInput.type = isVisible ? 'password' : 'text';
  passwordToggle.textContent = isVisible ? 'Show' : 'Hide';
  passwordToggle.setAttribute('aria-label', isVisible ? 'Show password' : 'Hide password');
  passwordToggle.setAttribute('aria-pressed', String(!isVisible));
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.hidden = true;
  verificationForm.hidden = false;
  verificationForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

verificationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const demoCode = document.querySelector('#demo-code').value;
  const ownerConfirmation = document.querySelector('#owner-confirmation').checked;

  if (demoCode !== '123456' || !ownerConfirmation) {
    verificationNote.textContent = 'For this demo, enter 123456 and confirm the checkbox.';
    verificationNote.style.color = '#a64a2b';
    return;
  }

  verificationNote.textContent = 'Demo verification complete. Nothing was stored or sent.';
  verificationNote.style.color = '#5f6f22';
  verificationForm.hidden = true;
  loginActions.hidden = true;
  accountDashboard.hidden = false;
  accountDashboard.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

document.querySelectorAll('[data-demo-action]').forEach((button) => {
  button.addEventListener('click', () => {
    dashboardStatus.textContent = `${button.dataset.demoAction} is visualized only in this local prototype.`;
  });
});

notificationButton.addEventListener('click', () => {
  dashboardStatus.textContent = 'You have 1 demo notification: your sample account is ready to explore.';
});

signOutButton.addEventListener('click', () => {
  accountDashboard.hidden = true;
  loginActions.hidden = false;
  form.hidden = false;
  verificationForm.hidden = true;
  form.reset();
  verificationForm.reset();
  form.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

quickAccess.addEventListener('click', () => {
  formNote.textContent = 'Quick access is available in this local prototype.';
  formNote.style.color = '#5f6f22';
});

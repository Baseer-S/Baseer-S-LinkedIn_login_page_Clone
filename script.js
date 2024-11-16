// Password visibility toggle
const showBtn = document.querySelector('.show-btn');
const passwordField = document.querySelector('.password-field input');

showBtn.addEventListener('click', () => {
  if (passwordField.type === 'password') {
    passwordField.type = 'text';
    showBtn.textContent = 'Hide';
  } else {
    passwordField.type = 'password';
    showBtn.textContent = 'Show';
  }
});

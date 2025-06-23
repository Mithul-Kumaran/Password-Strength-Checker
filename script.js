const passwordInput = document.getElementById('password');
const strengthBar = document.getElementById('strength-bar');
const strengthText = document.getElementById('strength-text');
const togglePasswordBtn = document.getElementById('togglePassword');

passwordInput.addEventListener('input', () => {
  const password = passwordInput.value;
  const strength = checkStrength(password);
  updateStrengthMeter(strength);
});

togglePasswordBtn.addEventListener('click', () => {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  togglePasswordBtn.textContent = type === 'password' ? '👁' : '🙈';
});

function checkStrength(password) {
  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) strength++;
  if (/\d/.test(password)) strength++;
  if (/[\W_]/.test(password)) strength++;

  return strength;
}

function updateStrengthMeter(strength) {
  let text = '';
  let color = '';

  switch (strength) {
    case 0:
    case 1:
      text = 'Weak — Use more characters, mix cases, numbers, and symbols.';
      color = '#e53935'; // red
      break;
    case 2:
    case 3:
      text = 'Medium — Try adding more complexity.';
      color = '#fbc02d'; // yellow
      break;
    case 4:
      text = 'Strong — Great password!';
      color = '#43a047'; // green
      break;
    default:
      text = '';
      color = '#e0e0e0';
  }

  strengthBar.style.background = color;
  strengthText.textContent = text;
  strengthText.style.color = color;
}

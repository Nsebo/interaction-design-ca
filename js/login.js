const thanks = document.querySelector('.thanks');
const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const smallEmail = document.querySelector('.small__email');
const smallPassword = document.querySelector('.small__password');
const iconEmail = document.querySelector('.icon__email');
const iconPassword = document.querySelector('.icon__password');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const emailVal = email.value;
  const passwordVal = password.value;

  // check if it is a valid Email
  if (!validateEmail(emailVal) || emailVal === '') {
    iconEmail.classList.add('error');
    smallEmail.classList.add('error');
    email.classList.add('error');
  } else {
    iconEmail.classList.remove('error');
    smallEmail.classList.remove('error');
    email.value = '';
    email.classList.add('success');
  }

  // check if it is a valid Password
  if (passwordVal === '') {
    iconPassword.classList.add('error');
    smallPassword.classList.add('error');
    password.classList.add('error');
  } else {
    iconPassword.classList.remove('error');
    smallPassword.classList.remove('error');
    password.value = '';
    password.classList.add('success');
  }

  if (validateEmail(emailVal) || !emailVal === '' || !passwordVal === '') {
    thanks.classList.add('success');
  }
});

// Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
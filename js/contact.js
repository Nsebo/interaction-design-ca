const id = (id) => document.getElementById(id);

const classes = (classes) => document.getElementsByClassName(classes);

const name = id('name'),
  subject = id('subject'),
  email = id('email'),
  address = id('address'),
  form = id('form'),
  errorMsg = classes('error'),
  successIcon = classes('success-icon'),
  failureIcon = classes('failure-icon'),
  successMessage = classes('success-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  engine(name, 0, 'Name cannot be blank');
  engine(subject, 1, 'Subject cannot be blank');
  engine(email, 2, 'Email cannot be blank');
  engine(address, 3, 'Address cannot be blank');
});

const engine = (id, serial, message) => {
  if (id.value.trim() === '') {
    errorMsg[serial].innerHTML = message;
    failureIcon[serial].style.opacity = '1';
    successIcon[serial].style.opacity = '0';
  } else {
    errorMsg[serial].innerHTML = '';
    failureIcon[serial].style.opacity = '0';
    successIcon[serial].style.opacity = '1';
    // successMessage.classList.add('success');
  }
};

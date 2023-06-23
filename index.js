//  Hamburger Menu

const dropDown = document.getElementById('icon-1');
const closeUp = document.getElementById('close');
const items = document.querySelector('.img-1-nav');
const closePort = document.querySelector('.refer-1');
const closeAbout = document.querySelector('.refer-2');
const closeCont = document.querySelector('.refer-3');

const opening = () => { items.style.visibility = 'visible'; };
const closing = () => { items.style.visibility = 'hidden'; };

dropDown.addEventListener('click', opening);
closeUp.addEventListener('click', closing);
closePort.addEventListener('click', closing);
closeAbout.addEventListener('click', closing);
closeCont.addEventListener('click', closing);

// Form Validation

const nameError = document.querySelector('#name-err');
const emailError = document.querySelector('#email-err');
const textError = document.querySelector('#text-err');
const submitError = document.querySelector('#submit-err');

function validateName() {
  const name = document.querySelector('#name-id').value;

  if (name.length === 0) {
    nameError.innerHTML = 'Name is required';
    return false;
  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = 'Wrie full name';
    return false;
  }
  nameError.innerHTML = '<i class="fa-regular fa-circle-check" style="color: #3bc456;"></i>';
  return true;
}

function validateEmail() {
  const email = document.querySelector('#email-id').value;

  if (email.length === 0) {
    emailError.innerHTML = 'Email is required';
    return false;
  }

  if (!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    emailError.innerHTML = 'Invalid email';
    return false;
  }

  emailError.innerHTML = '<i class="fa-regular fa-circle-check" style="color: #3bc456;"></i>';
  return true;
}

function validateText() {
  const text = document.querySelector('#text-area').value;
  const length = 30;
  const required = length - text.length;

  if (required > 0) {
    textError.innerHTML = `${required}more characters left`;
    return false;
  }

  textError.innerHTML = '<i class="fa-regular fa-circle-check" style="color: #3bc456;"></i>';
  return true;
}

function validate() { // eslint-disable-line no-unused-vars
  if (!validateName() || !validateEmail() || !validateText()) {
    submitError.style.display = 'block';
    submitError.innerHTML = 'Please fix error!';
    setTimeout(() => { submitError.style.display = 'none'; }, 3000);
    return false;
  }
  return true;
}
const baseUrl = 'https://60c9bcb9772a7600172043fe.mockapi.io/api/v1/form';

const emailElem = document.querySelector('#email');
const nameElem = document.querySelector('#name');
const passwordElem = document.querySelector('#password');
const submitBtnElem = document.querySelector('.submit-button');
const loginFormElem = document.querySelector('.login-form');
const errorElem = document.querySelector('.error-text');

const onFieldChange = () => {
  if (loginFormElem.reportValidity()) {
    submitBtnElem.disabled = false;
  }
  errorElem.textContent = '';
};

loginFormElem.addEventListener('input', onFieldChange);

let formData;

const recordUserData = userData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });

const alertMessage = message => {
  alert(JSON.stringify(message));

  emailElem.value = '';
  nameElem.value = '';
  passwordElem.value = '';
  submitBtnElem.disabled = true;
};

const errorMessage = () => {
  errorElem.textContent = 'Failed to create user';
};

const onFormSubmit = e => {
  e.preventDefault();

  formData = [...new FormData(loginFormElem)].reduce(
    (acc, [field, value]) => ({ ...acc, [field]: value }),
    {},
  );

  recordUserData(formData)
    .then(response => response.json(response))
    .then(message => alertMessage(message))
    .catch(errorMessage);
};

loginFormElem.addEventListener('submit', onFormSubmit);

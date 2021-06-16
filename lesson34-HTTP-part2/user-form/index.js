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
};

loginFormElem.addEventListener('input', onFieldChange);

const createUserData = () => ({
  email: emailElem.value,
  userName: nameElem.value,
  password: passwordElem.value,
});

const catchError = () => {
  errorElem.textContent = new Error('Failed to create user');
};

const recordUserData = userData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });

const getUserData = userId =>
  fetch(`${baseUrl}/${userId}`).then(response => response.json(response));

const onFormSubmit = e => {
  e.preventDefault();

  const userData = createUserData();
  recordUserData(userData)
    .then(response => response.json(response))
    .then(data => getUserData(data.id))
    .then(message => alert(JSON.stringify(message)))
    .catch(() => Promise.reject(catchError()));

  emailElem.value = '';
  nameElem.value = '';
  passwordElem.value = '';
  submitBtnElem.disabled = true;
};

loginFormElem.addEventListener('submit', onFormSubmit);

// disabled

// .catch(() => Promise.reject(new Error('Failed to create user')));

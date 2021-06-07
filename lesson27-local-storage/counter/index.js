const counterEl = document.querySelector('.counter');
const counterValueEl = document.querySelector('.counter__value');

const onCounterChange = e => {
  const isButton = e.target.classList.contains('counter__button');

  if (!isButton) {
    return;
  }

  const action = e.target.dataset.action;
  

  const oldValue = Number(counterValueEl.textContent);

  const newValue = (action === 'decrease') 
    ? oldValue - 1
    : oldValue + 1;

  localStorage.setItem('currentValue', newValue);

  counterValueEl.textContent = newValue;
}

counterEl.addEventListener('click', onCounterChange);

const onStorageChange = (e) => {
  counterValueEl.textContent = e.newValue;
}

window.addEventListener('storage', onStorageChange);

const onDocumentLoaded = () => {
  counterValueEl.textContent = localStorage.getItem('currentValue');
}

document.addEventListener('DOMContentLoaded', onDocumentLoaded);
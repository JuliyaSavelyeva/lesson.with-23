const divElement = document.querySelector('.rect_div'); 
const pElement = document.querySelector('.rect_p');
const spanElement = document.querySelector('.rect_span');
const eventsList = document.querySelector('.events-list');


const logTarget = (text, color) => {
  eventsList.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`
}

const divGrey = logTarget.bind(null, 'DIV', 'grey');
const pGrey = logTarget.bind(null, 'P', 'grey');
const spanGrey = logTarget.bind(null, 'SPAN', 'grey');

const divGreen = logTarget.bind(null, 'DIV', 'green');
const pGreen = logTarget.bind(null, 'P', 'green');
const spanGreen = logTarget.bind(null, 'SPAN', 'green');

const attachHandlers = () => {
  divElement.addEventListener('click', divGrey, true);
  pElement.addEventListener('click', pGrey, true);
  spanElement.addEventListener('click', spanGrey, true);

  divElement.addEventListener('click', divGreen);
  pElement.addEventListener('click', pGreen);
  spanElement.addEventListener('click', spanGreen);
}

const removeHandlers = () => {
  divElement.removeEventListener('click', divGrey, true);
  pElement.removeEventListener('click', pGrey, true);
  spanElement.removeEventListener('click', spanGrey, true);

  divElement.removeEventListener('click', divGreen);
  pElement.removeEventListener('click', pGreen);
  spanElement.removeEventListener('click', spanGreen);
}


// ===============================================================
const clearBtn = document.querySelector('.clear-btn');
const removeBtn = document.querySelector('.remove-handlers-btn');
const addBtn = document.querySelector('.attach-handlers-btn');

const clearList = () => {
  eventsList.innerHTML = '';
}

const clear = clearList.bind(null);
const attach = attachHandlers.bind(null);
const remove = removeHandlers.bind(null);

document.addEventListener("DOMContentLoaded", attach);
clearBtn.addEventListener('click', clear);
removeBtn.addEventListener('click', remove);
addBtn.addEventListener('click', attach);




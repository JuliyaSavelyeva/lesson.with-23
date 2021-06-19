const listElem = document.querySelector('.repo-list');

export const renderRepos = reposList => {
  const reposListElems = reposList.map(({ name }) => {
    const listItemElem = document.createElement('li');
    listItemElem.classList.add('repo-list__item');
    listItemElem.textContent = name;

    return listItemElem;
  });
  listElem.append(...reposListElems);
};

export const cleanReposList = () => {
  listElem.innerHTML = '';
};

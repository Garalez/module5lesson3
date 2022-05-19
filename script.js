'use strict';
const list = document.querySelector('.list');

const addText = () => {
  const request = prompt('text or del,clear,exit', 'text or del,clear,exit');
  const item = document.createElement('li');
  item.append(request);
  if (item.textContent.trim() !== '') list.append(item);
  return request;
};

const delItem = () => {
  list.removeChild(list.lastChild);
};

const clearList = () => {
  list.innerHTML = '';
};

const start = () => {
  const youChoose = addText();
  if (youChoose === 'exit' || youChoose === null) {
    delItem();
    return;
  } else if (youChoose === 'del') {
    delItem();
    console.log('delItem(): ', delItem());
  } else if (youChoose === 'clear') {
    clearList();
  } else if (youChoose === '') {
    setTimeout(() => {
      start();
    }, 500);
  }
  setTimeout(() => {
    start();
  }, 500);
};

start();

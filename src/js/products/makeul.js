import { data } from '../../data/data';
import dataJSON from '../../menu.json';
import liTemplate from './templates/menu_Preview.hbs';
import dishMarkupCreater from './templates/menu.hbs';
import { modal } from '../modal/modal';

const addToCart = e => {
  const id = e.target.closest('[data-id]').dataset.id;
  const dish = data.products.find(product => product.id === id);
  if (e.target.dataset) {
    if (e.target.dataset.button === 'cartButton') {
      data.cart = [...data.cart, dish];
    }
  }
};

const addListeners = () => {
  const parent = document.querySelector('.products_items');
  parent.addEventListener('click', addToCart);
};

export const products = () => {
  data.products = [...dataJSON];
  const ul = document.querySelector('.js-menu');
  let allLi = '';
  data.products.forEach(product => (allLi += liTemplate(product)));
  ul.insertAdjacentHTML('afterbegin', allLi);

  const createAction = e => {
    const id = e.target.closest('[data-id]').dataset.id;
    const dish = data.products.find(product => product.id === id);

    if (e.target.nodeName === 'IMG') {
      modal(dishMarkupCreater(dish), addListeners);
    }
    addToCart(e);
  };

  ul.addEventListener('click', createAction);
};

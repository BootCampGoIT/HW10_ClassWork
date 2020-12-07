import { data } from '../../data/data';
import createItemTemplate from './template/cartItems.hbs';
import { modal } from '../modal/modal';

const createMarkup = () => {
  return data.cart.reduce((acc, item) => {
    acc += createItemTemplate(item);
    return acc;
  }, '');
}

const removeFromCart = e => {
  const id = e.target.closest('[data-id]').dataset.id;
  data.cart = [...data.cart.filter(product => product.id !== id)];
  parent.innerHTML = createMarkup();
};

const addListeners = () => {
  const parent = document.querySelector('.products_items');

  parent.addEventListener('click', removeFromCart);
};

const removeListeners = () => {
  const parent = document.querySelector('.products_items');
  parent.removeEventListener('click', removeFromCart);
}



export const cart = () => {
  if (data.cart.length) {
    modal(createMarkup(), addListeners, removeListeners);
  }
};

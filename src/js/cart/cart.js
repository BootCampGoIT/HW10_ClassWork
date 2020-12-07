import { data } from '../../data/data';
import createItemTemplate from './template/cartItems.hbs';

export const cart = () => {
  const cartList = document.querySelector('.cart');
  cartList.classList.toggle('cartClose');

  if (data.cart.length) {
    const markup = data.cart.reduce((acc, item) => {
      acc += createItemTemplate(item);
      return acc;
    }, '');
    cartList.innerHTML = markup;
  }
};

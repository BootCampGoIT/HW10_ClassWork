import { data } from '../../data/data';
import dataJSON from '../../menu.json';
import liTemplate from './templates/menu.hbs';

export const products = () => {
  data.products = [...dataJSON];
  const ul = document.querySelector('.js-menu');
  let allLi = '';
  data.products.forEach(product => (allLi += liTemplate(product)));
  ul.insertAdjacentHTML('afterbegin', allLi);

  const getId = e => {
    if (e.target.dataset) {
      if (e.target.dataset.button === 'cartButton') {
        const id = e.target.closest('[data-id]').dataset.id;
        const dish = data.products.find(product => product.id === id);
        data.cart = [...data.cart, dish];
      }
    }
  };

  ul.addEventListener('click', getId);
};

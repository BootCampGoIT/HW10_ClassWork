import { chooseTheme } from './js/themeSwitcher/choosetheme.js';
import { products } from './js/products/makeul.js';
import { cart } from './js/cart/cart.js';
import './styles.css';

chooseTheme();
products();

const cartTitle = document.querySelector("[data-cart='cart']");
cartTitle.addEventListener('click', cart);

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

export const modal = (markup, addListeners, removeListeners) => {
  const instance = basicLightbox.create(
    `
      <div class="modal">
      <ul class="products_items">${markup}</ul>
          <a>Close</a>
      </div>
  `,
    {
      onShow: instance => {
        instance.element().querySelector('a').onclick = instance.close;
        // removeListeners();
      },
    },
    {
      onClose: (instance) => {
        // instance.element().querySelector('a').onclick = instance.close;
        // console.log('close')
        // removeListeners();
      },
    },
  );

  instance.show();
  addListeners();
};

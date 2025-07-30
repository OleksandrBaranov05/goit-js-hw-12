import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  renderImages,
  showLoader,
  hideLoader,
} from './js/render-functions';

function init() {
  const form = document.querySelector('.form');
  const gallery = document.querySelector('.gallery');

  if (!form || !gallery) {
    console.error('Form or gallery element not found');
    return;
  }

  form.addEventListener('submit', async event => {
    event.preventDefault();

    const query = form.elements['search-text'].value.trim();
    if (!query) {
      iziToast.info({
        message: 'Please enter a search term.',
        position: 'topRight',
      });
      return;
    }

    clearGallery(gallery);
    showLoader();

    try {
      const data = await getImagesByQuery(query);

      if (!data.hits.length) {
        iziToast.warning({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      renderImages(data.hits, gallery);
    } catch (error) {
      iziToast.error({
        message: 'Something went wrong. Please try again later.',
        position: 'topRight',
      });
    } finally {
      hideLoader();
    }
  });
}

init();

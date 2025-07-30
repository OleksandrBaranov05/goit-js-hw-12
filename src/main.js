import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');

let currentQuery = '';
let currentPage = 1;
let totalHits = 0;

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

  currentQuery = query;
  currentPage = 1;
  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
    totalHits = data.totalHits;

    if (!data.hits.length) {
      iziToast.warning({
        message: 'Sorry, there are no images matching your search query.',
        position: 'topRight',
      });
      return;
    }

    createGallery(data.hits);
    if (data.hits.length < 15 || totalHits <= 15) {
      hideLoadMoreButton();
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
});

loadMoreBtn.addEventListener('click', async () => {
  currentPage++;
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
    createGallery(data.hits);

    const totalShown = document.querySelectorAll('.gallery-item').length;
    if (totalShown >= totalHits) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
    
    const { height: cardHeight } = document
      .querySelector('.gallery-item')
      .getBoundingClientRect();

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  } catch (error) {
    iziToast.error({
      message: 'Failed to load more images.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
});

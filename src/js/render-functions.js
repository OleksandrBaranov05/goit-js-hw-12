import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loaderWrapper = document.querySelector('.loader-wrapper');
const loadMoreBtn = document.querySelector('.load-more');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = createMarkup(images);
  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loaderWrapper?.classList.remove('is-hidden');
}

export function hideLoader() {
  loaderWrapper?.classList.add('is-hidden');
}

export function showLoadMoreButton() {
  loadMoreBtn?.classList.remove('is-hidden');
}

export function hideLoadMoreButton() {
  loadMoreBtn?.classList.add('is-hidden');
}

function createMarkup(images) {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <li class="gallery-item">
          <a href="${largeImageURL}" class="gallery-link">
            <img src="${webformatURL}" alt="${tags}" class="gallery-image" />
          </a>
          <div class="image-info">
            <div class="image-info-item"><b>Likes</b><span>${likes}</span></div>
            <div class="image-info-item"><b>Views</b><span>${views}</span></div>
            <div class="image-info-item"><b>Comments</b><span>${comments}</span></div>
            <div class="image-info-item"><b>Downloads</b><span>${downloads}</span></div>
          </div>
        </li>
      `
    )
    .join('');
}

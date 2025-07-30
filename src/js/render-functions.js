import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const loaderWrapper = document.querySelector('.loader-wrapper');
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function renderImages(images, gallery) {
  const markup = createMarkup(images);
  gallery.insertAdjacentHTML('beforeend', markup);
  hideLoader();
  lightbox.refresh();
}

export function clearGallery(gallery) {
  gallery.innerHTML = '';
}

export const showLoader = () => {
  if (loaderWrapper) {
    loaderWrapper.classList.remove('is-hidden');
  }
};

export const hideLoader = () => {
  if (loaderWrapper) {
    loaderWrapper.classList.add('is-hidden');
  }
};

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
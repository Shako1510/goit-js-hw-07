import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listGallery = document.querySelector('.gallery')

function createPatenrnGallery(galleryItems) {

    return galleryItems.map(({ preview, original, description }) => {
        return `
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src='${preview}'
      data-source='${original}'
      alt='${description}'/>
  </a>
`;
    }).join('');

}

listGallery.insertAdjacentHTML('beforeend', createPatenrnGallery(galleryItems));

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsDelay: 250,
});

// lightbox.on('show.simplelightbox', function () {

//     const gallery = $('.gallery a').simpleLightbox();

//     gallery.next();
// });
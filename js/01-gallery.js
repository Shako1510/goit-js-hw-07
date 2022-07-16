import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const listGallery = document.querySelector('.gallery')

function createPatenrnGallery(galleryItems) {

    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src='${preview}'
      data-source='${original}'
      alt='${description}'/>
  </a>
</div>`;
    }).join('');

}

listGallery.insertAdjacentHTML('beforeend', createPatenrnGallery(galleryItems));

// console.log(createPatenrnGallery(galleryItems));

listGallery.addEventListener('click', showModal);

function showModal(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return
    }

    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">
`)

    instance.show();


    listGallery.addEventListener('keydown', (evt) => {
        if (evt.code === 'Escape') {
            instance.close();
        }
    })
};




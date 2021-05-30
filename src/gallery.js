import images from "./gallery-items.js";
console.log(images);

const refs = {
    galleryEll: document.querySelector('.gallery'),
    lightboxDivEll: document.querySelector('.lightbox'),
    buttonCloseEll: document.querySelector('[data-action="close-lightbox"]'),
    lightboxOverlayEll: document.querySelector('.lightbox__overlay'),
    lightboxContentEll: document.querySelector('.lightbox__content'),
}

console.log(refs);

const imageString = (({ preview, original, description }) => `<li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`);
const galleryCreate = images.reduce((acc, item) => acc + imageString(item), '');
refs.galleryEll.insertAdjacentHTML('afterbegin', galleryCreate);
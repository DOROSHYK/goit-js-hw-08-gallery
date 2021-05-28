import images from "./gallery-items.js";
console.log(images);

const refs = {
    galleryEll: document.querySelector('.gallery'),
    lightboxDivEll: document.querySelector('.lightbox'),
    buttonCloseEll: document.querySelector('[data-action="close-lightbox"]'),
lightboxOverlayEll: document.querySelector('.lightbox__overlay'),
lightboxContentEll: document.querySelector('.lightbox__content'),
}

// console.log(refs);
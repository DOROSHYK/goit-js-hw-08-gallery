import images from "./gallery-items.js";
console.log(images);


const galleryEll = document.querySelector('.js-gallery');
 const   modal = document.querySelector('.lightbox');
 const   buttonCloseModa = document.querySelector('[data-action="close-lightbox"]');
 const   lightbox__image = document.querySelector('.lightbox__image');
 const   modalContent = document.querySelector('.lightbox__content');
 const   img = document.createElement('img');


// console.log(refs);

const imageString = (({ preview, original, description }) => `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
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
galleryEll.insertAdjacentHTML('afterbegin', galleryCreate);
img.classList.add('.lightbox__image')

// const liEEll = document.querySelector('.gallery__item');
// console.log(liEEll);

galleryEll.addEventListener('click', onOpenModal);


    function onOpenModal (ev) {
    ev.preventDefault();
    if (ev.target.nodeName !== 'IMG') {
        return
        }
        if (ev.target.nodeName === 'IMG') {
        modal.classList.add('is-open');
    lightbox__image.src = ev.target.getAttribute('data-source');
    lightbox__image.alt = ev.target.alt; 
    }

}

buttonCloseModa.addEventListener('click', onModalClose);


function onModalClose(ev) {
    ev.preventDefault()
      modal.classList.remove('is-open');
    lightbox__image.src = '';
    lightbox__image.alt = ''; 
 };



// "use strict";
// import images from "./gallery-items.js";

// const refs = {
//   gallery: document.querySelector(".js-gallery"),
//   image: document.createElement("img"),
//   lightbox: document.querySelector(".lightbox"),
//   btn: document.querySelector('[data-action="close-lightbox"]'),
//   modal: document.querySelector(".lightbox__content"),
//   lightbox__image: document.querySelector(".lightbox__image"),
// };

// const createGalleryItem = ({ preview, original, description }) =>
//   `<li class="gallery__item">
// <a
//   class="gallery__link"
//   href=${original}
// >
//   <img
//     class="gallery__image"
//     src=${preview}
//     data-source=${original}
//     alt=${description}
//   />
// </a>
// </li>`;
// const galleryMarkup = images.reduce(
//   (acc, item) => acc + createGalleryItem(item),
//   ""
// );
// refs.gallery.insertAdjacentHTML("afterbegin", galleryMarkup);
// refs.image.classList.add("gallery__image");

// refs.gallery.addEventListener("click", onGalleryClick);
// refs.btn.addEventListener("click", onClickHandlerClose);
// refs.modal.addEventListener("click", closeLightbox);

// function onGalleryClick(e) {
//   e.preventDefault();
//   if (e.target.nodeName !== 'IMG') {
//     return;
//   }
//   if (e.target.nodeName === "IMG") {
//     refs.lightbox.classList.add("is-open");
//     refs.lightbox__image.src = e.target.getAttribute("data-source");
//     refs.lightbox__image.alt = e.target.alt;
//   }
//   window.addEventListener("keyup", clickKey);
// }

// function onClickHandlerClose(e) {
//   e.preventDefault(); 
//   refs.lightbox.classList.remove("is-open");
//   refs.lightbox__image.src = '';
//   refs.lightbox__image.alt = '';
//   window.removeEventListener("keyup", clickKey);
// }

// function closeLightbox(event) {
//   if (event.target === event.currentTarget) {
//     onClickHandlerClose();
//   }
// }

// function clickKey(event) {
//   if (event.code === "Escape") {
//     onClickHandlerClose();
//   }
// }




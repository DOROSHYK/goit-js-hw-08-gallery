import images from "./gallery-items.js";
console.log(images);


const galleryEll = document.querySelector('.js-gallery');
 const   modal = document.querySelector('.lightbox');
 const   buttonCloseModa = document.querySelector('[data-action="close-lightbox"]');
 const   lightbox__image = document.querySelector('.lightbox__image');
 
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

const imgArray = [];

 images.forEach(ell => imgArray.push(ell.original));
console.log(imgArray.indexOf(lightbox__image.src));

document.addEventListener('keydown', (ev) => {
  let newIndex;
  const curentId = imgArray.indexOf(lightbox__image.src);
  
  if (ev.key === 'ArrowLeft') {
      newIndex = curentId - 1;
      if (newIndex === -1) {
        newIndex = imgArray.length - 1;
      }
    
  } else if (ev.key === 'ArrowRight') {
    newIndex = curentId + 1;
    if (newIndex === imgArray.length) {
      newIndex = 0;
    }
  }
  lightbox__image.src = imgArray[newIndex];
})


 
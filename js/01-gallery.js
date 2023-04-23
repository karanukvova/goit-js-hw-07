import { galleryItems } from './gallery-items.js';

// Change code below this line
const gallery = document.querySelector(".gallery")
const imagesList = galleryItems
  .map(({ preview, original, description }) => `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" /></a></li>`)
  .join("");
gallery.insertAdjacentHTML("afterbegin", imagesList)
gallery.addEventListener("click", originalImage)
function originalImage(event) {
  event.preventDefault();
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)
  instance.show()
  document.addEventListener("keydown", (event) => onEscPress(event, instance));
};
const onEscPress = (event, instance) => {
  const ESC_KEYCODE = "Escape";
  if (event.code === ESC_KEYCODE) {
    instance.close();
  }
};


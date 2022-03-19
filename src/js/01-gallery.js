// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
// Dodatkowy import stylów
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryBox = document.querySelector('div.gallery');

galleryItems.forEach(photo => {
  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery__link');
  galleryLink.href = photo.original;

  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery__image');
  galleryImage.dataSource = photo.original;
  galleryImage.alt = photo.description;
  galleryImage.src = photo.preview;

  galleryBox.append(galleryLink);
  galleryLink.append(galleryImage);
});

galleryBox.addEventListener('click', event => {
  event.preventDefault();
});

const gallery = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionSelector: 'img',
  captionsData: 'alt',
});

console.log(gallery);

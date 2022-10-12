import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');
const galleryPicture = createGaleryItem(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', galleryPicture);
galleryContainer.addEventListener('click', onPictureClick)

function createGaleryItem(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
            <div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    />
                </a>
            </div>
        `;
    }).join('');
}

function onPictureClick(evt) {
    evt.preventDefault()

    const isGalleryImageEl = evt.target.classList.contains('gallery__image');

    if (!isGalleryImageEl) {
        return;
    }

    const modalWindow = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">
    `)

    modalWindow.show()

    if (modalWindow.show()) {
        document.addEventListener("keydown", onKeybordClick)

        function onKeybordClick(evt) {
            if (evt.key === 'Escape') {
                modalWindow.close();
            }     
        }
    }
}



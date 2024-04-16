import {popupEdit, popupAddCard, popupOpenImage, imgInPopup, namePlace, popup} from '../index.js';

function closeWithEscape(evt) {
    if (evt.key === 'Escape') {
       popup.forEach((item) => {
        item.classList.remove('popup_is-opened');
        document.removeEventListener('keydown', closeWithEscape);
       });
    };
}

function openModal(section) {
    section.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('profile__edit-button')) {
            popupEdit.classList.add('popup_is-opened');
            document.addEventListener('keydown', closeWithEscape);
        }
        if (evt.target.classList.contains('profile__add-button')) {
            popupAddCard.classList.add('popup_is-opened');
            document.addEventListener('keydown', closeWithEscape);
        }                                         
    });
}

function openModalImg(sectionImg) {
    sectionImg.addEventListener('click', () => {
        popupOpenImage.classList.add('popup_is-opened');         
        imgInPopup.src = sectionImg.src;
        imgInPopup.alt = sectionImg.alt;
        namePlace.textContent = imgInPopup.alt.split(" ― ").pop();
        document.addEventListener('keydown', closeWithEscape);
    });
}    

function closeModal(popup) {
    popup.forEach((item) => {
        item.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup__close') || evt.target.classList.contains('popup')) {
                item.classList.remove('popup_is-opened');
            }
        });
    });
}

export {openModal, closeModal, openModalImg};
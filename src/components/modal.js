import {popupEdit, popupAddSong, popupOpenImage, imgInPopup, namePlace} from '../index.js';

function openModal(section) {
    section.addEventListener('click', (evt) => {
        switch (true) {
            case evt.target.classList.contains('profile__edit-button'):
                popupEdit.classList.add('popup_is-opened');
                break
            case evt.target.classList.contains('profile__add-button'):
                popupAddSong.classList.add('popup_is-opened');
                break
            case evt.target.classList.contains('card__image'): 
                popupOpenImage.classList.add('popup_is-opened');         
                imgInPopup.src = evt.target.src;
                imgInPopup.alt = evt.target.alt;
                namePlace.textContent = imgInPopup.alt.split(" ― ").pop();
                break        
        };
    });
};

function closeModal(popup) {
    popup.forEach((item) => {
        item.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup__close') || evt.target.classList.contains('popup')) {
                item.classList.remove('popup_is-opened');
            }
        });
    });
};

export {openModal, closeModal};
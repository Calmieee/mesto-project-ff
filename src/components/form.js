import {nameInput, profileTitle, profileDescription, jobInput, popupEdit, nameInputPlace, linkInput, renderCard, popupAddCard} from '../index.js';

function handleFormEditSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    popupEdit.classList.remove('popup_is-opened');
}

function handleFormAddPlaceSubmit(evt) {
    evt.preventDefault();
    const card = {name: nameInputPlace.value, link: linkInput.value};
    renderCard(card);
    popupAddCard.classList.remove('popup_is-opened');
    nameInputPlace.value = null;
    linkInput.value = null;
}

export { handleFormAddPlaceSubmit, handleFormEditSubmit};


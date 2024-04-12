import {nameInput, profileTitle, profileDescription, jobInput, popupEdit} from '../index.js';


export function handleFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    popupEdit.classList.remove('popup_is-opened');
}


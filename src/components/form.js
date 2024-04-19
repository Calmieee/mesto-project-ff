import { renderCard} from './cards.js';
import { closePopup, popupEdit, popupAddCard} from './modal.js';

const profile = document.querySelector('.profile.page__section');
const profileTitle = profile.querySelector('.profile__title');
const profileDescription = profile.querySelector('.profile__description');
const formEdit = popupEdit.querySelector('.popup__form');
const nameInput = formEdit.querySelector('.popup__input.popup__input_type_name');
const jobInput = formEdit.querySelector('.popup__input.popup__input_type_description');
const formAddCard = popupAddCard.querySelector('.popup__form');
const nameInputPlace = formAddCard.querySelector('.popup__input.popup__input_type_card-name');
const linkInput = formAddCard.querySelector('.popup__input.popup__input_type_url');

function handleFormEditSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup(popupEdit);
}

function handleFormAddPlaceSubmit(evt) {
    evt.preventDefault();
    const card = {name: nameInputPlace.value, link: linkInput.value};
    renderCard(card);
    closePopup(popupAddCard);
    evt.target.reset();
}

export { handleFormAddPlaceSubmit, handleFormEditSubmit, profile, formEdit, formAddCard, nameInput, jobInput , profileTitle, profileDescription};


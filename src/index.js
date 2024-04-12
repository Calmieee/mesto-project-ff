import './pages/index.css';
import {initialCards, createCard, deleteCard} from './components/cards.js'
import { openModal, closeModal } from './components/modal.js';
import { handleFormEditSubmit, handleFormAddPlaceSubmit } from './components/form.js';

const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');
const profile = document.querySelector('.profile.page__section');
const popupEdit = document.querySelector('.popup.popup_type_edit');
const popupAddCard = document.querySelector('.popup.popup_type_new-card');
const popupOpenImage = document.querySelector('.popup.popup_type_image');
const imgInPopup = popupOpenImage.querySelector('.popup__image');
const namePlace = popupOpenImage.querySelector('.popup__caption');
const popup = document.querySelectorAll('.popup');
const profileTitle = profile.querySelector('.profile__title');
const profileDescription = profile.querySelector('.profile__description');
const formEdit = popupEdit.querySelector('.popup__form');
const nameInput = formEdit.querySelector('.popup__input.popup__input_type_name');
const jobInput = formEdit.querySelector('.popup__input.popup__input_type_description');
const formAddCard = popupAddCard.querySelector('.popup__form');
const nameInputPlace = formAddCard.querySelector('.popup__input.popup__input_type_card-name');
const linkInput = formAddCard.querySelector('.popup__input.popup__input_type_url');
nameInput.value = profileTitle.textContent;
jobInput.value = profileDescription.textContent;

function renderCard(newCard) {
  const result = createCard(newCard, deleteCard);
  placesList.prepend(result);
}

initialCards.forEach(function(item){  
  renderCard(item);
});

popup.forEach( (item) => {
  item.classList.add('popup_is-animated');
});

openModal(profile);
openModal(placesList);
closeModal(popup);
formEdit.addEventListener('submit', handleFormEditSubmit);
formAddCard.addEventListener('submit', handleFormAddPlaceSubmit);
export {cardTemplate, popupEdit, popupAddCard, popupOpenImage, imgInPopup, namePlace, popup, formEdit, nameInput, jobInput, profileTitle, profileDescription, nameInputPlace, linkInput, renderCard};
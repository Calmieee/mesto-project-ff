import './pages/index.css';
import {initialCards, createCard, deleteCard} from './components/cards.js'
import { openModal, closeModal } from './components/modal.js';


const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');
const profile = document.querySelector('.profile.page__section');
const popupEdit = document.querySelector('.popup.popup_type_edit');
const popupAddSong = document.querySelector('.popup.popup_type_new-card');
const popupOpenImage = document.querySelector('.popup.popup_type_image');
const imgInPopup = popupOpenImage.querySelector('.popup__image');
const namePlace = popupOpenImage.querySelector('.popup__caption');
const popup = document.querySelectorAll('.popup');

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

export {cardTemplate, popupEdit, popupAddSong, popupOpenImage, imgInPopup, namePlace};
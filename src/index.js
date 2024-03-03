import './pages/index.css';
import {initialCards, createCard, deleteCard} from './components/cards.js'
import { openModal, closeModal } from './components/modal.js';


export const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');
const profile = document.querySelector('.profile.page__section');
const popupEdit = document.querySelector('.popup.popup_type_edit');
const popupAddSong = document.querySelector('.popup.popup_type_new-card')
function renderCard(newCard) {
  const result = createCard(newCard, deleteCard);
  placesList.prepend(result);
}

initialCards.forEach(function(item){  
  renderCard(item);
});

profile.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('profile__edit-button')) {
    openModal(popupEdit);
  } else if (evt.target.classList.contains('profile__add-button')) {
      openModal(popupAddSong);
  }
});

popupEdit.addEventListener('click', (evt) => {          
  if (evt.target.classList.contains('popup__close') || evt.target.classList.contains('popup')) {
    closeModal(popupEdit);
  }
});
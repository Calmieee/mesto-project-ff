import './pages/index.css';
import {renderCard} from './components/cards.js';
import { initialCards } from './components/initialCards.js';
import { popupEdit, setCloseModalHandlers, popups, openPopup, popupAddCard} from './components/modal.js';
import { handleFormEditSubmit, handleFormAddPlaceSubmit, profile, formEdit, formAddCard, nameInput, jobInput, profileTitle, profileDescription} from './components/form.js';

const editButton = profile.querySelector('.profile__edit-button');
const addPlaceButton = profile.querySelector('.profile__add-button');

initialCards.forEach(function(item){  
  renderCard(item);
});

popups.forEach( (item) => {
  item.classList.add('popup_is-animated');
});


setCloseModalHandlers(popups);

editButton.addEventListener('click', () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openPopup(popupEdit);
});

addPlaceButton.addEventListener('click', () => {
  openPopup(popupAddCard);
});

formEdit.addEventListener('submit', handleFormEditSubmit);
formAddCard.addEventListener('submit', handleFormAddPlaceSubmit);


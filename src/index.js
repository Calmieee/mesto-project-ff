import './pages/index.css';
import {renderCard} from './components/cards';
import { initialCards } from './components/initialCards.js';
import { openModal, setCloseModalHandlers, popups} from './components/modal.js';
import { handleFormEditSubmit, handleFormAddPlaceSubmit, profile, formEdit, formAddCard, nameInput, jobInput, profileTitle, profileDescription} from './components/form.js';

const editButton = profile.querySelector('.profile__edit-button');

initialCards.forEach(function(item){  
  renderCard(item);
});

popups.forEach( (item) => {
  item.classList.add('popup_is-animated');
});

openModal(profile);
setCloseModalHandlers(popups);

editButton.addEventListener('click', () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
});
formEdit.addEventListener('submit', handleFormEditSubmit);
formAddCard.addEventListener('submit', handleFormAddPlaceSubmit);


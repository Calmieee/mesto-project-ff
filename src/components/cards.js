import { deleteCardInServer, toggleLikeCardStateInServer} from "./api.js";

const cardTemplate = document.querySelector('#card-template').content;

function createCard(cardData, callbacks, userId) {
  const cardElement = cardTemplate.querySelector('.places__item.card').cloneNode(true);
  const deleteButtonIcon = cardElement.querySelector('.card__delete-button');
  const LikeButton = cardElement.querySelector('.card__like-button');
  const cardImage = cardElement.querySelector('.card__image');
  const cardElementLikeCounter = cardElement.querySelector('.card__like-counter');
  cardImage.src = cardData.link;
  cardImage.alt = `Это пейзаж из места со следующим названием ― ${cardData.name}`;
  cardElement.querySelector('.card__title').textContent = cardData.name;
  cardElementLikeCounter.textContent = cardData.likes.length;

  cardData.likes.forEach( (item) => {
    if(userId === item['_id']) {
      LikeButton.classList.add('card__like-button_is-active');
    }
  });

  function listener(evt) {
    if (evt.target === submitButton) {
      const isValid = true;
      callbacks.deleteCallback(deleteButtonIcon, cardData['_id'], isValid);
      submitButton.removeEventListener('click', listener);
      closePopup(submitPopup);
    }
  }

  if (cardData.owner['_id'] !== userId) {
    deleteButtonIcon.classList.add('card__delete-button-hidden');
  } else {
    deleteButtonIcon.addEventListener('click', () => {
      openPopup(submitPopup);
      submitButton.addEventListener('click', listener);
    });
  }

  LikeButton.addEventListener('click', () => {
    callbacks.likeCallback(LikeButton, cardData['_id'], cardElementLikeCounter);
  });
  callbacks.openImgCallbak(cardImage);
  return cardElement;
}

function deleteCard(deleteButton, cardId, isValid) {
  deleteCardInServer(cardId, isValid);
  const listItem = deleteButton.closest('.places__item.card');
  listItem.remove();
}

function toggleLikeCardState(element, cardId, cardElementLikeCounter) {
  if (element.classList.toggle("card__like-button_is-active")) {
    toggleLikeCardStateInServer(cardId, "PUT", cardElementLikeCounter);
  } else {
    toggleLikeCardStateInServer(cardId, "DELETE", cardElementLikeCounter);
  }
}



export {createCard, deleteCard, toggleLikeCardState};



import {toggleLikeCardStateInServer} from "./api.js";

const cardTemplate = document.querySelector('#card-template').content;

function createCard(cardData, callbacks, userId) {
  const cardElement = cardTemplate.querySelector('.places__item.card').cloneNode(true);
  const deleteButtonIcon = cardElement.querySelector('.card__delete-button');
  const likeButton = cardElement.querySelector('.card__like-button');
  const cardImage = cardElement.querySelector('.card__image');
  const cardElementLikeCounter = cardElement.querySelector('.card__like-counter');
  cardImage.src = cardData.link;
  cardImage.alt = `Это пейзаж из места со следующим названием ― ${cardData.name}`;
  cardElement.querySelector('.card__title').textContent = cardData.name;
  cardElementLikeCounter.textContent = cardData.likes.length;

  cardData.likes.forEach( (item) => {
    if(userId === item['_id']) {
      likeButton.classList.add('card__like-button_is-active');
    }
  });

  if (cardData.owner['_id'] !== userId) {
    deleteButtonIcon.classList.add('card__delete-button-hidden');
  } else {
    callbacks.addListenerCallbak(deleteButtonIcon, cardData['_id'], cardElement);
  }

  likeButton.addEventListener('click', () => {
    callbacks.likeCallback(likeButton, cardData['_id'], cardElementLikeCounter);
  });

  callbacks.openImgCallbak(cardImage);
  return cardElement;
}

function toggleLikeCardState(element, cardId, cardElementLikeCounter) {
  const condition = element.classList.contains("card__like-button_is-active") ? "DELETE" : "PUT";

  toggleLikeCardStateInServer(cardId, condition, cardElementLikeCounter)
    .then((response) => {
      cardElementLikeCounter.textContent = response.likes.length;
      element.classList.toggle("card__like-button_is-active");
    })
    .catch((err) => {
      console.log(err);
    });
}



export {createCard, toggleLikeCardState};



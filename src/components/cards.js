import { openModalImg } from "./modal";

const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');

function createCard(cardData, deleteCallback, likeCallbak, openImg) {
  const cardElement = cardTemplate.querySelector('.places__item.card').cloneNode(true);
  const deleteButtonIcon = cardElement.querySelector('.card__delete-button');
  const LikeButton = cardElement.querySelector('.card__like-button');
  const cardImage = cardElement.querySelector('.card__image');
  cardImage.src = cardData.link;
  cardImage.alt = `Это пейзаж из места со следующим названием ― ${cardData.name}`;
  cardElement.querySelector('.card__title').textContent = cardData.name;

  deleteButtonIcon.addEventListener('click', () => {
    deleteCallback(deleteButtonIcon);
  });

  LikeButton.addEventListener('click', () => {
    likeCallbak(LikeButton);
  });
  openImg(cardImage);
  return cardElement;
}

function renderCard(newCard) {
  const result = createCard(newCard, deleteCard, likeCard, openModalImg);
  placesList.prepend(result);
}

function deleteCard(deleteButton) {
  const listItem = deleteButton.closest('.places__item.card');
  listItem.remove();
}

function likeCard(element) {
  if (element.classList.contains('card__like-button_is-active')) {
    element.classList.remove('card__like-button_is-active');
  } else {
    element.classList.add('card__like-button_is-active');
  };
}

export {createCard, deleteCard, likeCard, renderCard};



import {openPopup} from "./modal.js";

const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');
const popupOpenImage = document.querySelector('.popup.popup_type_image');
const namePlace = popupOpenImage.querySelector('.popup__caption');
const imgInPopup = popupOpenImage.querySelector('.popup__image');

function createCard(cardData, deleteCallback, likeCallbak,) {
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
  cardImage.addEventListener('click', () => {       
    imgInPopup.src = cardImage.src;
    imgInPopup.alt = cardImage.alt;
    namePlace.textContent = imgInPopup.alt.split(" ― ").pop();
    openPopup(popupOpenImage);
});
  return cardElement;
}

function renderCard(newCard) {
  const result = createCard(newCard, deleteCard, likeCard);
  placesList.prepend(result);
}

function deleteCard(deleteButton) {
  const listItem = deleteButton.closest('.places__item.card');
  listItem.remove();
}

function likeCard(element) {
  element.classList.toggle("card__like-button_is-active");
}

export {createCard, deleteCard, likeCard, renderCard, popupOpenImage};



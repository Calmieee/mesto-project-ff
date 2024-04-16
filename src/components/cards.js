import {cardTemplate, imgInPopup} from '../index.js';


const initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    }
];

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
  })
  openImg(cardImage);
  return cardElement;
}

function deleteCard(deleteButton) {
  const listItem = deleteButton.closest('.places__item.card');
  listItem.remove();
}

function likeCard(element) {
  if (element.classList.contains('card__like-button_is-active')) {
    element.classList.remove('card__like-button_is-active');
  }else {
    element.classList.add('card__like-button_is-active');
  }
}

export {initialCards, createCard, deleteCard, likeCard};



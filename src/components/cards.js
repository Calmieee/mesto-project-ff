const cardTemplate = document.querySelector('#card-template').content;

function createCard(cardData, callbacks) {
  const cardElement = cardTemplate.querySelector('.places__item.card').cloneNode(true);
  const deleteButtonIcon = cardElement.querySelector('.card__delete-button');
  const LikeButton = cardElement.querySelector('.card__like-button');
  const cardImage = cardElement.querySelector('.card__image');
  const cardElementLikeCounter = cardElement.querySelector('.card__like-counter');
  cardImage.src = cardData.link;
  cardImage.alt = `Это пейзаж из места со следующим названием ― ${cardData.name}`;
  cardElement.querySelector('.card__title').textContent = cardData.name;
  cardElementLikeCounter.textContent = cardData.likes.length;
  if (cardData.owner['_id'] !== 'bd93af4bf4950e32576412f9') {
    deleteButtonIcon.classList.add('card__delete-button-hidden');
  } else {
    deleteButtonIcon.addEventListener('click', () => {
      callbacks.deleteCallback(deleteButtonIcon);
    });
  }
  
  LikeButton.addEventListener('click', () => {
    callbacks.likeCallback(LikeButton);
  });
  callbacks.openImgCallbak(cardImage);
  return cardElement;
}

function deleteCard(deleteButton) {
  const listItem = deleteButton.closest('.places__item.card');
  listItem.remove();
}

function likeCard(element) {
  element.classList.toggle("card__like-button_is-active");
}

export {createCard, deleteCard, likeCard};



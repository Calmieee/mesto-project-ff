const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');

function createCard(cardData, deleteCallback) {
  const cardElement = cardTemplate.querySelector('.places__item.card').cloneNode(true);
  const deleteButtonIcon = cardElement.querySelector('.card__delete-button');
 
  cardElement.querySelector('.card__image').src = cardData.link;
  cardElement.querySelector('.card__image').alt = `Это пейзаж из места со следующим названием ― ${cardData.name}`;
  cardElement.querySelector('.card__title').textContent = cardData.name;

  deleteButtonIcon.addEventListener('click', function() {
    deleteCallback(deleteButtonIcon);
  });
  return cardElement;
}

function deleteCard(deleteButton) {
  const listItem = deleteButton.closest('.places__item.card');
  listItem.remove();
}

function renderCard(newCard) {
  const result = createCard(newCard, deleteCard);
  placesList.prepend(result);
}

initialCards.forEach(function(item){  
  renderCard(item);
});




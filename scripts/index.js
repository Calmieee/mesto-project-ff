const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');

function showCard(cardData, deleteCallback) {
  const cardElement = cardTemplate.querySelector('.places__item.card').cloneNode(true);
  const deleteButtonIcon = cardElement.querySelector('.card__delete-button');
 
  cardElement.querySelector('.card__image').src = cardData.link;
  cardElement.querySelector('.card__title').textContent = cardData.name;

  deleteButtonIcon.addEventListener('click', function() {
    deleteCallback(deleteButtonIcon);
  });
  return placesList.append(cardElement);
}

function deleteCard(deleteButton) {
  const listItem = deleteButton.closest('.places__item.card');
  listItem.remove();
}

initialCards.forEach(function(item){  
  showCard(item, deleteCard);
});


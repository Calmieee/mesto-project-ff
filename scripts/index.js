// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');
//подумать над тем, можно ли так оставить или всё-таки написать другое решение
initialCards.forEach(function(item){ 
  const cardElement = cardTemplate.querySelector('.places__item.card').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');

  cardElement.querySelector('.card__image').src = item.link;
  cardElement.querySelector('.card__title').textContent = item.name;

  deleteButton.addEventListener('click', function(){
    const listItem = deleteButton.closest('.places__item.card');
    listItem.remove();
  });
  return placesList.append(cardElement);
});

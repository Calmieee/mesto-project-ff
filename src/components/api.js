import { token } from '../token/token.js';

function fetchResponseMethodGet(patch) {
    return fetch(`https://nomoreparties.co/v1/cohort-magistr-2/${patch}`, {
      headers: {
        authorization: token
      }
    })
  }

function updateProfileData(inputs) {
  return fetch('https://nomoreparties.co/v1/cohort-magistr-2/users/me', {
    method: 'PATCH',
    headers: {
      authorization: token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: inputs.nameInput,
      about: inputs.aboutInput
    })
  })
  .then(res => res.json())
}

function addNewCard(inputs){
  return fetch('https://nomoreparties.co/v1/cohort-magistr-2/cards', {
    method: 'POST',
    headers: {
      authorization: token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: inputs.namePlaceInput,
      link: inputs.linkInput
    })
  })
  .then(res => res.json())
}

function deleteCardInServer(cardId) {
  return fetch(`https://nomoreparties.co/v1/cohort-magistr-2/cards/${cardId}`,{
    method: 'DELETE',
    headers: {
      authorization: token
    }
  })
}

function toggleLikeCardStateInServer(cardId, method, cardElementLikeCounter) {
  return fetch(`https://nomoreparties.co/v1/cohort-magistr-2/cards/likes/${cardId}`, {
    method: method,
    headers: {
      authorization: token
    }
  })
  .then(res => res.json())
  .then((response) => {
    cardElementLikeCounter.textContent = response.likes.length;
  })
}

function changeAvatar(link, ProfileAvatarElement) {
  return fetch('https://nomoreparties.co/v1/cohort-magistr-2/users/me/avatar', {
    method: 'PATCH',
    headers: {
      authorization: token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      avatar: link
    })
  })
  .then(res => res.json())
  .then((response) => {
    console.log(response)
    ProfileAvatarElement.style.backgroundImage = `url('${response.avatar}')`;
  })
}


export {fetchResponseMethodGet, updateProfileData, addNewCard, deleteCardInServer, toggleLikeCardStateInServer, changeAvatar}
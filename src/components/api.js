import { token } from '../token/token.js';

const configApi = {
  baseUrl: 'https://nomoreparties.co/v1/cohort-magistr-2/',
  headers: {
    authorization: token,
    'Content-Type': 'application/json'
  }
}

function fetchResponseMethodGet(configApi, patch) {
    return fetch(`${configApi.baseUrl}${patch}`, {
      headers: configApi.headers
    })
  }

function updateProfileData(configApi, inputs) {
  return fetch(`${configApi.baseUrl}users/me`, {
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

function addNewCard(configApi, inputs){
  return fetch(`${configApi.baseUrl}cards`, {
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

function deleteCardInServer(configApi, cardId) {
  return fetch(`${configApi.baseUrl}cards/${cardId}`,{
    method: 'DELETE',
    headers: {
      authorization: token,
      'Content-Type': 'application/json'
    }
  })
}

function toggleLikeCardStateInServer(configApi, cardId, method, cardElementLikeCounter) {
  return fetch(`${configApi.baseUrl}cards/likes/${cardId}`, {
    method: method,
    headers: {
      authorization: token,
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then((response) => {
    console.log(response)
     cardElementLikeCounter.textContent = response.likes.length;
  })
}
function changeAvatar(configApi, link, ProfileAvatarElement) {
  return fetch(`${configApi.baseUrl}users/me/avatar`, {
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


export {fetchResponseMethodGet, updateProfileData, addNewCard, deleteCardInServer, toggleLikeCardStateInServer, changeAvatar, configApi}
import { token } from '../token/token.js';

const configApi = {
  baseUrl: 'https://nomoreparties.co/v1/cohort-magistr-2/',
  headers: {
    authorization: token,
    'Content-Type': 'application/json'
  }
}

function fetchResponseMethodGet(path) {
    return fetch(`${configApi.baseUrl}${path}`, {
      headers: configApi.headers
    })
  }

function updateProfileData(inputs) {
  return fetch(`${configApi.baseUrl}users/me`, {
    method: 'PATCH',
    headers: configApi.headers,
    body: JSON.stringify({
      name: inputs.nameInput,
      about: inputs.aboutInput
    })
  })
  .then((res) => {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
}

function addNewCard(inputs){
  return fetch(`${configApi.baseUrl}cards`, {
    method: 'POST',
    headers: configApi.headers,
    body: JSON.stringify({
      name: inputs.namePlaceInput,
      link: inputs.linkInput
    })
  })
  .then((res) => {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
}

function deleteCardInServer(cardId, isValid) {
  if (isValid) {
    return fetch(`${configApi.baseUrl}cards/${cardId}`,{
      method: 'DELETE',
      headers: configApi.headers
    })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  
}

function toggleLikeCardStateInServer(cardId, method, cardElementLikeCounter) {
  return fetch(`${configApi.baseUrl}cards/likes/${cardId}`, {
    method: method,
    headers: configApi.headers
  })
  .then((res) => {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
  .then((response) => {
    console.log(response)
     cardElementLikeCounter.textContent = response.likes.length;
  })
  .catch((err) => {
    console.log(err);
  });
}
function changeAvatar(link, ProfileAvatarElement) {
  return fetch(`${configApi.baseUrl}users/me/avatar`, {
    method: 'PATCH',
    headers: configApi.headers,
    body: JSON.stringify({
      avatar: link
    })
  })
  .then((res) => {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
  .then((response) => {
    console.log(response)
    ProfileAvatarElement.style.backgroundImage = `url('${response.avatar}')`;
  })
  .catch((err) => {
    console.log(err);
  });
}


export {fetchResponseMethodGet, updateProfileData, addNewCard, deleteCardInServer, toggleLikeCardStateInServer, changeAvatar}
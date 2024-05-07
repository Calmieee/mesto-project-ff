import { token } from '../token/token.js';

function fetchMethodGet(patch) {
    return fetch(`https://nomoreparties.co/v1/cohort-magistr-2/${patch}`, {
      headers: {
        authorization: token
      }
    })
  }
  
//   Promise.all([fetchMethodGet('users/me'), fetchMethodGet('cards')])
//     .then(([res1,  res2]) => {
//       return Promise.all([res1.json(), res2.json()]);
//     })
//     .then(([responseForUser, responseforInitCards]) => {
//       profileTitle.textContent = responseForUser.name;
//       profileImage.src = responseForUser.avatar;
//       profileDescription.textContent = responseForUser.about;
  
//       responseforInitCards.forEach((card) => {
//         renderCard(card);
//       })
//     })

export {fetchMethodGet}
const popups = document.querySelectorAll('.popup');
const popupEdit = document.querySelector('.popup.popup_type_edit');
const popupAddCard = document.querySelector('.popup.popup_type_new-card');

function closeWithEscape(evt) {
    if (evt.key === 'Escape') {
       popups.forEach((item) => {
        closePopup(item);
       });
    };
}

function openPopup(popup) {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', closeWithEscape);
}

function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closeWithEscape);
}
   
function setCloseModalHandlers(popups) {
    popups.forEach((item) => {
        item.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup__close') || evt.target.classList.contains('popup')) {
                closePopup(item);
            };
        });
    });
}

export {openPopup, setCloseModalHandlers, closePopup, popupEdit, popupAddCard, popups};
const popups = document.querySelectorAll('.popup');
const popupOpenImage = document.querySelector('.popup.popup_type_image');
const namePlace = popupOpenImage.querySelector('.popup__caption');
const imgInPopup = popupOpenImage.querySelector('.popup__image');
const popupEdit = document.querySelector('.popup.popup_type_edit');
const popupAddCard = document.querySelector('.popup.popup_type_new-card');

function closeWithEscape(evt) {
    if (evt.key === 'Escape') {
       popups.forEach((item) => {
        item.classList.remove('popup_is-opened');
        
       });
    };
}

function openPopup(popup) {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', closeWithEscape);
}

function openModalImg(sectionImg) {
    sectionImg.addEventListener('click', () => {
        popupOpenImage.classList.add('popup_is-opened');         
        imgInPopup.src = sectionImg.src;
        imgInPopup.alt = sectionImg.alt;
        namePlace.textContent = imgInPopup.alt.split(" ― ").pop();
        document.addEventListener('keydown', closeWithEscape);
    });
}    

function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closeWithEscape);
}

closePopup(popupOpenImage);

function setCloseModalHandlers(popups) {
    popups.forEach((item) => {
        item.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup__close') || evt.target.classList.contains('popup')) {
                item.classList.remove('popup_is-opened');
            };
        });
    });
}

export {openPopup, setCloseModalHandlers, openModalImg, closePopup, popupEdit, popupAddCard, popups};
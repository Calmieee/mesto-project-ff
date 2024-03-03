function openModal(popup) {
    popup.classList.add('popup_is-opened');
}

function closeModal(popup) {
    popup.classList.add('popup_is-animated');
    popup.classList.remove('popup_is-opened');
}
export {openModal, closeModal}
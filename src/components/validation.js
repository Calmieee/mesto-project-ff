function showError(inputElement, errorElement, config) {
    inputElement.classList.add(config.inputErrorClass)
    errorElement.textContent = inputElement.validationMessage;
}

function hideError(inputElement, errorElement, config) {
    inputElement.classList.remove(config.inputErrorClass)
    errorElement.textContent = '';
}

function checkInputValidity(inputElement, formElement, config) {
    const isInputValid = inputElement.validity.valid;
    const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
    const submitButtonElement = formElement.querySelector(config.submitButtonSelector);

    if (inputElement.validity.patternMismatch) {
        inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else {
        inputElement.setCustomValidity("");
        
    }

    if(isInputValid) {
        hideError(inputElement, errorElement, config);
    } else {
        showError(inputElement, errorElement, config);
    }

    toggleButtonState(submitButtonElement, formElement.querySelectorAll(config.inputSelector), config);
}

const hasInvalidInput = (inputList) => {
    return [...inputList].some((inputElement) => {
      return !inputElement.validity.valid;
    });
};

function toggleButtonState(buttonElement, inputList, config){   
    if(hasInvalidInput(inputList)) {
        buttonElement.classList.add(config.inactiveButtonClass)
        buttonElement.disabled = 'disabled';
    } else {
        buttonElement.classList.remove(config.inactiveButtonClass)
        buttonElement.disabled = false;
    }
}

function setEvenetListener(formElement, config) {
    const inputList = formElement.querySelectorAll(config.inputSelector);
    const submitButtonElement = formElement.querySelector(config.submitButtonSelector);
    toggleButtonState(submitButtonElement, inputList, config);

    inputList.forEach(function(inputElement){
        inputElement.addEventListener('input', function(){
            toggleButtonState(submitButtonElement, inputList, config);
            checkInputValidity(inputElement, formElement, config);
        })
        inputElement.addEventListener('keyup', function(){
            checkInputValidity(inputElement, formElement, config);
        });
    })
    formElement.addEventListener('submit', function(evt){
        evt.preventDefault();
    })
}

function enableValidation(config) {
    const formsList = document.querySelectorAll(config.formSelector);
    formsList.forEach(function(formElement){
       setEvenetListener(formElement, config)
    })
}

function clearValidation(formElement, config) {
    const errorElementsList = formElement.querySelectorAll('.error');
    const inputElementsList = formElement.querySelectorAll(config.inputSelector);
    const submitButtonElement = formElement.querySelector(config.submitButtonSelector);
   
    errorElementsList.forEach( (errorElement) => {
        errorElement.textContent = '';
    })
    
    inputElementsList.forEach( (inputElement) => {
        inputElement.classList.remove('popup__input_state_invalid');
        inputElement.setCustomValidity('');
    })
    
    toggleButtonState(submitButtonElement, inputElementsList, config);
}

export { enableValidation, clearValidation }






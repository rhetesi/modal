// Turn on the MODAl by pressing the 'Switch the MODAL on!' button.

const modalOnClickHandler = () => {
    let buttons = document.querySelectorAll('.btn__modal__on');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            let turnOn = document.querySelector('.modal__section');
            turnOn.style.display = "flex";
            turnOn.focus();
        })
    }
}

modalOnClickHandler();



// Turn the MODAL off by pressing any of the modal buttons (eg.: the 'x') or click outside the modal.

const modalOffClickHandler = () => {
    let buttons = document.querySelectorAll('.btn__modal');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            let turnOff = document.querySelector('.modal__section');
            turnOff.style.display = "none";
            turnOff.blur();
        })
    }
}

modalOffClickHandler();
// Turn on the MODAl by pressing the 'Switch the MODAL on!' button.

const modalOnClickHandler = () => {
    let buttons = document.querySelectorAll('.btn__modal__on');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            document.querySelector('.overlay').style.display = 'block';
            let turnOn = document.querySelector('.modal__section');
            turnOn.style.display = 'inherit';
            document.querySelector('.btn__close--xType').focus();
        })
    }
}

modalOnClickHandler();



// Turn the MODAL off by pressing any of the modal buttons (eg.: the 'x') or click outside the modal.

const modalOffClickHandler = () => {
    let buttons = document.querySelectorAll('.btn__modal');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            document.querySelector('.overlay').style.display = 'none';
            let turnOff = document.querySelector('.modal__section');
            turnOff.style.display = 'none';
        })
    }
}

modalOffClickHandler();
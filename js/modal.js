let label = document.querySelectorAll('.modal__close')
let modal = document.querySelectorAll('.modal')
const mobile_close = document.querySelectorAll('.mobile_close')
const mobile_modal = document.querySelectorAll('.mobile_modal')

const desctopModalClose = () => {
    mobile_close[0].removeEventListener('click', mobileModalClose)
    modal[0].remove();
    mobile_modal[0].remove();

    document.body.style.overflowY = 'visible'
    //  добавить правильную позицию для боди 
    document.body.style.position = 'static'
}

label[0].addEventListener('click', desctopModalClose, {once: true});

const mobileModalClose = () => {
    label[0].removeEventListener('click', desctopModalClose);
    mobile_modal[0].remove();
    modal[0].remove();
    document.body.style.overflowY = 'visible'
    //  добавить правильную позицию для боди 
    document.body.style.position = 'static'
}

mobile_close[0].addEventListener('click', mobileModalClose, {once:true})

// console.dir(mobile_modal);


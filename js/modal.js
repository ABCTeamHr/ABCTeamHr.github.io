let label = document.querySelectorAll('.modal__close')
let modal = document.querySelectorAll('.modal')

label[0].addEventListener('click', function () {
    modal[0].remove();
    mobile_modal[0].remove();

    document.body.style.overflowY = 'visible'
    //  добавить правильную позицию для боди 
    document.body.style.position = 'static'
});

const mobile_close = document.querySelectorAll('.mobile_close')
const mobile_modal = document.querySelectorAll('.mobile_modal')

console.dir(mobile_modal);

mobile_close[0].addEventListener('click', function() {
    mobile_modal[0].remove();
    modal[0].remove();
    document.body.style.overflowY = 'visible'
    //  добавить правильную позицию для боди 
    document.body.style.position = 'static'
})

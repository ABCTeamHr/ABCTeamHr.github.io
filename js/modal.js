let label = document.querySelectorAll('.modal__close')
let modal = document.querySelectorAll('.modal')

label[0].addEventListener('click', function () {
    modal[0].remove()
    document.body.style.overflowY = 'visible'
    //  добавить правильную позицию для боди 
    document.body.style.position = 'static'
});

let windows = document.querySelectorAll('html')



window.addEventListener('resize', function() {
    console.dir(windows[0].clientWidth)
})

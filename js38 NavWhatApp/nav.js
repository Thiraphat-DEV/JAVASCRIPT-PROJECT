const navs = document.querySelectorAll('.nav')
const open_btn = document.querySelector('.open')
const close_btn = document.querySelector('.close')


open_btn.addEventListener('click', () =>{
    navs.forEach((nav) =>{
        nav.classList.add('show')
    })
})

close_btn.addEventListener('click', () =>{
    navs.forEach((nav) =>{
        nav.classList.remove('show')
    })
})
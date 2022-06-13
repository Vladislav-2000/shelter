let burger=document.getElementById('brg');
let menu = document.getElementById('mobile');
let mobileLinks = menu.querySelectorAll('a');

burger.addEventListener('click', (e)=> {
    e.currentTarget.classList.toggle('open');
    document.getElementById('mobile').classList.toggle('mobile__menu-hidden');
})

mobileLinks.forEach(e => e.addEventListener('click', e => {
    menu.classList.toggle('mobile__menu-hidden')
    burger.classList.toggle('open');
}))

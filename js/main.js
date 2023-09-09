const menu = document.querySelector('.menu');
const menu_btn = document.querySelector('.menu-btn');

menu_btn.addEventListener('click', () => {
    menu.classList.toggle('menu--active')
});
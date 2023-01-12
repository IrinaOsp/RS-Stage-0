// Burger handler
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.nav');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('nav_active');
    });
}());
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
console.log(burger);
console.log(menu);

burger.addEventListener('click', () => {
    menu.classList.toggle('burger-active')
})
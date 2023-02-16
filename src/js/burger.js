const burger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');

burger.addEventListener('click', (event) => {
  burger.classList.toggle('active');
  headerMenu.classList.toggle('active');
  document.body.classList.toggle('lock')
});

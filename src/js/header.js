const header = document.querySelector('.header');
const intro = document.querySelector('.intro');
const introHeight = intro.scrollHeight;

document.addEventListener('scroll', (event) => {
  let scrollPos = window.pageYOffset;

  if (scrollPos > introHeight) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});

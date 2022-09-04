let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let navList = document.querySelector ('.main-nav__list');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navToggle.classList.remove('main-nav__toggle--closed');
    navToggle.classList.add('main-nav__toggle--opened');
    navList.classList.remove('main-nav__list--closed');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navToggle.classList.add('main-nav__toggle--closed');
    navToggle.classList.remove('main-nav__toggle--opened');
    navList.classList.add('main-nav__list--closed');
  }
});


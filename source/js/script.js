let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let navList = document.querySelector ('.main-nav__list');
let modalSuccess = document.querySelector('.modal--success');
let modalFailure = document.querySelector('.modal--failure');
let modalClose = document.querySelector('.modal__button');
let mapCity = document.querySelector("iframe.location__map");

mapCity.style.display = "block";

navMain.classList.remove('main-nav--nojs');
navList.classList.remove('main-nav__list--nojs');
navList.classList.remove('page-header__logo--nojs');

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

function hideModal() {
  modalSuccess.style.display='none';
  modalFailure.style.display='none';
}

modalClose.addEventListener('click', function() {
  hideModal();
});

let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let navList = document.querySelector ('.main-nav__list');
let modalSuccess = document.querySelector('.modal--success');
let modalFailure = document.querySelector('.modal--failure');
let modalClose = document.querySelector('.modal__button');
let mapCity = document.querySelector('.location__map--iframe');
let mapImage = document.querySelector('.location__map--image');
let mapMarker = document.querySelector('.location__marker');

if(mapCity) {mapCity.style.display = 'block'};
if(mapImage) {mapImage.style.display = 'none'};
if(mapMarker) {mapMarker.style.display = 'none'};

navMain.classList.remove('main-nav--nojs');
navList.classList.remove('main-nav__list--nojs');

navToggle.addEventListener('click', function () {
  navMain.classList.toggle('main-nav--closed');
  navMain.classList.toggle('main-nav--opened');
  navToggle.classList.toggle('main-nav__toggle--closed');
  navToggle.classList.toggle('main-nav__toggle--opened');
  navList.classList.toggle('main-nav__list--closed');
  navList.classList.toggle('main-nav__list--opened');
});

function hideModal() {
  modalSuccess.style.display = 'none';
  modalFailure.style.display = 'none';
}

modalClose.addEventListener('click', function() {
  hideModal();
});

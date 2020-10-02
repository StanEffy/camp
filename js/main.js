'use strict'

let toggleMenuButton = document.querySelector('.menu__toggle-button');
let mainMenu = document.querySelector('.main-header__list');

const getDate = new Date();
const month = getDate.getMonth();

const body = document.querySelector('body');

if(month === 0 || month === 1 || month === 11) {
	//winter
	document.body.style.backgroundImage = 'url(img/winter-birch.jpg)';
} else if(month === 2 || month === 3 || month === 4){
	//spring
	document.body.style.backgroundImage = 'url(img/spring-birch.jpg)';
} else if(month === 5 || month === 6 || month === 7) {
	//summer
	document.body.style.backgroundImage = 'url(img/leaves-4325098.jpg)';
} else {
	//autumn
	document.body.style.backgroundImage = 'url(img/leaves-1036560.jpg)';
}
var i = 0;
// const mobileMenu = document.querySelectorAll('.main-header__list-item');
// const subMenu = document.querySelectorAll('.inner-list');
// mobileMenu.forEach(menu => menu.addEventListener('click', function (evt) {
// 	evt.preventDefault();
// 	for(let i = 0; i < mobileMenu.length; i++) {
// 		if(mobileMenu[i].classList.contains('main-header__list-item--active')) {
// 			mobileMenu[i].classList.remove('main-header__list-item--active');
// 		}
// 	}
// 	menu.classList.toggle('main-header__list-item--active');
// }))

let mobileMenuOpenClose = function(evt){
	if(mainMenu.classList.contains('main-header__list--active')){
		mainMenu.classList.remove('main-header__list--active');
		toggleMenuButton.classList.remove('menu__toggle-button--active');
		// mobileMenu.forEach(element => element.classList.remove('main-header__list-item--active'))
	} else {
		mainMenu.classList.add('main-header__list--active');
		toggleMenuButton.classList.add('menu__toggle-button--active');
	}
}

toggleMenuButton.addEventListener('click', mobileMenuOpenClose);

const galleryShowNext = document.querySelector('.pictures-container__button--right');
const galleryShowPrevious = document.querySelector('.pictures-container__button--left');
const pictureContainer = document.querySelector('.pictures-container');
const picsArray = pictureContainer.querySelectorAll('.news-picture');
let index = 0;
galleryShowNext.addEventListener('click', function () {
		if(index === picsArray.length - 1){
			picsArray.forEach(elem => elem.classList.remove('news-picture--active'));
			index = 0;
			picsArray[index].classList.add('news-picture--active')
		} else {
			picsArray.forEach(elem => elem.classList.remove('news-picture--active'));
			picsArray[index+1].classList.add('news-picture--active');
			index += 1;
		}
	console.log(index);
});
galleryShowPrevious.addEventListener('click', function () {
	if(index === 0 ){
		picsArray.forEach(elem => elem.classList.remove('news-picture--active'));
		index = picsArray.length - 1;
		picsArray[index - 1].classList.add('news-picture--active');
	} else {
		picsArray.forEach(elem => elem.classList.remove('news-picture--active'));
		picsArray[index - 1].classList.add('news-picture--active');
		index -= 1;
	}
	console.log(index);
});

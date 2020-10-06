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

const galleryShowNext = document.querySelectorAll('.pictures-container__button--right');
const galleryShowPrevious = document.querySelectorAll('.pictures-container__button--left');
const pictureContainer = document.querySelectorAll('.pictures-container');

let index = 0;

let showNextPic = function(rightButton) {
	rightButton.forEach(element => {
		element.addEventListener('click', function () {
			let parent = element.parentNode;
			let picsArray = parent.querySelectorAll('.news-picture');
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
	});
}

let showPrevPic = function(leftButton) {
	leftButton.forEach( element => {
		let parent = element.parentNode;
		let picsArray = parent.querySelectorAll('.news-picture');
		element.addEventListener('click', function () {
			if(index === 0 ){
				picsArray.forEach(elem => elem.classList.remove('news-picture--active'));
				index = picsArray.length - 1;
				picsArray[index - 1].classList.add('news-picture--active');
			} else {
				picsArray.forEach(elem => elem.classList.remove('news-picture--active'));
				picsArray[index - 1].classList.add('news-picture--active');
				index -= 1;
			}

		});
	})
}
showNextPic(galleryShowNext);
showPrevPic(galleryShowPrevious);


const picturesFullscreen = document.querySelector('.pictures-container--fullscreen');

const fullscreen = document.querySelectorAll('.pictures-container__button--fullscreen');




fullscreen.forEach(element => element.addEventListener('click', function () {
	let newsArticle = this.parentNode.parentNode;
	console.log(newsArticle);
	(newsArticle.appendChild(this.parentNode.cloneNode(true))).classList.add('pictures-container--fullscreen');
	let fullscreenMode = newsArticle.querySelector('.pictures-container--fullscreen');
	let button = document.createElement('button');
	button.classList.add('pictures-container__button--close');
	button.classList.add('pictures-container__button');
	fullscreenMode.appendChild(button);

	//what a shame to do it this way, but the struggle is real
	//one day I will improve this code
	let right = fullscreenMode.querySelectorAll('.pictures-container__button--right');
	let left = fullscreenMode.querySelectorAll('.pictures-container__button--left');

	let buttonClose = fullscreenMode.querySelector('.pictures-container__button--close')
	buttonClose.addEventListener('click', function () {
		fullscreenMode.remove();
	})
	showNextPic(right);
	showPrevPic(left);
}))


document.addEventListener('click', evt => console.log(evt.target))

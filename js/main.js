'use strict'

let toggleMenuButton = document.querySelector('.menu__toggle-button');
let mainMenu = document.querySelector('.main-header__list');

let mobileMenuOpenClose = function(evt){
	if(mainMenu.classList.contains('main-header__list--active')){
		mainMenu.classList.remove('main-header__list--active');
		toggleMenuButton.classList.remove('menu__toggle-button--active');
	} else {
		mainMenu.classList.add('main-header__list--active');
		toggleMenuButton.classList.add('menu__toggle-button--active');
	}
}

toggleMenuButton.addEventListener('click', mobileMenuOpenClose);

const getDate = new Date();
//const month = getDate.getMonth();
const month = 11;
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

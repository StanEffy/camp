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
function dropDownList(btnActive, dropDownList, className) {
	const btn = document.querySelector(btnActive);
	const dropDown = document.querySelector(dropDownList);

	btn.addEventListener('click', () => {
		dropDown.classList.toggle(className);
		btn.classList.toggle('active');
		if (btn.getAttribute('aria-expanded') === 'true') {
			btn.setAttribute('aria-expanded', 'false');
		} else {
			btn.setAttribute('aria-expanded', 'true');
		}
	});

	document.addEventListener('click', (event) => {
		if (!btn.contains(event.target) && !dropDown.contains(event.target)) {
			dropDown.classList.remove(className);
		}
	});
}
dropDownList('.header__lang-dropdown-btn', '.header__lang-dropdown-list', 'show');
dropDownList('.header__nav-dropdown-btn', '.header__nav-dropdown-list', 'show');

const burgerIcon = document.querySelector('.burger-menu');
const headerNav = document.querySelector('.header__body');

burgerIcon.addEventListener('click', () => {
	burgerIcon.classList.toggle('burg-active');
	headerNav.classList.toggle('nav-active');
	if (burgerIcon.getAttribute('aria-expanded') === 'true') {
		burgerIcon.setAttribute('aria-expanded', 'false');
	} else {
		burgerIcon.setAttribute('aria-expanded', 'true');
	}
})
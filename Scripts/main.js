import './swaiper.js';
import { dropDownList, addActiveClass } from './functions.js';
const footerTag = document.querySelector('.footer')

const arrowFooter = footerTag.querySelectorAll(".footer__dropdown-btn")
const listFooter = footerTag.querySelectorAll(".footer__list")

arrowFooter.forEach((arrow, index) => {
	arrow.addEventListener('click', () => {
		arrow.classList.toggle('show');
		listFooter[index].classList.toggle('show');
	});
});

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

const btn = document.querySelector(".details__show-more");
const text = document.querySelector(".details__desc");

btn.addEventListener("click", () => {
	text.classList.toggle("expanded");
	btn.textContent = text.classList.contains("expanded") ? "Show less" : "Show more";
});


addActiveClass('color-palette', '.product__btn-color', 'active-color', 0, false)
addActiveClass('Frame', '.product__btn', 'active-pr-btn')
addActiveClass('Afmeting', '.product__btn', 'active-pr-btn')
addActiveClass('order-block', '.product__btn-like', 'active-like-btn')


const counterProduct = document.querySelector(".product__counter-number")
const btnMinus = document.querySelector(".product__counter-minus")
const btnPlus = document.querySelector(".product__counter-plus")
let count = 1;

btnPlus.addEventListener('click', () => {
	count++;
	counterProduct.textContent = count;
});

btnMinus.addEventListener('click', () => {
	if (count > 1) {
		count--;
		counterProduct.textContent = count;
	}
});

function moveBlockOnResize() {
	const blockPrice = document.querySelector('product__price-block');
	const blockOrder = document.querySelector('.product__order-block');
	const blockPriceReplace = document.querySelector('.product__price-replace');
	// Перевіряємо, чи блок B вже всередині A
	const alreadyMoved = blockPriceReplace.contains(blockOrder);

	if (window.innerWidth <= 1200 && !alreadyMoved) {
		blockOrder.prepend(blockPriceReplace); // Переміщаємо B у A
	} else if (window.innerWidth > 1200 && alreadyMoved) {
		blockPrice.prepend(blockPriceReplace); // Повертаємо назад, наприклад — у body
	}
}

// Запуск при завантаженні
moveBlockOnResize();

// Запуск при зміні розміру вікна
window.addEventListener('resize', moveBlockOnResize);

const busketBtn = document.querySelector('.product__btn-in-busket')
const busketCountIcon = document.querySelector('.product-in-bascket')
busketBtn.addEventListener('click', () => {
	busketCountIcon.classList.add('active-busket-icon')

})

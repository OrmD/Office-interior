import './swaiper.js';
const footerTag = document.querySelector('.footer')

const arrowFooter = footerTag.querySelectorAll(".footer__dropdown-btn")
const listFooter = footerTag.querySelectorAll(".footer__list")

arrowFooter.forEach((arrow, index) => {
	arrow.addEventListener('click', () => {
		arrow.classList.toggle('show');
		listFooter[index].classList.toggle('show');
	});
});


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

const btn = document.querySelector(".details__show-more");
const text = document.querySelector(".details__desc");

btn.addEventListener("click", () => {
	text.classList.toggle("expanded");
	btn.textContent = text.classList.contains("expanded") ? "Show less" : "Show more";
});

function addActiveClass(IDparentBlock, buttons, classActive, defltActiveBtn = null, toggleBtn = true) {
	const parentBlock = document.getElementById(IDparentBlock);
	if (!parentBlock) return;

	const collectionBtns = parentBlock.querySelectorAll(buttons);

	collectionBtns.forEach((btn, index) => {
		// Додаємо клас за замовчуванням
		if (defltActiveBtn !== null && index === defltActiveBtn) {
			btn.classList.add(classActive);
		}

		btn.addEventListener('click', () => {
			if (toggleBtn) {


				if (('.' + btn.classList) === buttons) {
					collectionBtns.forEach(b => b.classList.remove(classActive));
					btn.classList.add(classActive);
				} else {
					btn.classList.remove(classActive);
				}


			} else {
				// RADIO: лише одна активна кнопка
				collectionBtns.forEach(b => b.classList.remove(classActive));
				btn.classList.add(classActive);
			}
		});
	});
}
addActiveClass('color-palette', '.product__btn-color', 'active-color', 0, false)
addActiveClass('Frame', '.product__btn', 'active-pr-btn')
addActiveClass('Afmeting', '.product__btn', 'active-pr-btn')

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



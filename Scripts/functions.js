export function dropDownList(btnActive, dropDownList, className) {
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

export function addActiveClass(IDparentBlock, buttons, classActive, defltActiveBtn = null, toggleBtn = true) {
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
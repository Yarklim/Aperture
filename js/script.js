// ====== Burger Menu ========
const menu = document.querySelector('.nav__body');
const menuBtn = document.querySelector('.menu__icon');

const body = document.body;

if (menu && menuBtn) {
	menuBtn.addEventListener('click', e => {
		menu.classList.toggle('active');
		menuBtn.classList.toggle('active');
		body.classList.toggle('lock');
	});

	menu.addEventListener('click', e => {
		if (e.target.classList.contains('nav__body')) {
			menu.classList.remove('active');
			menuBtn.classList.remove('active');
			body.classList.remove('lock');
		}
	});

	menu.querySelectorAll('.nav__item-link').forEach(link => {
		link.addEventListener('click', () => {
			menu.classList.remove('active');
			menuBtn.classList.remove('active');
			body.classList.remove('lock');
		});
	});
}
// ==========================
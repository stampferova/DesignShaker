import "./src/styles/_index.scss";

const menu = document.querySelector('.navigation__menu');
const nav = document.querySelector('.navigation');

function openMenu() {
	menu.addEventListener('click', (e) => {
		e.preventDefault();
		nav.classList.toggle('is-menu-open');
	});
}

openMenu();

const navBarDOM = document.querySelector('.navbar__list');
const navBarLinkDOM = document.querySelectorAll('.navbar__link');
const sections = document.querySelectorAll('section');

function activeMenu() {
	window.addEventListener('scroll', () => {
		const scrollPosition = window.scrollY + 100;

		sections.forEach((section, index) => {
			if (
				scrollPosition >= section.offsetTop &&
				scrollPosition < section.offsetTop + section.offsetHeight
			) {
				const activeLink = navBarDOM.querySelector('.navbar__link.active');

				if (activeLink) {
					activeLink.classList.remove('active');
				}

				navBarLinkDOM[index].classList.add('active');
			}
		});
	});
}

export default activeMenu;

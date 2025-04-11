function updateCopyrightYear() {
	const currentYear = new Date().getFullYear();

	const copyRightElementDOM = document.querySelector('.footer__copy span');

	copyRightElementDOM.textContent = `@${currentYear}`;
}

export default updateCopyrightYear;

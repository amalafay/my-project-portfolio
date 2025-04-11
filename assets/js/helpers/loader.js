const loaderContainerDOM = document.querySelector('.loader');

function loader() {
	window.addEventListener('load', () => {
		loaderContainerDOM.classList.add('loader--hidden');
	});
}

export default loader;

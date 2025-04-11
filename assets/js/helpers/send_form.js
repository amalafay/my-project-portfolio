const formDOM = document.querySelector('#form');
const modalDOM = document.querySelector('#modal');
const btnCloseDOM = document.querySelector('#btn_close-modal');

function openModal() {
	modalDOM.open = true;
}

function closeModal() {
	modalDOM.open = false;
}

// Función para validar email
function isValidEmail(email) {
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return re.test(email);
}

function sendEmail() {
	formDOM.addEventListener('submit', (e) => {
		e.preventDefault();

		const params = {
			name: document.querySelector('#name').value,
			email: document.querySelector('#email').value,
			subject: document.querySelector('#subject').value,
			message: document.querySelector('#message').value,
		};

		if (params.name && params.email && params.subject && params.message) {
			emailjs
				.send('service_gikic74', 'template_bmfifwv', params)
				.then(
					(response) => {
						console.log('SUCCESS!', response.status, response.text);
						openModal();
					},
					(error) => {
						console.log('FAILED...', error);
					},
				);
		}
	});
}

btnCloseDOM.addEventListener('click', closeModal);

export default sendEmail;

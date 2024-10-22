const checkPlan = () => {
	const options = [...document.querySelectorAll('.options__item input')];
	const planElement = document.querySelector('.form__plan');
	options.map((item) => item.addEventListener("click", () => {
		if (planElement) {
			planElement.innerHTML = item.value
		}
	}))
}
checkPlan();

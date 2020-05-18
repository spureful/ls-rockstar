(function openHeaderMenu(){
	const menuBtn = document.querySelector('.nav--header .nav__btn');
	const menuBlock = document.querySelector('.nav--header');
	const menuItems = document.querySelectorAll('.nav--header .nav__link');

	menuBtn.addEventListener('click', function() {
		menuBlock.classList.toggle('active');
	});
	
	for (let link of menuItems) {
		link.addEventListener('click', function() {
			menuBlock.classList.toggle('active');
		})
	}
})();
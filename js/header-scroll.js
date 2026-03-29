(function () {
	var header = document.querySelector('header');
	if (!header) return;
	var threshold = 80;

	function onScroll() {
		if (window.scrollY > threshold) {
			header.classList.add('header--fixed');
		} else {
			header.classList.remove('header--fixed');
		}
	}

	window.addEventListener('scroll', onScroll, { passive: true });
	onScroll();
})();

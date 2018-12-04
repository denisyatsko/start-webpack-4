// animate number count-up
import CountUp from 'countup.js';

let countText = document.querySelectorAll('.count-text');

let countup = (className) => {
	let box = document.querySelector('.' + className).getBoundingClientRect();
	let countBlockTop = box.top + pageYOffset;
	let windowHeight = window.innerHeight;
	let show = true;
	let countOptions = {
	  useEasing: false, 
	  useGrouping: false, 
	  separator: ',', 
	  decimal: '', 
	};

	window.addEventListener('scroll', () => {
		if (show === true && (countBlockTop < window.scrollY + windowHeight)) {
			show = false;

			countText.forEach(item => {
				let to = parseInt(item.getAttribute('data-count'));
				let demo = new CountUp(item, 1, to, 0, 1.5, countOptions);

				if (!demo.error) {
					demo.start();
				}	
			});	
		}
	});
}

if (countText.length) {
	countup('count-text');
}

export default countup;


let preloader = () => {
	setTimeout(() => {
		let preloader = document.querySelector('#preloader');
		if (!preloader.classList.contains('none')) {
			preloader.classList.add('none');
		}
	}, 250);
}

document.body.onload = () => preloader();

export default preloader;
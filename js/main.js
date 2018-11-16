(() => { console.log("JS online");

// get a ref to the lottie container
const preloader = document.querySelector('.preloader');
let x = 1;

let preloadAnim = bodymovin.loadAnimation({
	wrapper : preloader,
	animType : 'svg',
	loop : true,
	autoplay : false,
	path : './data/search.json'
});

function playAnimation () {
	preloadAnim.play();
	x += 0.5;
	preloadAnim.setSpeed(x);

}

preloader.addEventListener("mouseover", playAnimation);

})();


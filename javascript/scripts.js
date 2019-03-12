/* smooth scrolling anchor links */
let myVar = 0;

const nav = document.querySelector('#main');
let topOfNav = nav.offsetTop;
//console.log(topOfNav);

/* sticky navigation bar */
function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }
}

// smooth scrolling to section
document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
	anchor.addEventListener('click', function (e) {
		e.preventDefault(); // don't snap immediately
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});

/* hover images testing */
function startPreviewGif(e){
	let src = e.currentTarget.querySelector('img').src;
	const newImage = src.replace(".png", ".gif");

	// can't asyncronous file check anymore after deprecation, try another failsafe later...

	console.log(doesFileExist(newImage));

	e.currentTarget.querySelector('img').src = newImage;
}

function stopPreviewGif(e){
	let src = e.currentTarget.querySelector('img').src;
	const newImage = src.replace(".gif", ".png");
	e.currentTarget.querySelector('img').src = newImage;
}

function doesFileExist(url){
	var xhr = new XMLHttpRequest();
	xhr.open('HEAD', url);
	xhr.send();

	console.log(xhr);
	console.log(xhr.status);
}

window.addEventListener('scroll', fixNav);
//const items = document.querySelectorAll('.project-item');
const items = document.querySelectorAll('.hover-preview-image');
// https://stackoverflow.com/questions/10730212/proper-way-to-reset-a-gif-animation-with-displaynone-on-chrome
// reset an animated gif to start at first image without reloading it from server.
// Note: if you have the same image on the page more than ones, they all reset.
function resetGif(e) {
    var img = e.target;
    var imageUrl = img.src;
    img.src = "";
    img.src = imageUrl;
};
items.forEach(item => item.addEventListener('mouseover', resetGif));
//items.forEach(item => item.addEventListener('mouseout', stopPreviewGif));







/// appear on scroll

// only query every 20 milliseconds
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function(){
        var context = this, args = arguments;
        var later = function(){
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const sliderImages = document.querySelectorAll('.project-item');

function checkSlide(){
    //console.log("Scroll Y: ",window.scrollY);
    console.log("Scroll in at:", window.scrollY + window.innerHeight);
    sliderImages.forEach(sliderImage => {
        // halfway through the image

        // clientHeight, offsetHeight, offsetTop, scrollHeight
        //console.log(sliderImage.offsetTop);
        const slideInAt = (window.scrollY + 0.9*window.innerHeight );// - sliderImage.offsetTop;//(window.scrollY + window.innerHeight) - sliderImage.height * 0.5;
        //const slideInAt = (window.scrollY - sliderImage.offsetTop);

        // bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;


        const isShown = slideInAt > sliderImage.offsetTop;
        //console.log("hello");
        //console.log("Slide in At: ", slideInAt);
        console.log(sliderImage.offsetTop);
        //if (isHalfShown){
        if (isShown){
            sliderImage.classList.add('item-active');
        }
    });
}

window.addEventListener('scroll',checkSlide); // don't debounce but also need to optimise this a bit...
//window.addEventListener('scroll', debounce(checkSlide));

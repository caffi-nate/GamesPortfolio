// webpack test:
// http://ccoenraets.github.io/es6-tutorial-data/babel-webpack/



/* smooth scrolling anchor links */
console.log("hello world");



let myVar = 0;

//const nav = document.querySelector('#main');
//let topOfNav = nav.offsetTop;
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
// document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
// 	anchor.addEventListener('click', function (e) {
// 		e.preventDefault(); // don't snap immediately
// 		document.querySelector(this.getAttribute('href')).scrollIntoView({
// 			behavior: 'smooth'
// 		});
// 	});
// });

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

//window.addEventListener('scroll', fixNav);
const items = document.querySelectorAll('.project-item');
// https://stackoverflow.com/questions/10730212/proper-way-to-reset-a-gif-animation-with-displaynone-on-chrome
// reset an animated gif to start at first image without reloading it from server.
// Note: if you have the same image on the page more than ones, they all reset.
function resetGif(e) {
    const item = e.target.closest('.project-item');
    const img = item.firstElementChild.getElementsByTagName('img')[1];//closest('.hover-preview-image');

    var imageUrl = img.src;
    img.src = "";
    img.src = imageUrl;
};
//items.forEach(item => item.addEventListener('mouseenter', resetGif));
items.forEach(function(item){
    item.addEventListener('mouseenter', resetGif);
})






/// appear on scroll

// only query every 20 milliseconds
// function debounce(func, wait = 20, immediate = true) {
//     var timeout;
//     return function(){
//         var context = this, args = arguments;
//         var later = function(){
//             timeout = null;
//             if (!immediate) func.apply(context, args);
//         };
//         var callNow = immediate && !timeout;
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//         if (callNow) func.apply(context, args);
//     };
// };

const sliderImages = document.querySelectorAll('.project-item');

function checkSlide(){
    //sliderImages.forEach(sliderImage => {
    sliderImages.forEach(function(sliderImage){


        // halfway through the image
        const slideInAt = (window.scrollY + 0.85*window.innerHeight );// - sliderImage.offsetTop;//(window.scrollY + window.innerHeight) - sliderImage.height * 0.5;

        // bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        const isShown = slideInAt > sliderImage.offsetTop;
        if (isShown){
            sliderImage.classList.add('item-active');
        }
    });
}

// initialise
window.onload = function(){
    // pop up the images at the top of the page if they're already in view
    checkSlide();
}


window.addEventListener('scroll',checkSlide); // don't debounce but also need to optimise this a bit...
//window.addEventListener('scroll', debounce(checkSlide));

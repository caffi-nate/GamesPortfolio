/* smooth scrolling anchor links */
let myVar = 0;

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

console.log("hello wasfsagfsagorld");

// function doesFileExist(url){
// 	var xhr = new XMLHttpRequest();
// 	xhr.open('HEAD', url);
// 	xhr.send();
//
// 	console.log(xhr);
// 	console.log(xhr.status);
// }

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



// this type of forEach isn't supported in IE11: https://stackoverflow.com/questions/53331180/babel-polyfill-being-included-but-foreach-still-doesnt-work-in-ie11-on-nodelis
//items.forEach(item => item.addEventListener('mouseenter', resetGif));
// items.forEach(function(item){
//     item.addEventListener('mouseenter', resetGif);
// })
for (i = 0; i < items.length; i++){
    items[i].addEventListener('mouseenter', resetGif);
}

console.log("hello wo2rld");

const sliderImages = document.querySelectorAll('.project-item');

function checkSlide(){
    //sliderImages.forEach(sliderImage => {

    for (i = 0; i < sliderImages.length; i++){ // ie fix
        var sliderImage = sliderImages[i];
    //sliderImages.forEach(function(sliderImage){
        // halfway through the image
        //const slideInAt = (window.scrollY + 0.85*window.innerHeight );// - sliderImage.offsetTop;//(window.scrollY + window.innerHeight) - sliderImage.height * 0.5;

        const slideInAt = (window.pageYOffset + 0.85*window.innerHeight);

        // console.log(window.innerHeight);
        // console.log(window.scrollY);
        // console.log(window.pageYOffset);

        // bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        const isShown = slideInAt > sliderImage.offsetTop;
        if (isShown){ // currently not showing up in Internet Explorer...
            sliderImage.classList.add('item-active');
        }
    }//);
}

console.log("hello woasfrld");

// initialise
window.onload = function(){
    // pop up the images at the top of the page if they're already in view
    checkSlide();
}


window.addEventListener('scroll',checkSlide); // don't debounce but also need to optimise this a bit...
//window.addEventListener('scroll', debounce(checkSlide));

console.log("hello world");

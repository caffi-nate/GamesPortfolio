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

const sectionTitles = document.querySelectorAll('.section-title');




//https://stackoverflow.com/questions/5598743/finding-elements-position-relative-to-the-document
// just easier than messing around our old way
function getCoords(elem) { // crossbrowser version
    var box = elem.getBoundingClientRect();

    var body = document.body;
    var docEl = document.documentElement;

    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;

    var top  = box.top +  scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    //return { top: Math.round(top), left: Math.round(left) };
    return Math.round(top);
}

function checkSlide(){
    let slideInAt = (window.pageYOffset + 1*window.innerHeight); // window.pageYOffset is the same as scrollY but works in IE
    for (i = 0; i < sliderImages.length; i++){ // ie fix
        var sliderImage = sliderImages[i];
        const imageTop = getCoords(sliderImage);
        let isShown = slideInAt > imageTop;
        if (isShown){ // currently not showing up in Internet Explorer...
            sliderImage.classList.add('item-active');
        }
    }


    for (j = 0; j < sectionTitles.length; j++){
        const sectionTitle = sectionTitles[j];
        let slideInAt = (window.pageYOffset + 0.85*window.innerHeight); // window.pageYOffset is the same as scrollY but works in IE

        const titleTop = getCoords(sectionTitle);

        let isShown = slideInAt > titleTop;
        if (isShown){
            let titleWords = sectionTitle.querySelectorAll('.title-word');
            for (k = 0; k < titleWords.length; k++){
                const titleWord = titleWords[k];
                titleWord.classList.add("text-in-view");
            }
        }
    }
}

console.log("hello harold");


// initialise
window.onload = function(){
    // pop up the images at the top of the page if they're already in view
    checkSlide();



}


window.addEventListener('scroll',checkSlide); // don't debounce but also need to optimise this a bit...
//window.addEventListener('scroll', debounce(checkSlide));

console.log("hello world");

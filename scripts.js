/* smooth scrolling anchor links */
document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
	anchor.addEventListener('click', function (e) {
		e.preventDefault(); // don't snap immediately
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});

/* sticky navigation bar */
const nav = document.querySelector('#main');
let topOfNav = nav.offsetTop;

function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }
}

/* hover images testing */
function startPreviewGif(e){
	let src = e.currentTarget.querySelector('img').src;
	const newImage = src.replace(".png", ".gif");

	/* only load a gif if we find it in files*/
	if (doesFileExist(newImage)){
		e.currentTarget.querySelector('img').src = newImage;
	}
}

function stopPreviewGif(e){
	let src = e.currentTarget.querySelector('img').src;
	const newImage = src.replace(".gif", ".png");
	e.currentTarget.querySelector('img').src = newImage;
}

function doesFileExist(url) {
	/* TODO: XMLHttpRequest apparently deprecated, find a better method for checking */
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', url, false);
    xhr.send();
     
    if (xhr.status == "404") {
        return false;
    } else {
        return true;
    }
}




window.addEventListener('scroll', fixNav);
const items = document.querySelectorAll('.project-item');
items.forEach(item => item.addEventListener('mouseover', startPreviewGif));
items.forEach(item => item.addEventListener('mouseout', stopPreviewGif));
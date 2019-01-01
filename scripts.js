/* smooth scrolling anchor links */
function smoothNavigation(e){
	console.log(e);

	document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
		anchor.addEventListener('click', function (e) {
			e.preventDefault(); // don't snap immediately

			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth'
			});
		});
	});
}

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

window.addEventListener('scroll', fixNav);
window.addEventListener('mousedown',smoothNavigation);
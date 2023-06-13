


let banner_container = document.querySelectorAll(".banner-container");
// let subtitle = document.querySelector(".subtitle-text");
let nav = document.querySelector("nav");

// service cards
let service_card = document.querySelectorAll(".card");


// loader
let loader = document.getElementById('pre-loader');

window.addEventListener("load", () => {
	loader.style.display = "none";
	banner_container.classList.add("banner-container-loaded");
	// subtitle.classList.add("subtitle-loaded");
	// for (let i = 0; i < service_card.length; i++) {
	// 	service_card[i].classList.add("card-scroll");
	// }

});

let observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		// console.log(entry);
		if(entry.isIntersecting){
			// console.log(entry.target);
			entry.target.classList.add("card-scroll");
		}
		// else{
		// 	entry.target.classList.remove("card-scroll");
		// }
	});
});

service_card.forEach((el) => {
	observer.observe(el)
});

window.onscroll = () => {
	// console.log("Someone ust scrolled" + scrollY);
	if(scrollY > 20){
		nav.classList.add("navscrolled");
	}
	else{
		nav.classList.remove("navscrolled");
	}
}
// activate navigation
const openNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const body = document.querySelector("body");
openNav.addEventListener("click", () => {
	// if (header.classList.contains("nav-open")) {
	// 	header.classList.remove("nav-open");
	// } else {
	// 	header.classList.add("nav-open");
	// }
	header.classList.toggle("nav-open");
});
// set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//close navigation when we navigate
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
	link.addEventListener("click", function (e) {
		// Close mobile navigation
		header.classList.remove("nav-open");
	});
});

// stick nav just after i leave hero section
const heroSection = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
	function (entries) {
		const ent = entries[0];
		console.log("ent", ent.isIntersecting);
		if (ent.isIntersecting) {
			body.classList.remove("sticky");
		} else {
			body.classList.add("sticky");
		}
	},
	{
		root: null,
		threshold: 0,
		rootMargin: "-80px",
	}
);
obs.observe(heroSection);
///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
	var flex = document.createElement("div");
	flex.style.display = "flex";
	flex.style.flexDirection = "column";
	flex.style.rowGap = "1px";

	flex.appendChild(document.createElement("div"));
	flex.appendChild(document.createElement("div"));

	document.body.appendChild(flex);
	var isSupported = flex.scrollHeight === 1;
	flex.parentNode.removeChild(flex);
	console.log(isSupported);

	if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

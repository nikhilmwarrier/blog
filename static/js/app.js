let theme = window.matchMedia("(prefers-color-scheme: dark)").matches
	? "dark"
	: "light";
theme = localStorage.getItem("theme") ? localStorage.getItem("theme") : theme;
setTheme(theme);
console.log(theme);

function setTheme(themeName) {
	document.documentElement.classList = themeName;
	const giscusScript = document.querySelector(
		'script[data-repo="nikhilmwarrier/blog"]'
	);
	if (theme === "dark") {
		if(giscusScript !== null){
			giscusScript.setAttribute("data-theme", "dark_dimmed");
		}
	} else if (theme === "light") {
		if(giscusScript !== null){
			giscusScript.setAttribute("data-theme", "dark_dimmed");
		}
	}
	localStorage.setItem("theme", themeName);
}

function toggleTheme() {
	theme = theme == "light" ? "dark" : "light";
	setTheme(theme);
}

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	const navbar = document.querySelector("nav");
	let currentScrollPos = window.pageYOffset;
	if (currentScrollPos === 0) {
		navbar.style.background = "var(--backgroud)";
		navbar.style.boxShadow = "none";
	} else {
		navbar.style.background = "var(--nav-background)";
		navbar.style.boxShadow = "var(--shadow)";
	}
	if (prevScrollpos > currentScrollPos) {
		navbar.style.top = "2px";
	} else {
		navbar.style.top = "-75px";
	}
	prevScrollpos = currentScrollPos;
};
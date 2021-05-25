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
		giscusScript.setAttribute("data-theme", "dark_dimmed");
	} else if (theme === "light") {
		giscusScript.setAttribute("data-theme", "light");
	}
	localStorage.setItem("theme", themeName);
}

function toggleTheme() {
	theme = theme == "light" ? "dark" : "light";
	setTheme(theme);
}

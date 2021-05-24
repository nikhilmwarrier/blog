let theme = window.matchMedia("(prefers-color-scheme: dark)").matches
	? "dark"
	: "light";
theme = localStorage.getItem("theme") ? localStorage.getItem("theme") : theme;
setTheme(theme);
console.log(theme);

function setTheme(themeName) {
	document.documentElement.classList = themeName;
	localStorage.setItem("theme", themeName);
}

function toggleTheme() {
	theme = theme == "light" ? "dark" : "light";
	setTheme(theme);
}

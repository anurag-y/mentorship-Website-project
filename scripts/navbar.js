const button = document.querySelector("header button");
const nav = document.querySelector("#navbar");

let isEnable = false;
button.addEventListener("click", () => {
	if (!isEnable) {
		nav.style.transform = "scale(1)";
		isEnable = true;
		button.innerHTML = "X";
	} else {
		nav.style.transform = "scale(0)";
		isEnable = false;
		button.innerHTML = "Menu";
	}
});

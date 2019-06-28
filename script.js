function createParagraph(text, className, animated, animation) {
	let p = document.createElement("p");
	p.innerText = text;
	p.classList.add(className, animation, animated);
	return p;
}
window.addEventListener("keypress", function(e) {
	let oldP = document.querySelector(".letter");
	if (oldP) oldP.parentElement.removeChild(oldP);
	let p = createParagraph(e.key, "letter", "animated", "flip");
	document.body.append(p);
});

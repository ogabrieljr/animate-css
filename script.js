let div = document.querySelector(".letter");
document.addEventListener("keydown", function(e) {
	div.textContent = e.key;
});

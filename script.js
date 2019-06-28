function createParagraph(text, className, animation, animated){
  var p = document.createElement("p");
  p.innerText = text;
  if(className){
      p.classList.add(className, animation, animated)
  }
  return p;
}
window.addEventListener("keypress", function (e) {
  var oldP = document.querySelector(".letter");
  if(oldP !== null){
      oldP.parentElement.removeChild(oldP)
  }
  var p = createParagraph(e.key, "letter", "animated", "flip");
  document.body.append(p);
})

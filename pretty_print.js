let element = document.getElementsByClassName('notChosen');
Array.prototype.forEach.call(element, function(el, index, array) {
  el.parentNode.style.display = "none"
})

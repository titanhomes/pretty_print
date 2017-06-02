let element = document.getElementsByClassName('notChosen');
Array.prototype.forEach.call(element, function(el, index, array) {
  if (el.parentNode.nodeName != "TBODY") {
    el.parentNode.style.display = "none";
  }
})

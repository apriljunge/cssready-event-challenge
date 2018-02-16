var element     = document.querySelector('body'),
    style       = window.getComputedStyle(element),
    fontFamily  = style.getPropertyValue('font-family');

if (fontFamily === "success") {
  element.innerHTML = element.innerHTML + "<div class='success'>test passed</div>"
}

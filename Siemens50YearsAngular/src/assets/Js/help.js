var isScrolling = false;
 
function eventListner(){
    window.addEventListener("scroll", throttleScroll, false);
}
function throttleScroll(e) {
  if (isScrolling == false) {
    window.requestAnimationFrame(function() {
      scrolling(e);
      isScrolling = false;
    });
  }
  isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

function scrolling(e) {
    var listItems = document.querySelectorAll(".animated-content");
  for (var i = 0; i < listItems.length; i++) {
    var listItem = listItems[i];

    if (isPartiallyVisible(listItem)) {
      listItem.classList.add("active");
    } else {
      listItem.classList.remove("active");
    }
  }
}


function isPartiallyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();

  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
  var height = elementBoundary.height;

  return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function isFullyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();

  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;

  return ((top >= 0) && (bottom <= window.innerHeight));
}
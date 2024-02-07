document.addEventListener('wheel', function (e) {
  if (!e.ctrlKey)
    return;
  e.preventDefault();
  window.scrollBy(e.deltaX, e.deltaY);
}, {passive: false});

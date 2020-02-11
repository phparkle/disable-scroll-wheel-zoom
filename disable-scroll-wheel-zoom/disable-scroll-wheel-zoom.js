function wheelCallback(e) {
	if (!e.ctrlKey)
		return;
	e.preventDefault();
	e.stopPropagation();
}
window.addEventListener('wheel', wheelCallback, {passive: false});
document.addEventListener('wheel', wheelCallback, {passive: false});

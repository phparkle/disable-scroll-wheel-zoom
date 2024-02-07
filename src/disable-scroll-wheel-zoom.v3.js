// Listen for the "wheel" event
document.addEventListener("wheel", function(event) {
    // Check if the Ctrl key is pressed
    if (event.ctrlKey) {
        // Prevent the default browser behavior of zooming
        event.preventDefault();

        // Smoothly scroll the window
        window.scrollBy({
            // Scroll horizontally by the amount specified by the wheel event
            left: event.deltaX,
            // Scroll vertically by the amount specified by the wheel event
            top: event.deltaY,
            // Use smooth scrolling behavior
            behavior: 'smooth'
        });
    }
    // Check if the Ctrl key is pressed along with the "+" key
    else if (event.ctrlKey && event.deltaY > 0) {
        // Prevent the default browser behavior of zooming
        event.preventDefault();
    }
    // Check if the Ctrl key is pressed along with the "-" key
    else if (event.ctrlKey && event.deltaY < 0) {
        // Prevent the default browser behavior of zooming
        event.preventDefault();
    }
}, { passive: false }); // Specify that the event is not passive, allowing preventDefault() to be called

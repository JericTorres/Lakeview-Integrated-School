// Change header background color on scroll
window.onscroll = function() { changeHeaderBackground() };

// Get the header
var header = document.querySelector("nav.navbar");

// Function to change the header background
function changeHeaderBackground() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}

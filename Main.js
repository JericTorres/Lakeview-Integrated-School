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

// Audio play on user interaction (click)
window.onload = function() {
    var bgMusic = document.getElementById('bg-music');
    
    // Create a button to start the music
    var musicButton = document.createElement('button');
    musicButton.innerText = 'Click to play background music';
    musicButton.style.position = 'absolute';
    musicButton.style.top = '50%';
    musicButton.style.left = '50%';
    musicButton.style.transform = 'translate(-50%, -50%)';
    musicButton.style.padding = '10px 20px';
    musicButton.style.fontSize = '18px';
    document.body.appendChild(musicButton);
    
    // Add event listener to start the music on click
    musicButton.addEventListener('click', function() {
        bgMusic.play();
        musicButton.style.display = 'none';  // Hide the button after playing
    });
};

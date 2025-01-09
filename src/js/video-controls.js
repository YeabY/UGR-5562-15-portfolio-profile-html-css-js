// Select video and popup elements
const videoWindow = document.getElementById('pubgGameplay');
const popup = document.getElementById('popupMessage');

// Function to show the popup
function showPopup() {
    popup.classList.add('show'); // Add the 'show' class to make it visible
    popup.classList.remove('hide'); // Ensure the hide class is removed
    setTimeout(() => {
        popup.classList.add('hide'); // Add the hide class after delay
        popup.classList.remove('show'); // Remove the show class
    }, 4000);
}

// Handle click to add controls
videoWindow.addEventListener('click', function () {
    if (!this.hasAttribute('controls')) {
        this.setAttribute('controls', 'controls');
        this.style.width = '313px';
        this.style.marginLeft = '-1px';
        this.style.marginTop = '-130px';
        this.style.zIndex = 2;
        this.classList.add('controls-visible'); // Add class when controls are visible
        if (window.innerWidth > 874 || window.innerHeight > 874) {
            showPopup();
        }
    }
});




// Handle clicks outside the video to remove controls
document.addEventListener('click', function (event) {
    const isClickOutsideVideo = !videoWindow.contains(event.target);
    if (isClickOutsideVideo) {
        videoWindow.removeAttribute('controls');
        videoWindow.style.width = '120px';
        videoWindow.classList.remove('controls-visible'); // Remove class when controls are not visible
        videoWindow.pause();
        videoWindow.style.marginLeft = '100px';
        videoWindow.style.marginTop = '0px';
        videoWindow.style.zIndex = 0;
    }
});

// Track fullscreen changes and toggle a class
document.addEventListener('fullscreenchange', function () {
    if (document.fullscreenElement === videoWindow) {
        videoWindow.classList.add('fullscreen-mode');
    } else {
        videoWindow.classList.remove('fullscreen-mode');
    }
});
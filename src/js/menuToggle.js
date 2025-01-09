const menuPanel = document.querySelector('.nav-mobile-tablet ul');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const closeIconSrc = 'images/hamburger-menu-icon-close.jpg';

document.addEventListener('click', function(event) {
    const isClickOutsideMenu = !menuPanel.contains(event.target) && !hamburgerMenu.contains(event.target);
    const isMenuOpen = hamburgerMenu.getAttribute('src') === closeIconSrc;

    if (isClickOutsideMenu && isMenuOpen) {
        switchPanel();
    }
});

function switchPanel() {
    const menuIcon = document.querySelector('.hamburger-menu');
    const menuPanel = document.querySelector('.nav-mobile-tablet ul');
    const openIconSrc = 'images/hamburger-menu-icon-open.jpg';
    const closeIconSrc = 'images/hamburger-menu-icon-close.jpg';

    // Apply transition styles
    const transitionStyle = "opacity 0.8s ease";
    menuIcon.style.transition = transitionStyle;
    menuPanel.style.transition = transitionStyle;

    // Fade out effect
    menuIcon.style.opacity = 0;
    menuPanel.style.opacity = 0;

    // Wait for the fade-out effect to complete
    setTimeout(() => {
        const isMenuOpen = menuIcon.getAttribute('src') === openIconSrc;

        // Toggle the menu icon and panel display
        menuIcon.setAttribute('src', isMenuOpen ? closeIconSrc : openIconSrc);
        menuPanel.style.display = isMenuOpen ? 'flex' : 'none';

        // Fade in effect
        menuIcon.style.opacity = 1;
        menuPanel.style.opacity = 1;
    }, 400);
}
